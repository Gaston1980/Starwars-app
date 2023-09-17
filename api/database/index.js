const server = require("./src/server")

//const {Character, Film, Planet} = require("./src/database")


server.listen(8004,() => {
    console.log("DataBase service on PORT 8004")
})