var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var customerModelSchema = new Schema({
    user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : [true , "user field is required!"],
        
    },
    
    
    create_date :{
        type : Date,
        defaulf : Date.now
    }
});

const Customer = mongoose.model('Customer',customerModelSchema);
module.exports = {Customer};