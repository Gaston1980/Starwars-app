const {response} = require("../utils")
const axios = require('axios');

module.exports = async (req,res) => {
    const newPlanet = req.body
    const result = await axios.post("http://database:8004/Planet",newPlanet)
    response(res,201,result.data)
    }