const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const db = "mongodb://machado:abc12345@ds151292.mlab.com:51292/wisermanagment";
const User = require('../models/user');

mongoose.connect(db,{ useNewUrlParser: true }, err => {
    if(err){
        console.error('Error!' + err);
    } else {
        console.log('Connected to mongodb');
    }
});

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'upAcademyCGI');
    if (!payload){
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}

router.get('/', (req,res)=>{
    res.send('From API route');
});

router.post('/register', verifyToken, (req, res) => {
    let userData = req.body;
    let user = new User(userData);

    if(!User.findOne({username: userData.username})){
        user.save((error, registeredUser) => {
            if (error){
                console.log(error);
            }else {
                let payload = { subject: registeredUser._id };
                let token = jwt.sign(payload, 'upAcademyCGI');
                res.status(200).send({token});
            }
        });
    } else {
        res.status(200).send('User allready register!');
    }


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
                res.status(200).send({payload, token});
            }
        }
    });
});

// para fazeres como querias o url aqui tinha que ser /usertype
// e depois noã ia ser params mas sim req.query.userid
router.get('/usertype', verifyToken, (req, res) => {
    const userid = req.query.userid;

    User.findOne({_id: userid}, (error, user) =>{
        if (error){
            console.log(error);
        }else {
            admin = user.admin;
            res.status(200).send({admin});
        }
    });
});

router.get('/products', verifyToken, (req, res) => {
    //call products
    let products = [];
    res.json(products);
});

router.get('/shelfs', verifyToken, (req, res) => {
    //call shelfs
    let products = [];
    res.json(products);
});

module.exports = router;