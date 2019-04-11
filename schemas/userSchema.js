const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    familyName : {
        type : String,
    },
    email : {
        type : String,
    },
})
module.exports = mongoose.model('user', UserSchema);
