/* viet lai voi db mongodb su dung mongoss */
/* todolist   (id, title, content) */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

var Users = module.exports = mongoose.model('User', userSchema);
module.exports.get = function(callback, limit){
    Users.find(callback).limit(limit);
}