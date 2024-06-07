const express = require('express');
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route");
const Product = require('/Users/macbook/sei_classwork/319-mongodb/mongodb-SBA/models/product.model.js');
const app = express();


// Using Middleware
app.use(express.json());


// Routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});



app.get('/api/products/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/products', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a product
app.put('/api/products/:id', async (req, res) => {
    try{
        const{ id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// delete a product 

app.delete('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const product = await Product.findByIdandDelete(id);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully"});

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
