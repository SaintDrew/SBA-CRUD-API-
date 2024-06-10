const express = require('express');
const mongoose = require('mongoose');
// const postRoute = require("./server/routes/post.route");
const Post = require('/Users/macbook/sei_classwork/319-mongodb/mongodb-SBA/models/post.model.js');
const app = express();


// Using Middleware
app.use(express.json());


// // Routes
// app.use('/api/posts', postRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});


app.get('/api/posts/', async (req, res) =>{
    try{
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/post/:id', async (req, res) =>{
    try{
        const { id } = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/posts', async (req, res) =>{
    try{
        const post = await Post.create(req.body);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a post
app.put('/api/post/:id', async (req, res) =>{
    try{
        const { id } = req.params;
        await post.findByIdAndUpdate(id, req.body);

        if (!post) {
            return res.status(404).json({message: "Post not found"})
        }

        const updatedPost = await Post.findbyId(id);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


mongoose.connect("mongodb+srv://SaintAdmin:AbJbxATNvsbmE6Iz@clusterdb1.wwdokmu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ClusterDB1")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
console.log("Connection Failed!");
});
