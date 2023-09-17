const {response} = require("../utils")
const axios = require('axios');

module.exports = async (req,res) => {
    const {_id} = req.params;
    const result = await axios.delete(`http://database:8004/Planet/${_id}`)
    response(res,200,result.data)
    }