const mongoose = require('mongoose');
const muv = require('mongoose-unique-validator');
const CategorySchema = mongoose.Schema({
category: {
    type: String,
    required: true,
},
subCategory: {
    type:[String]
},
creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});
module.exports = mongoose.model('Categories',CategorySchema);