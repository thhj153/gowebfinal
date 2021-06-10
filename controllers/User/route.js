const express = require('express');
const router = express.Router();

const adminMiddleware = require("../../middleware/adminMiddleware");
const authMiddleware = require("../../middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("../../middleware/redirectIfAuthenticatedMiddleware");
const validateMiddleware = require("../../middleware/validateMiddleware");

const authRegisterController = require("./authRegister");
const authLoginController = require("./authLogin");
const manageUserController = require("./manageUser");
const adminManageController = require("./adminManage");
const logoutController = require("./logout");
const loginUserController = require("./loginUser");
const storeUserController = require("./storeUser");
const updateUserController = require("./updateUserList");

router.get("/auth/login", redirectIfAuthenticatedMiddleware, authLoginController);
router.get("/auth/register", redirectIfAuthenticatedMiddleware, authRegisterController);

router.get("/admin", adminManageController);
//app.get("/admin/:id", adminManageController);
router.get("/list", adminMiddleware, manageUserController);
router.post("/list/store", adminMiddleware, updateUserController);

router.post("/register", redirectIfAuthenticatedMiddleware, storeUserController);
router.post("/login", redirectIfAuthenticatedMiddleware, loginUserController);
router.get("/logout", logoutController);

module.exports = router;