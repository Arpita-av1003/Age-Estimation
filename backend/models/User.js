// 1. Bring in the Mongoose tool
const mongoose = require('mongoose');

// 2. Create the "Blueprint" (The Schema)
const userSchema = new mongoose.Schema({
  
  name: { 
    type: String, 
    required: true // The bouncer will reject the save if they don't provide a name
  },
  
  email: { 
    type: String, 
    required: true, 
    unique: true // The bouncer checks the database. If this email already exists, it rejects the save!
  },
  
  password: { 
    type: String, 
    required: true // We need this to log them in later
  },
  
  createdAt: { 
    type: Date, 
    default: Date.now // The bouncer automatically stamps the exact date and time they signed up. The user doesn't have to provide this!
  }
});

// 3. Turn the Blueprint into a usable Tool (The Model)
module.exports = mongoose.model('User', userSchema);