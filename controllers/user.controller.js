var User = require('../models/user.models');
var bcrypt = require('bcrypt')
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds)

// hiện trang login
exports.getLogin=(req,res)=>{
    res.render('./user/login',{ layout: "layout/LayoutLoginvRegist.ejs" });
}
// thực hiện đăng nhập
exports.postLogin= async (req,res,next)=>{
    User.findOne({email:req.body.email},(err,data)=>{
        if(data){
            const CheckPass = bcrypt.compareSync(req.body.password, data.password);
            if(CheckPass && data.role == "admin"){
                res.redirect('/')
                console.log("đăng nhập thành công" + data.role);
            }else if(CheckPass && data.role == "user"){
                res.redirect('/')
                console.log("đăng nhập thành công" + data.role);
            }else{
                res.redirect('/user/login')
            }
        }
    })  
}
// hiện trang đăng ký
exports.getRegister=(req,res)=>{
    res.render('./user/register',{ layout: "layout/LayoutLoginvRegist.ejs" })
}
// thực hiện đăng ký

exports.postRegister = async (req, res, next) => {
    const users = await User.find({});
    const checkEmail = users.find(user => user.email === req.body.email);
    if(checkEmail){
        res.render('./user/register',{ layout: "layout/LayoutLoginvRegist.ejs" });
    console.log("Email đã tồn tại");
    }else if(req.body.password === req.body.confirmPassword){
        var data = new User();
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
        res.redirect('/user/register');
        console.log("that bai");
    }
}


module.exports = exports;