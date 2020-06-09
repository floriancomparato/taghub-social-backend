/* ROUTE POSTS */
/* Imports */
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

/* VERBS */
router.get("/", postsController.getPosts);
router.post("/", postsController.postPosts);

module.exports = router;
