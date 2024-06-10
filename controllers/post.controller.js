// const Post = require('../models/Post');

// const getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find({});
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getPost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await Post.findById(id);
//     res.status(200).json(post);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createPost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await Post.create(req.body);
//     res.status(200).json(post);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updatePost = async (req, res) => {
//     try{
//         const{ id } = req.params;
//         const post = await Post.findByIdAndUpdate(id, req.body);
        
//         if(!post) {
//             return res.status(404).json({message: "Product not found"});
//         }
//         const updatePost = await Post.findById(id);
//         res.status(200).json(updatePost);

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// };

// const deletePost = async (req, res) => {
//     try {
//         const {id} = req.params;

//         const post = await Post.findByIdandDelete(id);

//         if(!post) {
//             return res.status(404).json({message: "Post not found"});
//         }
//         res.status(200).json({message: "Post deleted successfully"});

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// };


// module.exports = {
//   getPosts,
//   getPost,
//   createPost,
//   updatePost,
//   deletePost
// };
