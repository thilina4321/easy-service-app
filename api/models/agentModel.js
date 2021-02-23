var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var agentModelSchema = new Schema({
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

const Agent = mongoose.model('Agent',agentModelSchema);
module.exports = {Agent};