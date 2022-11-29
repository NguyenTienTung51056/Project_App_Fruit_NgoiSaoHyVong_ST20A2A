const express = require('express');
const router = express.Router();
const {getAllProductInCart} = require('../controllers/cart');

//get để hiện thị trang
router.get('/', getAllProductInCart);


module.exports = router;