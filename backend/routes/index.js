const express = require("express");
const router = express.Router();

const usersRoute = require("./users");

router.use("/api/v1/users", usersRoute);

module.exports = router;
