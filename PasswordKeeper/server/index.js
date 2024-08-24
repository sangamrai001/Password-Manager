const express = require("express");
const app = express();
const mysql = require("mysql2");
require('dotenv').config();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Sangam01",
    database: "passwordManager"
});

app.post("/addpass", (req, res) => {
    const { pass, title } = req.body;
    console.log("Received password:", pass);
    db.query(
        "INSERT INTO all_passwords (password, title) VALUES (?, ?)",
        [pass, title],
        (err, result) => {
            if (err) {
                console.log("Error inserting data:", err);
                res.status(500).send("Error inserting data");
            } else {
                console.log("Password successfully inserted");
                res.send("success");
            }
        }
    );
});

app.get("/getPasswords", (req, res) => {
    db.query("SELECT * FROM all_passwords", (err, result) => {
        if (err) {
            console.log("Error fetching passwords:", err);
            res.status(500).send({ error: "Error fetching passwords" });
        } else {
            res.json(result); 
        }
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("App is running successfully on port " + (process.env.PORT || 3000));
});
