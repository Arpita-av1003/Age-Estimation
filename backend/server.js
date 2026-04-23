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
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

  // --- SIGN UP ROUTE ---
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered." });
    }

    // Scramble the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user to the database
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });
    
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

    // Find the user by their email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Compare the typed password with the scrambled one in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Create the VIP Pass (JWT Token)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.json({ 
      message: "Login successful!", 
      token: token,
      name: user.name 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during login." });
  }
});

// Store image in memory temporarily
const upload = multer({ storage: multer.memoryStorage() });

// React sends 'image' -> Node receives it -> Node sends 'file' to Python
app.post('/api/estimate-age', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No image provided' });

        const formData = new FormData();
        formData.append('file', req.file.buffer, req.file.originalname);

        const mlResponse = await axios.post('http://localhost:5000/predict', formData, {
            headers: formData.getHeaders()
        });

        res.json({ age: mlResponse.data.estimated_age });

    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            res.status(500).json({ error: error.response.data.error });
        } else {
            res.status(500).json({ error: 'Failed to analyze image.' });
        }
    }
});

app.listen(3001, () => console.log('Node Middleman running on port 3001'));