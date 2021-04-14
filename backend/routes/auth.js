const express = require("express");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const db = require("../database/db");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = md5(password.toString());

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, hashedPassword],
    (err, result) => {
      if (err) res.send({ error: err });

      const token = jwt.sign({ data: result }, "secret");
      res.send({ token });
    }
  );
});

router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  const hashedPassword = md5(password.toString());

  db.query(
    `SELECT email FROM users WHERE email = ?`,
    [email],
    (err, result) => {
      if (result.length > 0) {
        res.send({
          error: "Email address is in use, please try a different one",
        });
      } else if (result.length === 0) {
        db.query(
          `INSERT INTO users (full_name, email, password) VALUES (?,?,?)`,
          [fullName, email, hashedPassword],
          (err, result) => {
            if (err) {
              res.send({ error: err });
            } else {
              const token = jwt.sign({ data: result }, "secret");
              res.send({
                data: result,
                message: "You have successfully registered.",
                token: token,
              });
            }
          }
        );
      }
    }
  );
});

module.exports = router;
