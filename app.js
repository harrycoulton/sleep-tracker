//create the express app
const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./Config/routes')

//use any middleware
app.use(cors())

//make the app available elsewhere
module.exports = app