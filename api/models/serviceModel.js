var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var serviceModelSchema = new Schema({
    title: {
        type : String,
        required : [true , "title field is required!"],
        
    },
    description: {
        type : String,
        required : [true , "description field is required!"],
        
    },
    catogery: {
        type : String,
        required : [true , "catogery field is required!"],
        
    },
    price: {
        type : String,
        required : [true , "price field is required!"],
        
    },
    
    
    create_date :{
        type : Date,
        defaulf : Date.now
    }
});

const Service = mongoose.model('Service',serviceModelSchema);
module.exports = {Service};
