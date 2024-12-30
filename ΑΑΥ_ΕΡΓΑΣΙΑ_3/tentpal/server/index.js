const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const userModel = require('./models/userModel');

const app = express();
const port = 8080;

// Connect to database
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the database.');
});

// Middleware
// Allow CORS
app.use(cors());
app.use(express.json()); // now we can read JSON from the request body

// initialize the database
userModel.setupDatabase();




// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


app.get('/', (req, res) => {
    res.send('ERRORE')
})