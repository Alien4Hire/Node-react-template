const express = require('express');
const localRouter = express.Router();
const passport = require('passport');
const JWT = require('jsonwebtoken');
const passportConfig = require('../services/passport');
const User = require('../models/User');
const keys = require('../config/keys');


const signToken = userID => {
    return JWT.sign({
        iss: "Hubcap",
        sub: userID
    },keys.cookieKey,{expiresIn: 30 * 24 * 60 * 60 * 1000});
};

localRouter.post('/register', (req,res)=>{
    const { username,password } = req.body;
    User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({message: {msgBody: "Error has occured", msgError: true}})
        if(user)
            res.status(400).json({message: {msgBody: "email is already taken", msgError: true}})
        else{
            const newUser = new User({username,password,role});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message: {msgBody: "Error has occured", msgError: true}})
                else
                    res.status(201).json({message: {msgBody: "Account successfully created", msgError: true}})
            })
        }
    });
    localRouter.post('/login',passport.authenticate('local',{session: false}),(req,res)=>{
        if(req.isAuthenticated()){
            const {_id,username} = req.user;
            const token = signToken(_id);
            res.cookie('access_token', token,{httpOnly: true, sameSite:true});
            res.status(200).json({isAuthenticated: true,email: {username}})
        }
    })
});




module.exports = localRouter;