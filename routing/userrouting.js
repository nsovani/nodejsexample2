var router = require('express').Router();
//var User = require('../model/User');
//import User from '../model/User';

function User(firstName,lastName,password,latitude,longitude) {
  this.firstName= firstName;
  this.lastName = lastName;
  this.password = password;
  this.latitude= latitude;
  this.longitude= longitude;
}

var singleuser = new User('Niranjan', 'Sovani','Abc@7817', '18.5791138', '73.7391434'); 
console.log("new single user" + singleuser.firstName);
router.post('/get', function(req, res, next) {
    
    if(req.body.password == singleuser.password){
        console.log("matches password");
        res.json(new User(singleuser.firstName,singleuser.lastName,singleuser.latitude,singleuser.longitude));
    }else{
        res.json("{'status':'fail'}");
    }
});

router.post('/', function(req, res, next) {
    if(req.body.password == singleuser.password){
         singleuser.latitude = req.body.latitude;
         singleuser.longitude = req.body.longitude;
         res.json(new User(singleuser.firstName,singleuser.lastName,singleuser.latitude,singleuser.longitude));
    }else{
        res.json("{'status':'fail'}");
    }
 
});
module.exports = router;