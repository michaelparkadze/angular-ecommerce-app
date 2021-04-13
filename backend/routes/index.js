const express = require("express");
const router = express.Router();

const usersRoute = require("./users");
const productsRoute = require("./products");

router.use("/api/v1/users", usersRoute);
router.use("/api/v1/products", productsRoute);

module.exports = router;
