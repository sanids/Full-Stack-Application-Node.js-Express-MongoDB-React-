const express = require("express");
const app = express();
const mongoose = require("mongoose");  //package to connect with the database
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config(); //reading the .env file

//configure db
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB Connected'));


    mongoose.connection.on('error', err => {
        console.log(`DB connection error: ${err.message}`)});


//Get Routes
const postRoutes = require("./routes/post"); //post file in other routes directory to export functions

//Middleware
app.use(morgan("dev"));


app.use("/", postRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
}); 

