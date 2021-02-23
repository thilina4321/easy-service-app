const { User } = require("../models/userModel");
const UserRole = require('../enums/userRole');

const Agent = (req, res, next) => {
    let token = req.header('x-access-token') || req.header('authorization');

    if(token) {
        if(token.startsWith('Bearer')) {
            token = token.slice(7, token.length);
        }

        User.findByToken(token, (err, user) => {
            if (err) throw err;
            
            console.log(user);
            if (user.role != UserRole.AGENT) {
                res.status(403).json({
                    success: false,
                    message: "No authorization to access this route!"
                });
            }

            next();
        });
    }
};

module.exports = { Agent};