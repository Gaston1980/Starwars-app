const store = require("../database");

module.exports = async(req,res) => {//Paso x params el nombre del modelo y el id
    const {model,_id} = req.params;
    const response = await store[model].deleteOne({_id});// store es un objeto, accedo a la propiedad que viene por model y uso su metodo
    res.status(200).json(response)
}