const {response} = require("../utils")
const axios = require('axios');

module.exports = async (req,res) => {
    const updates = req.body
    const result = await axios.put("http://database:8004/Character",updates)
    response(res,200,result.data)
    }