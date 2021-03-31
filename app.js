const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const postRoutes = require("./routes/postroutes");

const app = express();

const port = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;

app.use(express.json()); 

// Connecting to MongoDB
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send({ message: "Namaste from the server!"})
})

app.use("/apis", postRoutes);

module.exports = app.listen(port, () => {
    console.log(`The server is running at port ${port}.`);
});