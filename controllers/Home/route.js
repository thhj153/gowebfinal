const express = require("express");
const router = express.Router();

const homeController = require("./home");

router.get("/", homeController);

module.exports = router;
