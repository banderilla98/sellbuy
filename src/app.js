const Database = require("better-sqlite3");
const express = require('express');

const db = new Database('app.db');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const query = "SELECT * FROM users";
    const users = db.prepare(query).all();
    res.json({ users: users });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Do not close the database connection here, unless you want to shut it down explicitly.
// db.close();
