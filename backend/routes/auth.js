const express = require("express");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const db = require("../database/db");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register_user);

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

module.exports = router;
