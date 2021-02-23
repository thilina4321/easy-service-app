var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var paymentModelSchema = new Schema({
    appointment: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Appointment',
        required : [true , "appointment field is required!"],
        
    },
    amount: {
        type : Number,
        required : [true , "amount field is required!"],
        
    },
    status: {
        type : String,
        enum :['Pending','proccesed','completed','faild'],
        required : [true , "status field is required!"],
        
    },
    
    
    create_date :{
        type : Date,
        defaulf : Date.now
    }
});

const Payment = mongoose.model('Payment',paymentModelSchema);
module.exports = {Payment};