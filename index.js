const express = require('express');
const mongoose = require('mongoose');
const postRoute = require("./routes/routes/post.route.js");
const Post = require('/Users/macbook/sei_classwork/319-mongodb/mongodb-SBA/models/post.model.js');
const app = express();


// Using Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.use('/api/posts', postRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
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
