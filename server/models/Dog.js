const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//set up dog model
let DogModel = {};

//set up the dogSchema
const DogSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  
    breed: {
      type: Number,
      required: true,
      trim: true,
    },
    
    age: {
        type: Number,
        required: true,
        min: 0,
    },

    createdData: {
      type: Date,
      default: Date.now,
    },
});

//static find by name function
DogSchema.statics.findByName = (name, callback) => {
    const search = {
      name,
    };
  
    return DogModel.findOne(search, callback);
};
  
//model is based on the schema
DogModel = mongoose.model('Dog', DogSchema);


// export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
