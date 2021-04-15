const express = require("express");
const router = express.Router();

const authRoute = require("./auth");
const usersRoute = require("./users");
const productsRoute = require("./products");

router.use("/api/v1/auth", authRoute);
router.use("/api/v1/users", usersRoute);
router.use("/api/v1/products", productsRoute);

module.exports = router;
