const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

const filmRoutes = require('./filmRoutes')

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/filmFinder', filmRoutes)

module.exports = app;