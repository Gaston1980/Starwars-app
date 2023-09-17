module.exports = (req,res,next) => {
  const {title,name,_id} = req.body
  if(_id && name || _id && title) return next();
  else{
    throw Error("No se pudo crear, falta el id number o el nombre")
  }
}