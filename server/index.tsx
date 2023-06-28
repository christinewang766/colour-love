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

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) res.send({ err: err });
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password!" });
      }
    }
  );
});

app.post("/checkusername", (req, res) => {
  const username = req.body.username;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) res.send({ err: err });
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Existing Username" });
      }
    }
  );
});

app.post("/getSavedRandom", (req, res) => {
  const username = req.body.username;
  db.query(
    "SELECT savedRandom FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) res.send({ err: err });
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "No savedRandom" });
      }
    }
  );
});

app.post("/savedRandom", (req, res) => {
  const hexes = req.body.hexes;
  const username = req.body.username;
  db.query(
    "UPDATE users SET `savedRandom` = ? WHERE username = ?",
    [hexes, username],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001!");
});
