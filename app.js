require("dotenv");
const express = require("express");
const app = express();

app.use(express.static("./public"));
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port);