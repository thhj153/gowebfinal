const express = require('express');
const router = express.Router();

const adminMiddleware = require("../../middleware/adminMiddleware");
const authMiddleware = require("../../middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("../../middleware/redirectIfAuthenticatedMiddleware");
const validateMiddleware = require("../../middleware/validateMiddleware");

const homeController = require("./home");

router.get("/", homeController);

module.exports = router;