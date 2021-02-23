const {User} = require("../models/userModel");

exports.registerUser = (req, res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err){
            return res.status(422).json({
                success: false,
                message: "Please enter unique email & username!",
                data: err
            });
        }else{
            return res.status(200).json({
                success: true,
                message: "successfully registered!",
                
            });
    
        }
    });

    
}

exports.loginUser = (req, res)=>{
    User.findOne({email : req.body.email}, (err,user) => {
        if(!user){
            return res.status(404).json({
                success: false,
                message: "user email not found!"
            });
        }

        user.comparePassword(req.body.password, (err,isMatch) => {
            if(!isMatch){
                return res.status(400).json({
                    success: false,
                    message: "password is incorrect!"
                }); 
            }

            user.generateToken((err,token)=>{
                if(err){
                    return res.status(400).json({
                        success: false,
                        message: "unable to generate jwt key!",
                        data : err
                    }); 
                }

                return res.status(200).json({
                    success: true,
                    message: "successfuly loged in!",
                    data : {
                        "token" : token
                    }
                });
            });
            
        });
    });
    
}

exports.getUserDetails = (req , res)=> {
    return res.status(200).json({
        success: true,
        message: "user received!",
        data : req.user
    });

}

