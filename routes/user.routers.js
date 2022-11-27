var UserController = require('../controller/user.controller');
var express = require('express');
var routers = express.Router()

routers.get('/login',UserController.getLogin)
routers.post('/login', UserController.postLogin)

routers.get('/register',UserController.getRegister)
routers.post('/register', UserController.postRegister)

routers.get('/home',UserController.getHome)
routers.get('/admin',UserController.getAdmin)
module.exports = routers;