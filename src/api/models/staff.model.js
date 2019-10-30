const mongoose = require('mongoose');
const StaffSchema = mongoose.Schema({
name: {
    type: String,
    required: true,
},
phoneNumber: {
    type: Number,
    required: true,
},
gender: {
    type: String,
    required: true,
},

address: {
    type: String,
    required: true,
},
description: {
    type: String,
    required: false,
},
profile: {
    type: String,
    required: true,
},
date: {
    type: String,
    required: true,
},
salary: {
    type: Number,
    required: true,
},
imagePath: {
    type: String,
    required: true,
},
salaryStatus: {
    type: String,
    required: false,
},
creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});
module.exports = mongoose.model('Staff',StaffSchema);