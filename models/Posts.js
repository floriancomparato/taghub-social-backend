/* Posts Model */
/* Imports */
const mongoose = require("mongoose");

/* Model */
const Posts = mongoose.model("Posts", {
  message: String,
});

module.exports = Posts;
