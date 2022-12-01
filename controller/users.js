const Users = require('../models/users');
const bcrypt = require('bcrypt');

exports.getLogin = (req, res, next) => {
    res.render('./users/login');
}
exports.getRegister = (req, res, next) => {
    res.render('./users/regist');
}
exports.postRegister = async (req, res, next) => {
    const users = await Users.find({});
    // check email đã tồn tại
    const checkEmail = users.find(user => user.email === req.body.email);
    if(checkEmail){
        res.render('./users/regist');
    console.log("Email đã tồn tại");
    }else if(req.body.password === req.body.confirmPassword){
        var data = new Users();
        const { email, password, username } = req.body;
        const bcryptPassword = await bcrypt.hash(password, 10);
        data.email = email;
        data.password = bcryptPassword;
        data.username = username;
        data.save(function (err){
            res.redirect('/');
        });
    }
    else{
        res.redirect('/users/regist');
        console.log("that bai");
    }
}
exports.postLogin = async(req, res, next) => {
    const { email, password } = req.body;
    const user = await Users.findOne({
        email: email
    });
    if(user){
        const checkPassword = await bcrypt.compare(password, user.password);
        if(checkPassword){
            res.redirect('/');
            console.log("dang nhap thanh cong");
        }
        else{
            res.redirect('/users/login');
            console.log("dang nhap that bai");
        }
    }
}