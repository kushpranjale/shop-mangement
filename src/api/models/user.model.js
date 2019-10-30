const mongoose = require('mongoose');
const muv = require('mongoose-unique-validator');
const UserSchema = mongoose.Schema({
email: {
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true,
},
name: {
    type: String,
    required: true,
},

});
UserSchema.plugin(muv, { message: 'unique' });
module.exports = mongoose.model('User',UserSchema);