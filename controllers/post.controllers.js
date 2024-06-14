const Post = require('../models/post.model');


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.messgae });
    }
}

module.exports = {
    getPosts
}