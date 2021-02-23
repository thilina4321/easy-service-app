module.exports = function(app){
    const {Auth} = require('../middlewares/auth');
    const {Agent} = require('../middlewares/agent');
    

    const agentController = require("../controllers/agentController");

    app.post("/create_service", [Auth,Agent],agentController.createService);
    app.get("/services", [Auth, Agent], agentController.getAllServices);
    app.get("/service/:id", [Auth], agentController.getServiceById);
    app.put("/update_service/:id", [Auth, Agent], agentController.updateService);
    app.delete("/delete_service/:id", [Auth, Agent], agentController.deleteService);
    app.get("/appointment/:status", [Auth], agentController.getAppointmentByStatus);
    app.put("/update_appointment/:id", [Auth], agentController.updateAppointment);
    app.get("/customer", [Auth, Agent], agentController.getAllCustomers);
    app.get("/vehicle", [Auth, Agent], agentController.getAllVehicles);
    app.get("/service_record", [Auth, Agent], agentController.getAllServiceRecords);
    app.post("/create_service_record", [Auth,Agent],agentController.createServiceRecord);
    app.put("/update_service_record/:id", [Auth, Agent], agentController.updateServiceRecord);
    app.delete("/delete_service_record/:id", [Auth, Agent], agentController.deleteServiceRecord);
};