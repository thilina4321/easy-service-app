var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const userRole = require("../enums/userRole");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const SALT = 10;
 
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type : String,
        required : [true , "name is required!"],
        maxlength : 100
    },
    email:{
        type : String,
        required : [true , "email is required!"],
        unique : true
    },
    username:{
        type : String,
        required : [true , "username is required!"],
        unique : true
    },
    password:{
        type : String,
        minlength : 7,
        required : [true , "password is require!"],
    },
    role:{
        type : String,
        enum: userRole,
        default : userRole.CUSTOMER
    },
    profile_image:{
        type : String,
        required : false
    },
    phone_number:{
        type : String,
        required : false
    },
    create_date :{
        type : Date,
        defaulf : Date.now
    }
});

//saving user data
userSchema.pre('save',function(next){
    var user =this;
    if(user.isModified('password')){
        //cheking if password field is available and modified
        bcrypt.genSalt(SALT,function(err,salt){
            if (err) return next(err)
            bcrypt.hash(user.password,salt,function(err,hash){
                if (err) return next (err)
                user.password = hash;
                next();
            });
        });
    }else{
        next();
    }
});

//for comparing the users entered password with database during login

userSchema.methods.comparePassword = function (candidatePassword,callBack){
    bcrypt.compare(candidatePassword, this.password,function(err,isMatch){
        if(err) return callBack(err);
        callBack(null, isMatch);
    });
};

//for generating token when loggedin

userSchema.methods.generateToken = function (callBack){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), process.env.SECRETE);

    callBack(null, token);
};

//validating token for auth routes middleware

userSchema.statics.findByToken = function (token, callBack){
    jwt.verify(token, process.env.SECRETE, function (err, decode){
        //this decode must give user_id if token is valid .ie decode = user_id
        User.findById(decode, function(err, user){
            if (err){
                return res.status(404).json({
                    success : false,
                    message : "invalid user ID",
                    data : err
                });

            }
            callBack(null, user);
        });
    });
};


const User = mongoose.model('User',userSchema);
module.exports = {User};