const userRole = require("../enums/userRole");
const { User } = require("../models/userModel");
const { Service } = require("../models/serviceModel");
const { Vehicle } = require("../models/vehicleModel");
const { ServiceRecord } = require("../models/serviceRecordModel");
const { Appointment } = require("../models/appointmentModel");
const { Payment } = require("../models/paymentModel");


exports.searchServices = async (req,res) => {
    await Service.find(function(err,service){
        if(err){
            return res.status(422).json({
                success:false,
                message:"unable to recieved services!",
                data:err
            });
        }
        return res.status(200).json({
            success:true,
            message:"recieved services!",
            data:service
        });
    });
};
exports.addVehicle = async (req, res) => {
    var newVehicle = new Vehicle(req.body);

    await newVehicle.save((err, vehicle) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to add vehicle !",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New vehicle is added!",
                data: vehicle
            });
        }
    });
};

exports.updateVehicle = async (req, res) => {
    await Vehicle.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        if(!vehicle) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicle updated!",
            data: vehicle
        });
    });
};

exports.deleteVehicle = async (req, res) => {
    await Vehicle.remove({_id: req.params.id}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicle deleted!"
        });
    });
};

exports.createAppointment = async (req, res) => {
    var newAppointment = new Appointment(req.body);

    await newAppointment.save((err, appointment) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create appointment !",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New appointment is created!",
                data: appointment
            });
        }
    });
};

exports.createPayment = async (req, res) => {
    var newPayment = new Payment(req.body);

    await newPayment.save((err, payment) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create payment !",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New payment is created!",
                data: payment
            });
        }
    });
};
exports.viewAppointments = async (req, res) => {
    await Appointment.find(function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive appointments!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received appointments!",
            data: appointment
        });
    });
};
