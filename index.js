const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
app.use(fileUpload());

const home = require('./controllers/Home/route');
const posts = require('./controllers/Post/route');
const comment = require('./controllers/Comment/route');
const categories = require('./controllers/Category/route');
const user = require('./controllers/User/route');

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

app.use('/', home);
app.use('/user', user);
app.use('/posts', posts);
app.use('/categories', categories);
app.use('/comment', comment);

app.use(async (req, res) => {
  const categories = await Category.find({});
  res.render("notfound", { categories });
});
