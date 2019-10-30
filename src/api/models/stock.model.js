const mongoose = require('mongoose');
const StockSchema = mongoose.Schema({
productName: {
    type: String,
    required: true,
},
productQuantity: {
    type: Number,
    required: true,
},
productCategory: {
    type: String,
    required: true,
},

productSubCategory: {
    type: String,
    required: false,
},
productDescription: {
    type: String,
    required: false,
},
date: {
    type: String,
    required: true,
},
productCode: {
    type: Number,
    required: true,
},
imagePath: {
    type: String,
    required: true,
},
creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});
module.exports = mongoose.model('stock',StockSchema);