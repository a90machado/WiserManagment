const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const db = "mongodb://machado:abc12345@ds151292.mlab.com:51292/wisermanagment";
const User = require('../modules/user');

mongoose.connect(db,{ useNewUrlParser: true }, err => {
    if(err){
        console.error('Error!' + err);
    } else {
        console.log('Connected to mongodb');
    }
});

router.get('/', (req,res)=>{
    res.send('From API route');
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error){
            console.log(error);
        }else {
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, 'upAcademyCGI');
            res.status(200).send({token});
        }
    });

});

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({username: userData.username}, (error, user) =>{
        if (error){
            console.log(error);
        }else {
            if(!user){
                res.status(401).send('Invalid Username');
            }else
            if (user.password !== userData.password){
                res.status(401).send('Invalid Password');
            } else {
                let payload = { subject: user._id };
                let token = jwt.sign(payload, 'upAcademyCGI');
                res.status(200).send({token});
            }
        }
    });
});

router.get('/products', (req, res) => {
    //call products
    let products = [];
    res.json(products);
});

router.get('/shelfs', (req, res) => {
    //call shelfs
    let products = [];
    res.json(products);
});

module.exports = router;