const store = require("../database");

module.exports = async(req,res) => {//Paso x params el nombre del modelo
    const {model} = req.params;
    const {filter, update} = req.body;
    const response = await store[model].update(filter,update);// store es un objeto, accedo a la propiedad que viene por model y uso su metodo
    
    res.status(200).json(response !== null? {response, message:"Se ha modificado corectamente"} : "No existe ese registro para modificar" )
}
