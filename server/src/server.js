require("dotenv").config();
const express = require("express");

const app = express();

app.use(5000, () => console.log("Server On"));
