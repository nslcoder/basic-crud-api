const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const postRoutes = require("./routes/posts");


const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;

app.use(express.json());

// Connecting to MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));

app.use("/posts", postRoutes);

app.listen(port, () => {
    console.log(`The server is running at port ${port}.`);
});