// models/userModel.js
const sqlite3 = require('sqlite3').verbose();

function setupDatabase() {
    const db = new sqlite3.Database('./database.db', (err) => {
        if (err) {
            console.error('Error opening database:', err.message);
            return;
        }
        console.log('Connected to the database.');

        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE
        )`, (err) => {
            if (err) {
                console.error('Error creating users table:', err.message);
            } else {
                console.log('Successfully created users table');
            }
        });

        db.close((err) => {
            if (err) {
                console.error('Error closing the database:', err.message);
            }
        });
    });
}

module.exports = {
    setupDatabase
};