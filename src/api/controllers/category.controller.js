const Category = require('../models/category.model');
const HttpStatus = require('http-status-codes');

(module.exports) = {

addCategory(req,res,next) {
    const category = new Category (
        {
           category : req.body.category,
           subCategory: req.body.subCategory,
           creator: req.userData.userId
        }
    );
 Category.create(category).
 then(Response => {
     console.log('here is category '+Response);
     res.json(Response);
 })
 .catch(err => {
    console.log('here is category err '+err);
     res.status(501).json(err)
 })
},

getCategory(req,res,next) {
 Category.find({creator: req.userData.userId}).then(
     response => {
         console.log('here is the response for get '+response)
         res.json(response)
     }
 ).catch((err) => {
    console.log('here is the response for get err'+err)
    res.status(501).json(err)
 })
},
findOneCategory(req,res,next) {
    Category.findOne({category: req.body.category, creator: req.userData.userId}).then(
        response => {
            if(response){
           console.log("here the one category"+response)
           res.json(response)
            }
            else {
                console.log("not found" +response)
                res.json({message:"not found"})
            }
        }).catch(
            err =>{
           console.log("finding single category error" +err)
           res.status(501).json(response)
            })
},
deleteCategory(req,res,next){
    Category.deleteOne({category: req.body.category, creator: req.userData.userId})
    .then(response =>{
        if(response){
        res.json(response)
    }
    else{
        res.json({message:"data not found"})
    }
    }).catch(err => {
         res.status(501).json(err)
    })
}

}