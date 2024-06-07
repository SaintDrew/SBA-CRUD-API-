const express = require('express');
const mongoose = require('mongoose')

const app = express() 



app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});

app.post('/api/products', (req, res) => {
    res.send("Data Received")
})


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
