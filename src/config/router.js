const StaffController = require('../api/controllers/staff.controller');
const UserController = require('../api/controllers/user.controller');
const StockController = require('../api/controllers/stock.controller');
const CategoryController = require('../api/controllers/category.controller');
const CheckAuth = require('../middleware/check-auth')
const express = require('express');
const router = express.Router();
const multer = require('multer');
const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
  };
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error("Invalid mime type");
      if (isValid) {
        error = null;
      }
      cb(error, "src/images");
    },
    filename: (req, file, cb) => {
      const name = file.originalname
        .toLowerCase()
        .split(" ")
        .join("-");
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + "-" + Date.now() + "." + ext);
    }
  });
  //users
  router.post("/signup",UserController.userCreate);
  router.post("/login",UserController.userLogin);

//staff
router.get("/staff",CheckAuth,StaffController.findAll);
router.post("/staff",multer({ storage: storage }).single("image"),CheckAuth,StaffController.create);
router.delete("/deleteStaff/:id",CheckAuth,StaffController.deleteStaff)
router.put("/editstaff/:id",multer({ storage: storage }).single("image"),CheckAuth,StaffController.editStaff)
router.get("/findstaff/:id",CheckAuth,StaffController.findStaff)

//categories
router.post("/addcategory",CheckAuth,CategoryController.addCategory)
router.get("/getcategory",CheckAuth,CategoryController.getCategory)
router.get("/getcategory/:category",CheckAuth, CategoryController.findOneCategory)
router.delete("/deletecategory/:category",CheckAuth,CategoryController.deleteCategory)

//stock
router.get("/stock",CheckAuth,StockController.findAll);
router.post("/stock",multer({ storage: storage }).single("image"),CheckAuth,StockController.create);
router.delete("/deleteStock/:id",CheckAuth,StockController.deleteStock)
router.put("/editstock/:id",multer({ storage: storage }).single("image"),CheckAuth,StockController.editStock)
router.get("/findstock/:id",CheckAuth,StockController.findStock)
module.exports = router
 