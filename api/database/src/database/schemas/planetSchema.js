const {Schema} = require("mongoose");

const planetSchema = new Schema({
    
        _id: String,
        name: String,
        img: String,
        rotation_period: String,
        orbital_period: String,
        diameter: String,
        climate: String,
        gravity: String,
        terrain: String,
        surface_water: String,
        residents: [
         {type:String, ref:"Character"}
        ],
        films: [
          {type:String, ref:"Film"}
        ]    
})
planetSchema.statics.list = async function (){
  return await this.find() //equivale a Planet.find()
  .populate("residents",["_id", "name","gender"])
  .populate("films",["_id", "title"])
  };

  planetSchema.statics.get = async function (id){
    return await this.findById(id)// findById no necesita como argumento un objeto 
    .populate("residents",["_id", "name","gender", "img"])
    .populate("films",["_id", "title", "img"])
    };

    planetSchema.statics.insert = async function (planet){
      return await this.create(planet)
  };

  planetSchema.statics.delete = async function (_id){
    return await this.deleteOne({_id})
};

planetSchema.statics.update = async function (filter,update){
  return await this.findOneAndUpdate(filter,update,{new:true})
};

module.exports = planetSchema;