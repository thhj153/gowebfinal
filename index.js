const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
app.use(fileUpload());

const newPostController = require("./controllers/R_newPost");
const homeController = require("./controllers/R_home");
const manageUserController = require("./controllers/R_manageUser");
const getPostController = require("./controllers/R_getPost");
const newUserController = require("./controllers/R_newUser");
const adminManageController = require("./controllers/R_adminManage");
const loginController = require("./controllers/R_login");
const manageCategoryController = require("./controllers/R_category");
const categoryBarController = require("./controllers/R_categoryBar");
const logoutController = require("./controllers/M_logout");
const loginUserController = require("./controllers/M_loginUser");
const storePostController = require("./controllers/M_storePost");
const storeCategoryController = require("./controllers/M_storeCategory");
const storeUserController = require("./controllers/M_storeUser");
const updateUserController = require("./controllers/M_updateUserList");
const modifyPostController = require("./controllers/R_modifyPost");
const updatePostController = require("./controllers/M_updatePost");
const deleteCategoryController = require("./controllers/M_deleteCategory");
const deletePostController = require("./controllers/M_deletePost");
const deleteCommentController = require("./controllers/M_deleteComment");
const adminMiddleware = require("./middleware/adminMiddleware");
const authMiddleware = require("./middleware/authMiddleware");
const storeCommentController = require("./controllers/M_storeComment");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware");
const validateMiddleware = require("./middleware/validateMiddleware");
const getPostListController = require("./controllers/R_getPostList");

mongoose.connect(
  "mongodb+srv://pavk:1234@cluster0.jkanj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

const ejs = require("ejs");
const Category = require("./models/Category");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4001;
}
app.listen(port, () => {
  console.log("App listening on port 4001");
});

global.loggedIn = null;
global.admin = null;

app.use("*", (req, res, next) => {
  userInfo = req.session.User;
  loggedIn = req.session.userId;
  admin = req.session.admin;
  grade = req.session.grade;
  selectedPost = req.session.selectedPost;
  selectedComment = req.session.selectedComment;
  // console.log(grade);
  next();
});

//home
app.get("/", homeController);

//post
app.get("/post/:id", authMiddleware, getPostController);
app.use("/posts/store", validateMiddleware, storePostController);
app.get("/posts/new", authMiddleware, newPostController);
app.get("/posts/modify", authMiddleware, modifyPostController);
app.post("/posts/update", validateMiddleware, updatePostController);
app.get("/posts/delete", authMiddleware, deletePostController);

app.get("/layouts/categorybar", categoryBarController);

app.get("/auth/logout", logoutController);
app.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);
app.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController);

//관리자
app.get("/admin", adminManageController);
app.get("/admin/:id", adminManageController);
// 어드민 권한 목록 추가
app.get("/userlist", adminMiddleware, manageUserController);
app.post("/userlist/store", adminMiddleware, updateUserController);
app.get("/categories", adminMiddleware, manageCategoryController);
app.post("/categories/store", adminMiddleware, storeCategoryController);
app.post("/categories/delete", adminMiddleware, deleteCategoryController);

//카테고리 별 포스트 페이지
app.get("/postlist/:id", authMiddleware, getPostListController);

//댓글 페이지
app.post("/comment/store", authMiddleware, storeCommentController);
app.get("/comment/delete/:id", authMiddleware, deleteCommentController);

app.post(
  "/users/register",
  redirectIfAuthenticatedMiddleware,
  storeUserController
);

app.post(
  "/users/login",
  redirectIfAuthenticatedMiddleware,
  loginUserController
);

app.use(async (req, res) => {
  const categories = await Category.find({});
  res.render("notfound", { categories });
});
