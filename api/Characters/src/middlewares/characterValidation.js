const {ClientError} = require("../utils/errors");


//Creo mi middleware. Reciben siempre como arg req, res, next
module.exports = (req,res,next) => {
 const {name} = req.body;
 if(name) return next();
 else throw new ClientError("Falta el nombre del personaje",401);
}