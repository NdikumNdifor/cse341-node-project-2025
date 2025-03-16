require("dotenv").config();
const { MongoClient } = require("mongodb");

let _db;

const initDB = (callback) => {
    if (_db) {
        console.log("Database is already initialized.");
        return callback(null, _db); 
    }

    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client.db("myFirstDatabase"); // Replace with your actual DB name
            console.log("Database initialized.");
            callback(null, _db);
        })
        .catch((err) => {
            console.error("Database connection error:", err);
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw new Error("Database not initialized. Call initDB first.");
    }
    return _db;
};

// Optional: Function to close the DB connection
const closeDb = () => {
    if (_db) {
        _db.client.close();
        _db = null;
        console.log("Database connection closed.");
    }
};

module.exports = { initDB, getDb, closeDb };