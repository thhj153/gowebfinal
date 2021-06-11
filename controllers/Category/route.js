const express = require("express");
const router = express.Router();

const adminMiddleware = require("../../middleware/adminMiddleware");

const storeCategoryController = require("./storeCategory");
const manageCategoryController = require("./getCategory");
const deleteCategoryController = require("./deleteCategory");

router.get("/", adminMiddleware, manageCategoryController);
router.post("/store", adminMiddleware, storeCategoryController);
router.post("/delete", adminMiddleware, deleteCategoryController);

module.exports = router;
