const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const {createProxyMiddleware} = require("http-proxy-middleware")

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use("/characters",createProxyMiddleware({// aca estoy redireccionando las peticiones a /characters microservicio
    target: "http://characters:8001",
    changeOrigin: true,
}))

app.use("/films",createProxyMiddleware({// aca estoy redireccionando las peticiones a /characters microservicio
    target: "http://films:8002",
    changeOrigin: true,
}))

app.use("/planets",createProxyMiddleware({// aca estoy redireccionando las peticiones a /characters microservicio
    target: "http://planets:8003",
    changeOrigin: true,
}))

app.listen(8000, () => {
    console.log("Gateway on port 8000")
})