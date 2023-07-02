/** MANDATORY TO INTEGRATE MYSQL TO REACT APP */
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

/** SPECIFY DATABASE */
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sobamilk",
  database: "loginsystem",
});

/** REGISTER NEW USER */
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

/** LOGIN EXISTING USER */
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

/** REGISTER: ENSURE THAT THE USERNAME IS NOT ALREADY TAKEN */
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

// RANDOM ==========================================================
/** RETRIEVE DATA FROM savedRandom */
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

/** CHANGE DATA FROM savedRandom */
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

// RED ==========================================================
/** RETRIEVE DATA FROM savedRED */
app.post("/getSavedRed", (req, res) => {
  const username = req.body.username;
  db.query(
    "SELECT savedRed FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) res.send({ err: err });
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "No savedRed" });
      }
    }
  );
});

/** CHANGE DATA FROM savedRed */
app.post("/savedRed", (req, res) => {
  const hexes = req.body.hexes;
  const username = req.body.username;
  db.query(
    "UPDATE users SET `savedRed` = ? WHERE username = ?",
    [hexes, username],
    (err, result) => {
      console.log("ERROR: " + err);
    }
  );
});

// GREEN ==========================================================
/** RETRIEVE DATA FROM savedGreen */
app.post("/getSavedGreen", (req, res) => {
  const username = req.body.username;
  db.query(
    "SELECT savedGreen FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) res.send({ err: err });
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "No savedGreen" });
      }
    }
  );
});

/** CHANGE DATA FROM savedGreen */
app.post("/savedGreen", (req, res) => {
  const hexes = req.body.hexes;
  const username = req.body.username;
  db.query(
    "UPDATE users SET `savedGreen` = ? WHERE username = ?",
    [hexes, username],
    (err, result) => {
      console.log("ERROR: " + err);
    }
  );
});

// BLUE ==========================================================
/** RETRIEVE DATA FROM savedBlue */
app.post("/getSavedBlue", (req, res) => {
  const username = req.body.username;
  db.query(
    "SELECT savedBlue FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) res.send({ err: err });
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "No savedBlue" });
      }
    }
  );
});

/** CHANGE DATA FROM savedBlue */
app.post("/savedBlue", (req, res) => {
  const hexes = req.body.hexes;
  const username = req.body.username;
  db.query(
    "UPDATE users SET `savedBlue` = ? WHERE username = ?",
    [hexes, username],
    (err, result) => {
      console.log("ERROR: " + err);
    }
  );
});

/** ENSURE SERVER IS RUNNING */
app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001!");
});
