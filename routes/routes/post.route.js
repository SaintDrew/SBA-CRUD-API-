const express = require("express");
const Post = require('/Users/macbook/sei_classwork/319-mongodb/mongodb-SBA/models/post.model.js');
const router = express.Router();
const {getPosts} = require('mongodb-SBA/controllers/post.controllers.js')
const {getPosts, getPost, createPost, updatePost, deletePost} = require('../../controllers/post.controller');


router.get('/', getPosts);
router.get("/:id", getPost);

router.post("/", createPost);

// updating a article
router.put("/:id", updatePost);

// // deleting a article
// router.delete("/:id", deletePost);


module.exports = router;