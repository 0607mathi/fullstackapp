
// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'qsplearning',
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Define a simple API route
app.get('/', (req, res) => {
    res.json({ message: "hiuho" });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
