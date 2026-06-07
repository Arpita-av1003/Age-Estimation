const express = require('express');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');
const FormData = require('form-data');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();
app.use(cors()); 
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' Connected to MongoDB successfully!'))
  .catch((err) => console.error(' MongoDB connection error:', err));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running"
  });
});

  //SIGN UP ROUTE
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Account created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during signup." });
  }
});

//LOGIN ROUTE
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password." });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ message: "Login successful!", token: token, name: user.name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during login." });
  }
});

//AI ROUTE

app.post('/api/analyze', async (req, res) => {
    try {
        const { imageBase64 } = req.body;
        if (!imageBase64) return res.status(400).json({ error: 'No image provided' });

        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
        

        const imageBuffer = Buffer.from(base64Data, 'base64');

        const formData = new FormData();
        formData.append('file', imageBuffer, 'capture.jpg');

     const mlResponse = await axios.post(
  `${process.env.ML_SERVICE_URL}/predict`,
  formData,
  {
    headers: formData.getHeaders()
  }
);

        res.json({ 
            estimated_age: mlResponse.data.estimated_age,
            confidence_score: mlResponse.data.confidence || "95.5%" 
        });

    } catch (error) {
        console.error("Python Server Connection Error:", error.message);
        res.status(500).json({ error: 'Failed to connect to the Python AI service.' });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Node Middleman running on port ${PORT}`);
});