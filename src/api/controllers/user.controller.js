const User = require('../models/user.model');
const HttpStatus = require('http-status-codes');
const Joi = require('Joi');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

(module.exports) = {
  userCreate(req,res,next){
    bcrypt.hash(req.body.password,10)
    .then(hash => {

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password : hash
         });
        User.create(user)
        .then(result =>{

          res.json({result:result , message:"added successfully"})}
          )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err))


    })


},
userLogin(req,res,next){
    let fetchedUser;
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: "User Not Found"
          });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: "Not Matched!!!"
          });
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          "secret_this_should_be_longer",
        );
        res.status(200).json({
          token: token,
          result: fetchedUser
        });
      })
      .catch(err => {
        return res.status(401).json({
          message: "Auth failed"
        });
      });

},


}