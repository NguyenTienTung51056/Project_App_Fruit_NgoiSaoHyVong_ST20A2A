var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true, // unique: true là để đảm bảo không có 2 user nào có cùng username
        
    },
    email: {
        type: String,
        require: true,// require: true là để đảm bảo email không được để trống
         // unique: true là để đảm bảo không có 2 user nào có cùng email
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    
});

module.exports = mongoose.model('User', UserSchema);