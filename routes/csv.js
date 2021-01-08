const express = require("express");
const routers = express.Router();

const {converter} = require("../controllers/csv")


routers.post('/csv',converter);


module.exports=routers;