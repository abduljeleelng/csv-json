const express = require("express");
const app = express();
const port = 6000;

const bodyParser = require("body-parser");

//import routes 
const csvRoute = require("./routes/csv");

//alliing body parser
app.use(bodyParser.json());

//creating the endpoint
app.use('/api',csvRoute);

//listeing app
app.listen(port,()=>console.log(`Applications is running on ${port}`))