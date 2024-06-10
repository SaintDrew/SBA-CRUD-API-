require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');
// const { connect } = require('mongoose');

const app = express();
const PORT = 5000 || process.env.PORT;

// Connect to DB 
connectDB();

app.use(express.static('public'));


// Templating Engine
app.use(expressLayout);
app.set('layout', '/Users/macbook/sei_classwork/319-mongodb/mongodb-SBA/views/layouts/main.ejs');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));


app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`);
});
