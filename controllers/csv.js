const _ = require("lodash");

exports.converter = async (req, res, next) =>{
    return res.json(req.body)
}