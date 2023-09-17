const express = require("express"); 
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/planets",require("./routes"));

server.use("*",(req,res) => { //respuesta de error universal
    res.status(404).send("Not found")
});

server.use((err,req,res,next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    })
}); //esto para mejorar y poder clasificar el tipo de error del manejador de error de Express


module.exports = server;