const express = require('express');
const router = express.Router();
const {getAllProduct,getDetailProduct,getCreateProductPage,getEditProductPageduct,createProduct,postProductDelete,getProductDelete} = require('../controllers/product');

//get để hiện thị trang
router.get('/', getAllProduct);
router.get('/product/create', getCreateProductPage);
router.get('/product/edit', getEditProductPageduct);
router.get('/product/:idProduct', getDetailProduct);
router.get('/product/delete/:id', getProductDelete);
// post để thực hiện thao tác
router.post('/product/create', createProduct);
router.post('/product/delete/:id',postProductDelete);

module.exports = router;