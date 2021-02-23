const { Agent} = require("../models/agentModel");
const { Customer} = require("../models/customerModel");
const { Vehicle} = require("../models/vehicleModel");
const { ServiceRecord} = require("../models/serviceRecordModel");

exports.createAgent = async (req, res) => {
    var newAgent = new Agent(req.body);

    await newAgent.save((err, agent) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create agent !",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New agent is created!",
                data: agent
            });
        }
    });
};

exports.deleteAgent = async (req, res) => {
    await Agent.remove({_id: req.params.id}, function(err, agent) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid agent id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "agent deleted!"
        });
    });
};

//manage customers
exports.deleteCustomer = async (req, res) => {
    await Customer.remove({_id: req.params.id}, function(err, customer) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid customer id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "customer deleted!"
        });
    });
};

exports.veiwCustomer = async (req, res) => {
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

//manage vehicles
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

exports.veiwVehicle = async (req, res) => {
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

//manage service records
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
            message: "service record deleted!"
        });
    });
};

exports.veiwServiceRecord = async (req, res) => {
    await ServiceRecord.find(function(err, serviceRecord) {
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
            data: serviceRecord
        });
    });
};