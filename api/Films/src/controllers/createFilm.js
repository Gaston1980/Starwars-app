const {response} = require("../utils")
const axios = require('axios');

module.exports = async (req,res) => {
    const newFilm = req.body
    const result = await axios.post("http://database:8004/Film",newFilm)
    response(res,201,result.data)
    }