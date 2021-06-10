const express = require('express');
const router = express.Router();

const adminMiddleware = require("../../middleware/adminMiddleware");
const authMiddleware = require("../../middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("../../middleware/redirectIfAuthenticatedMiddleware");
const validateMiddleware = require("../../middleware/validateMiddleware");

const newPostController = require("./newPost");
const getPostController = require("./getPost");
const storePostController = require("./storePost");
const modifyPostController = require("./modifyPost");
const updatePostController = require("./updatePost");
const deletePostController = require("./deletePost");
const getPostListController = require("./getPostList");

router.get("/post/:id", authMiddleware, getPostController);
router.get("/list/:id", authMiddleware, getPostListController);
router.use("/store", validateMiddleware, storePostController);
router.get("/new", authMiddleware, newPostController);
router.get("/modify", authMiddleware, modifyPostController);
router.post("/update", validateMiddleware, updatePostController);
router.get("/delete", authMiddleware, deletePostController);

module.exports = router;