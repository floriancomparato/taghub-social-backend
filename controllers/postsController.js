/*CONTROLLERS POSTS*/

/*Import Model*/
const Posts = require("../models/Posts");

const postsController = {
  /* create post */
  postPosts: (req, res, next) => {
    const postsFormData = req.body;
    const newPosts = new Posts({
      message: postsFormData.message,
    });

    console.log(postsFormData);
    /* save posts in db*/
    newPosts.save((err) => {
      if (err) {
        res.status(500).json({ succes: false });
      } else {
        res.json({ succes: true });
      }
    });
  },
  /* displays posts from db*/

  getPosts: (req, res) => {
    Posts.find({}, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      res.send(data);
    });
  },
};

module.exports = postsController;
