// Load environment variables from the .env file
require('dotenv').config();

// Import the mysql2 library for database connection
const mysql = require('mysql2');

// Log the database configuration for debugging purposes
console.log('DB Config:', {
  host: process.env.DB_HOST, // Database host
  user: process.env.DB_USER, // Database user
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME // Database name
});

// Create a connection to the MySQL database using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Establish the database connection and handle errors
db.connect((err) => {
  if (err) {
    // Log the error and terminate the process if the connection fails
    console.error('Database connection failed:', err.stack);
    process.exit(1);
  }
  // Log a success message if the connection is established
  console.log('✅ Connected to MySQL database.');
});

// Export the database connection object for use in other parts of the application
module.exports = db;
