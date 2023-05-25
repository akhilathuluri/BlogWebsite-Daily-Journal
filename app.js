//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const methodOverride = require('method-override');


const homeStartingContent = "Hii My Name Is Akhil This Is A Simple Blog Website Made By Me Using Node.js, Express.js, EJS, MongoDB. You Can Add New Posts By Clicking On The Compose Button. You Can Also Delete The Posts By Clicking On The Delete Button. You Can Also Read The Posts By Clicking On The Read More Button, Hope You Like It, Thank You. ";
const aboutContent = "Hi! I'm a Front-End Developer and Open Source Enthusiast. I love building things and sharing them with the world. You can find me on GitHub, Twitter, and LinkedIn. I'm currently working on a few projects, including a personal website and a few open source projects. I'm also a huge fan of the web and its potential to change the world. I'm currently working on a few projects, including a personal website and a few open source projects.";
const contactContent = "You can contact me on my email: theprevioustech@proton.com or you can also contact me on my social media handles: Instagram: @athuluriakhil, Twitter: @akhilathuluri1, GitHub: @akhilathuluri, Thank You";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride('_method'));

mongoose.connect("mongodb://127.0.0.1:27017/blogDB", {useNewUrlParser: true, useUnifiedTopology: true});

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){
  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
    });
  });
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  post.save(function(err){
    if (!err){
      res.redirect("/");
    }
  });
});

app.delete("/posts/:postId", function(req, res) {
  const requestedPostId = req.params.postId;

  Post.findByIdAndRemove(requestedPostId, function(err) {
    if (!err) {
      res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){
  const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
