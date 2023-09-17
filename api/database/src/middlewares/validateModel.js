//Creo mis middlewares, siempre reciben req,res,next como arg
module.exports = (req,res,next) =>{
    const {model} = req.params;
    if(["Character","Film","Planet"].includes(model)) return next()
    else {
        throw Error("invalid model name")
    }
}