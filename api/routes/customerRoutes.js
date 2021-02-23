module.exports = function(app) {
    const { Auth } = require("../middlewares/auth");
    const { Customer } = require("../middlewares/customer");

    const customerController = require("../controllers/customerController");
    
    
    app.post("/search_services", [Auth, Customer], customerController.searchServices);
    app.post("/create_appointment", [Auth, Customer], customerController.createAppointment);
    app.post("/add_vehicle", [Auth, Customer], customerController.addVehicle);
    app.put("/update_vehicle", [Auth, Customer], customerController.updateVehicle);
    app.delete("/delete_vehicle", [Auth, Customer], customerController.deleteVehicle);
    app.post("/create_payment", [Auth, Customer], customerController.createPayment);
    app.get("/view_appointment", [Auth, Customer], customerController.viewAppointments);
    
};
