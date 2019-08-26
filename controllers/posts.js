//const bodyParser = require('body-parser');

const Post = require('../models/post');

exports.createPost = (req, res, next) => {

  const post = new Post({
    task: req.body.task,
    creator: req.userData.userId
  });

  post.save().then(createdPost => {
    res.status(200).json({
      message: 'Task created successfully!',
      post: {
        id: createdPost._id,
        task: createdPost.task,
        creator: createdPost.creator
      }
    });
  });
};

exports.getPosts = (req, res, next) => {
Post.find()
    .then(taskresponse => {
      console.log(taskresponse);
      res.status(200).json({
        message: 'Post fetched successfully!',
        posts: taskresponse
      });
    });
};

exports.getSinglePost = (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404);
    }
  });
};

exports.editPost = (req, res, next) => {
  let imagePath = req.body.imagePath;

  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  });

  Post.updateOne({ _id: req.params.id, creator: req.userData.userId }, post)
  .then((result) => {
    if (result.n > 0) {
      res.status(200).json({
        message: "Post updated successfull"
      })
    } else {
      res.status(401).json({
        message: "You are not allowed!"
      });
    }
  });
};

exports.deletePost = (req, res, next) => {
  //console.log(req.params.id);
  Post.deleteOne({_id: req.params.id, creator: req.userData.userId})
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({
          message: 'Post deleted!'
        })
      } else {
        res.status(401).json({
          message: "You are not allowed!"
        });
      }
  })
};




