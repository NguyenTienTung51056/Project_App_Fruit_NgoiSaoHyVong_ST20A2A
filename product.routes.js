var express = require("express");
var router = express.Router();
const productController = require("../controller/product.controller");

//Tao moi san pham
router.get("/add", productController.getProductCreate);
router.post("/add", productController.postProductCreate);

//Xoa san pham
router.get("/delete/:id", productController.getProductDelete);
router.post("/delete/:id", productController.postProductDelete);

module.exports = router;
