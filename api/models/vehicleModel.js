var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var vehicleModelSchema = new Schema({
    customer: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer',
        required : [true , "customer field is required!"],
        
    },
    
    
    create_date :{
        type : Date,
        defaulf : Date.now
    }
});

const Vehicle = mongoose.model('Vehicle',vehicleModelSchema);
module.exports = {Vehicle};