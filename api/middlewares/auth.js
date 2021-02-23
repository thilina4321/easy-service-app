const {User} =require('../models/userModel');

const Auth = (req,res,next) => {
    let token = req.header("authorization");

    if(!token){
        return res.status(400).json({
            success : false,
            message : "no valid token provided"
        });
       
    }
    User.findByToken(token, (err,user) =>{
        if(err){
            throw err;

        }
        if(!user){
            return res.status(400).json({
                success : false,
                message : "no valid token provided"
            });
        }

        req.token = token;
        req.user = user;

        next();
    });

};    

module.exports = {Auth};