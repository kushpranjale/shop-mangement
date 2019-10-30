const Stock = require('../models/stock.model');
const HttpStatus = require('http-status-codes');
const CheckAuth = require('../../middleware/check-auth');

const Joi = require('Joi');

(module.exports) = {

    findAll(req,res,next) {
     Stock.find({creator: req.userData.userId })
     .then(result => {
      res.json(result)
     })
     .catch(err =>{
         res.status(500).json(err);
     })
    },
create(req,res,next) {
  const url = req.protocol + "://" + req.get("host");
    const schema = new Stock({
      productName: req.body.productName,
      productQuantity: req.body.productQuantity,
      productCategory: req.body.productCategory,
      productSubCategory: req.body.productSubCategory,
      productDescription: req.body.productDescription,
      date: req.body.date,
      productCode: req.body.productCode,
      imagePath: url + "/images/" + req.file.filename,
      salaryStatus: req.body.salaryStatus,
      creator: req.userData.userId

    });
   
    Stock.create(schema)
    .then(result => res.json({result:result._id ,image: result.imagePath, message:"added successfully"}))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
},

findStock(req,res,next){
Stock.findOne({_id:req.params.id, creator: req.userData.userId})
.then(result => {
  if(result){
  res.status(200).json(result)
} else {
  res.status.json({message: "not found!!!"})
}
}).catch(err => {
  res.status(401).json(err)
})
},

deleteStock(req,res,next){
    Stock.deleteOne({_id: req.params.id, creator: req.userData.userId} ).then(result =>{
        res.status(200).json(result)
    console.log(result)
    })
    res.status(200).json(
      {
        message: "deleted",

      }
    )
    },
    editStock(req,res,next) {

      Stock.findOne({_id: req.params.id, creator: req.userData.userId}).then(edit => {
        console.log('inside find '+ req.body.date)
        let imagePath = req.body.imagePath;
        console.log(imagePath)
        if (req.file) {
          const url = req.protocol + "://" + req.get("host");
          imagePath = url + "/images/" + req.file.filename
        }
        edit.productName= req.body.productName;
        edit.productQuantity= req.body.productQuantity;
        edit.productCategory= req.body.productCategory;
        edit.productSubCategory= req.body.productSubCategory;
        edit.productDescription= req.body.productDescription;
        edit.date= req.body.date;
        edit.productCode= req.body.productCode;
        edit.imagePath = imagePath;
       // edit.imagePath = null;
        edit.save(result=>{
          console.log(edit)
          res.status(200).json({ message:"updated"});
          console.log("inside save "+result)
        }) 
      }).catch(err=> {
        res.status(501).json(err);
        console.log("inside save err "+err)

      })

      // Staff.updateOne({_id: req.params.id},edit)
      // .then((response)=> {
      //   res.status(200).json(response)
      //    console.log("updated!!!!" + response)
      // }).catch
      // (err=>{
      //   console.log("updated!!!!" + req.params.id)
      //   res.status(501).json(err)
      // })
    }
}