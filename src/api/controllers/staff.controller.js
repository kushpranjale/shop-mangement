const Staff = require('../models/staff.model');
const HttpStatus = require('http-status-codes');
const CheckAuth = require('../../middleware/check-auth');



(module.exports) = {

    findAll(req,res,next) {
     Staff.find({creator: req.userData.userId })
     .then(result => {
      res.json(result)
     })
     .catch(err =>{
         res.status(500).json(err);
     })
    },
create(req,res,next) {
  const url = req.protocol + "://" + req.get("host");
    const schema = new Staff({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      address: req.body.address,
      description: req.body.description,
      profile: req.body.profile,
      date: req.body.date,
      salary: req.body.salary,
      imagePath: url + "/images/" + req.file.filename,
      salaryStatus: req.body.salaryStatus,
      creator: req.userData.userId

    });
   
    Staff.create(schema)
    .then(result => res.json({result:result._id ,image: result.imagePath, message:"added successfully"}))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
},

findStaff(req,res,next){
Staff.findOne({_id:req.params.id,creator: req.userData.userId })
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

deleteStaff(req,res,next){
    Staff.deleteOne({_id: req.params.id,creator: req.userData.userId } ).then(result =>{
        res.status(200).json(result)
    console.log(result)
    })
    res.status(200).json(
      {
        message: "deleted",

      }
    )
    },
    editStaff(req,res,next) {

      Staff.findOne({_id:req.params.id, creator: req.userData.userId }).then(edit => {
        let imagePath = req.body.imagePath;
        console.log(imagePath)
        if (req.file) {
          const url = req.protocol + "://" + req.get("host");
          imagePath = url + "/images/" + req.file.filename
        }
        edit.name= req.body.name;
        edit.phoneNumber= req.body.phoneNumber;
        edit.gender= req.body.gender;
        edit.address= req.body.address;
        edit.description= req.body.description;
        edit.profile= req.body.profile;
        edit.date= req.body.date; 
        edit.salary= req.body.salary;
        edit.imagePath = imagePath;
        edit.salaryStatus= req.body.salaryStatus
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