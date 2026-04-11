const express = require('express');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');
const FormData = require('form-data');

const app = express();
// Allow requests from React
app.use(cors()); 
app.use(express.json());

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