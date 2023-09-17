// Aca vamos a crear la conexion con nuestra DB
const mongoose = require("mongoose");
const {MONGO_URI} = require("../config/envs")

const conn = mongoose.createConnection(MONGO_URI)

// Ahora definimos nuestros modelos:
// ahora ya no hace falta xq donde lo exporto tambien lo creo
//const Character = conn.model("Character", require("./schemas/characterSchema"));
//const Film = conn.model("Film", require("./schemas/filmSchema"));
//const Planet = conn.model("Planet", require("./schemas/planetSchema"));


//Planet.find()
//.populate("residents") //si quiero solo ver algunas propiedades de films, agrego un array con las propiedades dentro, ejem ("residents",["_id","name"]) 
//.populate("films")
//.then((res)=> console.log(res[5]))


module.exports = {
    Character: conn.model("Character", require("./schemas/characterSchema")),
    Film: conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema"))  
}

