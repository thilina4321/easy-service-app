var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var appointmentModelSchema = new Schema({
    customer: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer',
        required : [true , "customer field is required!"],
        
    },
    vehicle: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Vehicle',
        required : [true , "vehicle field is required!"],
        
    },
    service: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Service',
        required : [true , "service field is required!"],
        
    },
    agent: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Agent',
        required : [true , "agent field is required!"],
        
    },
    status: {
        type : String,
        enum :['Pending','accepted','payment_done','completed'],
        required : [true , "status field is required!"],
        
    },
    
    create_date :{
        type : Date,
        defaulf : Date.now
    }
});

const Appointment = mongoose.model('Appointment',appointmentModelSchema);
module.exports = {Appointment};
