const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
require('dotenv').config() 
const notion = require('./notion')

/* app.get('/', (req, res) => {
    res.send("THE SERVER SIDE IS SET UP")
}) */



app.use("/notion/", require("./routes/notionRoute"));



app.listen(port); //Line 6