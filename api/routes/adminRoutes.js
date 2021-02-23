module.exports = function(app){
    const {Auth} = require('../middlewares/auth');
    const {Admin} = require('../middlewares/admin');
    

    const adminController = require("../controllers/adminController");

    
    app.post("/create_agent", [Auth,Admin],adminController.createAgent);
    app.delete("/delete_agent", [Auth,Admin],adminController.deleteAgent);
    app.delete("/delete_customer", [Auth,Admin],adminController.deleteCustomer);
    app.delete("/delete_vehicle", [Auth,Admin],adminController.deleteVehicle);
    app.delete("/delete_serviceRecord", [Auth,Admin],adminController.deleteServiceRecord);
    app.get("/veiwCustomer", [Auth,Admin],adminController.veiwCustomer);
    app.get("/veiw_vehicle", [Auth,Admin],adminController.veiwVehicle);
    app.get("/veiw_serviceRecord", [Auth,Admin],adminController.veiwServiceRecord);




};    
