var User = require('../models/user.models');
var bcrypt = require('bcrypt')
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds)

// hiện trang login
exports.getLogin=(req,res)=>{
    res.render('./user/login');
}
// thực hiện đăng nhập
exports.postLogin= async (req,res)=>{
    User.findOne({email:req.body.email},(err,data)=>{
        if(data){
            const CheckPass = bcrypt.compareSync(req.body.password, data.password);
            if(CheckPass && data.role == "admin"){
                res.redirect('/user/admin')
            }else if(CheckPass){
                res.redirect('/user/home')
            }else{
                res.redirect('/user/login')
            }
        }
    })
    
}
// hiện trang đăng ký
exports.getRegister=(req,res)=>{
    res.render('./user/register')
}
// thực hiện đăng ký

exports.postRegister=(req,res)=>{
    if(req.body.password == req.body.password_1 ){
        var data = new User()
        data.username = req.body.username
        data.email = req.body.email
        data.password = bcrypt.hashSync(req.body.password, salt);
        data.save((err)=>{
            if(err){
                console.log('không thể đăng ký')
            }else{
                res.redirect('/user/login')
            }
            
        }
        )
    }
}
// home
exports.getHome=(req,res)=>{
    res.render('./user/home')
}
exports.getAdmin=(req,res)=>{
    res.render('./user/admin')
}