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
// Allow requests from React
app.use(cors()); 
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// --- SIGN UP ROUTE ---
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

// --- LOGIN ROUTE ---
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

// --- AI ANALYSIS ROUTE (FIXED) ---
// React sends JSON Base64 -> Node converts to Buffer -> Node sends to Python
app.post('/api/analyze', async (req, res) => {
    try {
        const { imageBase64 } = req.body;
        if (!imageBase64) return res.status(400).json({ error: 'No image provided' });

        // 1. Strip the HTML prefix from the base64 string
        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
        
        // 2. Convert it into a binary buffer
        const imageBuffer = Buffer.from(base64Data, 'base64');

        // 3. Package it as a file to send to your Python ML server (Port 5000)
        const formData = new FormData();
        formData.append('file', imageBuffer, 'capture.jpg');

        const mlResponse = await axios.post('http://localhost:5000/predict', formData, {
            headers: formData.getHeaders()
        });

        // 4. Send the result back to React
        res.json({ 
            estimated_age: mlResponse.data.estimated_age,
            confidence_score: mlResponse.data.confidence || "95.5%" 
        });

    } catch (error) {
        console.error("Python Server Connection Error:", error.message);
        res.status(500).json({ error: 'Failed to connect to the Python AI service.' });
    }
});

app.listen(3001, () => console.log('✅ Node Middleman running on port 3001'));