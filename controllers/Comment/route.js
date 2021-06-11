const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middleware/authMiddleware");

const deleteCommentController = require("./deleteComment");
const storeCommentController = require("./storeComment");
const updateCommentController = require("./updateComment");

router.post("/store", authMiddleware, storeCommentController);
router.get("/delete/:id", authMiddleware, deleteCommentController);
router.post("/modify/:id", authMiddleware, updateCommentController);

module.exports = router;
