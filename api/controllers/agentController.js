const { Service } = require("../models/serviceModel");
const userRole = require("../enums/userRole");
const { User } = require("../models/userModel");
const { Vehicle } = require("../models/vehicleModel");
const {ServiceRecord } = require("../models/serviceRecordModel");
const { Appointment } = require("../models/appointmentModel");
const { Customer} = require("../models/customerModel");

exports.createService = async (req, res) => {
    var newService = new Service(req.body);

    await newService.save((err, service) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create service !",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New service is created!",
                data: service
            });
        }
    });
};

exports.getAllServices = async (req, res) => {
    await Service.find(function(err, services) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive services!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received services!",
            data: services
        });
    });
};

exports.getServiceById = async (req, res) => {
    await Service.findById(req.params.id, async function(err, service) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        if(!service) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service received!",
            data: service
        });
    });
};

exports.updateService = async (req, res) => {
    await Service.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, service) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        if(!service) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service updated!",
            data: service
        });
    });
};

exports.deleteService = async (req, res) => {
    await Service.remove({_id: req.params.id}, function(err, service) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service deleted!"
        });
    });
};

exports.getAppointmentByStatus = async (req, res) => {
    await Appointment.findByStatus(req.params.status, async function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment status!"
            });
        }

        if(!appointment) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment status!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "appointment received!",
            data: appointment
        });
    });
};

exports.updateAppointment = async (req, res) => {
    await Appointment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment id!"
            });
        }

        if(!appointment) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "appointment updated!",
            data: appointment
        });
    });
};

exports.getAllCustomers = async (req, res) => {
    await Customer.find(function(err, customer) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive customers!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received customers!",
            data: customer
        });
    });
};
exports.getAllVehicles = async (req, res) => {
    await Vehicle.find(function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive vehicles!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received vehicles!",
            data: vehicle
        });
    });
};
exports.getAllServiceRecords = async (req, res) => {
    await ServiceRecord.find(function(err, serviceRecords) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive service records!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received service records!",
            data: serviceRecords
        });
    });
};

exports.createServiceRecord = async (req, res) => {
    var newServiceRecord = new ServiceRecord(req.body);

    await newServiceRecord.save((err, serviceRecord) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create service record !",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New service record is created!",
                data: serviceRecord
            });
        }
    });
};

exports.updateServiceRecord = async (req, res) => {
    await ServiceRecord.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        if(!serviceRecord) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service record updated!",
            data: serviceRecord
        });
    });
};

exports.deleteServiceRecord = async (req, res) => {
    await ServiceRecord.remove({_id: req.params.id}, function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service record deleted!"
        });
    });
};