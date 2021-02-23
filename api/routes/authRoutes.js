module.exports = function(app){
    const {Auth} = require('../middlewares/auth');
    const authController = require("../controllers/authController");

    app.post("/register",authController.registerUser);
    app.post("/login",authController.loginUser);
    app.get("/user",Auth, authController.getUserDetails);
} 