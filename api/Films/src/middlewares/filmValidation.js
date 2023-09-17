const {ClientError} = require("../utils/errors");


//Creo mi middleware. Reciben siempre como arg req, res, next
module.exports = (req,res,next) => {
 const {title} = req.body;
 if(title) return next();
 else throw new ClientError("Falta proveer el nombre del film",401);
}