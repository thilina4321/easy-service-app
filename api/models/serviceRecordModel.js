var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var serviceRecordModelSchema = new Schema({
    service: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Service',
        required : [true , "service field is required!"],
        
    },
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
    agent: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Agent',
        required : [true , "agent field is required!"],
        
    },
    appointment: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Appointment',
        required : [true , "appointment field is required!"],
        
    },
    
    create_date :{
        type : Date,
        defaulf : Date.now
    }
});

const ServiceRecord = mongoose.model('ServiceRecord',serviceRecordModelSchema);
module.exports = {ServiceRecord};