const {Schema} = require("mongoose");

const characterSchema = new Schema({
        _id: String,
        name: String,
        height: String,
        mass: String,
        hair_color: String,
        skin_color: String,
        eye_color: String,
        birth_year: String,
        gender:{
            type: String,
            enum : ["male","female","unknown","n/a"],
            default: "unknown"
        },
        homeworld:{type:String,ref:"Planet"}, //String que hace referencia al ID del Planet
        films: [{type:String, ref:"Film"}
        ]// Array de strings que hacen referencia a cada ID de cada Film
      
});
//defino un metodo para mi modelo Character, no se puede usar arrow function!xq quiero usar this. y que haga referecnia explicitamente a mi modelo unicamente.
characterSchema.statics.list = async function (){   
return await this.find() //equivale a Character.find()
.populate("homeworld",["_id", "name"])
.populate("films",["_id", "title"])
};



characterSchema.statics.get = async function (id){
    return await this.findById(id)// findById no necesita como argumento un objeto 
    .populate("homeworld",["_id", "name"])
    .populate("films",["_id", "title"])
    };

characterSchema.statics.insert = async function (character){
    return await this.create(character)
};

characterSchema.statics.delete = async function (_id){
    return await this.deleteOne({_id})
};

characterSchema.statics.update = async function (filter,update){
    return await this.findOneAndUpdate(filter,update,{new:true})
};


module.exports = characterSchema;
