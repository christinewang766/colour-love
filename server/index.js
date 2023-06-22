const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sobamilk",
  database: "loginsystem",
});

app.post("/register", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    
  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001!");
});
