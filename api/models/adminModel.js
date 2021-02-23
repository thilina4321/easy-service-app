var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var adminModelSchema = new Schema({
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

const Admin= mongoose.model('Admin',adminModelSchema);
module.exports = {Admin};