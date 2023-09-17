const store = require("../database");

module.exports = async(req,res) => {//Paso x params el nombre del modelo
    const {model} = req.params;
    const data = req.body;
    const response = await store[model].insert(data);// store es un objeto, accedo a la propiedad que viene por model y uso su metodo
    res.status(200).json(response)
}
