// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');
require('dotenv').config(); // Load environment variables

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 8080; // Use the port from .env or default to 8080

// Middleware to parse incoming JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, idea } = req.body;

  // Validate that all required fields are provided
  if (!name || !email || !idea) {
    return res.status(400).send('Name, email, and idea are required.');
  }

  // SQL query to insert user data into the database
  const sql = 'INSERT INTO users (name, email, idea) VALUES (?, ?, ?)';
  
  db.query(sql, [name, email, idea], (err, result) => {
    if (err) {
      console.error('Database error:', err);

      // Handle duplicate email error
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).send('Email already exists in our system.');
      }

      // Generic server error response
      return res.status(500).send('Server error. Please try again later.');
    }

    // Success response
    res.send('✅ Innovation proposal submitted successfully!');
  });
});

// Example API route to provide metadata about the API
app.get('/api', (req, res) => {
  res.json({
    status: 'success',
    message: 'TechInnovate API v1.0',
    endpoints: {
      submit: '/submit (POST)', // Endpoint for submitting proposals
      docs: 'Coming soon' // Placeholder for future documentation
    }
  });
});

// Start the server and listen on the specified port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});