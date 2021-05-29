//Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Express
const app = express();

//Import routes
const {articleRoute, commentRoute} = require("./routes")

//database
const db = require("./config/database");

//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cors
app.use(cors());

//route
app.use("/", articleRoute)
app.use("/", commentRoute)

//Module Exports
module.exports = app;
