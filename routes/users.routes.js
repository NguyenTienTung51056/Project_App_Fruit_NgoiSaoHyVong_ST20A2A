var express = require('express');
var router = express.Router();
var usersController = require('../controller/users');

router.get('/login', usersController.getLogin);
router.post('/login', usersController.postLogin);
router.get('/regist', usersController.getRegister);
router.post('/regist', usersController.postRegister);
module.exports = router;
