const {Schema} = require("mongoose");

const filmSchema = new Schema({
    
        _id: String,
        title: String,
        img: String,
        opening_crawl: String,
        director: String,
        producer:String,
        release_date: Date,
        characters: [
          {type:String, ref:"Character"}
        ],
        planets: [
            {type:String, ref:"Planet"}
        ]      
})

filmSchema.statics.list = async function (){
  return await this.find() //equivale a Film.find()
  .populate("characters",["_id", "name","gender"])
  .populate("planets",["_id", "name", "climate"])
  };

  filmSchema.statics.get = async function (id){
    return await this.findById(id)// findById no necesita como argumento un objeto 
    .populate("characters",["_id", "name","gender", "img"])
    .populate("planets",["_id", "name", "climate", "img"])
    };

    filmSchema.statics.insert = async function (film){
      return await this.create(film)
  };

  filmSchema.statics.delete = async function (_id){
    return await this.deleteOne({_id})
};
filmSchema.statics.update = async function (filter,update){
  return await this.findOneAndUpdate(filter,update,{new:true})
};

module.exports = filmSchema;