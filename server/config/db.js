const mongoose = require('mongoose');
const connectDB = async () => {

mongoose.connect("mongodb+srv://SaintAdmin:AbJbxATNvsbmE6Iz@clusterdb1.wwdokmu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDB1")
.then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
})
.catch(() => {
console.log("Connection Failed!");
});
}

module.exports = connectDB;