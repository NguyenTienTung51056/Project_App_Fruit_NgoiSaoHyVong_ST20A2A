const Product = require("../models/product");

//get all product
const getAllProduct = async (req, res,next) => {
  try {
    const products = await Product.find();
    res.render("products",{products});
  } catch (error) {
    console.log(error);
  }
};

const getDetailProduct = async (req, res,next) => {
    const { idProduct } = req.params;
  try {
    const product = await Product.findById(idProduct)
    res.render("./page/detailsProduct", {
      product,
      layout: "layout/layoutNoSlider.ejs"
    });
  } catch (error) {
    next()
  }
};

const getCreateProductPage = async (req, res) => {
  try {
    res.render("createProduct", { layout: "layout/layoutNoSlider.ejs" });
  } catch (error) {
    console.log(error);
  }
};

const getEditProductPageduct = async (req, res) => {
  try {
    res.render("editProduct", { layout: "layout/layoutNoSlider.ejs" });
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req, res) => {
  const { ...products } = req.body;
  try {
    await Product.create(products);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProduct,
  getDetailProduct,
  getCreateProductPage,
  getEditProductPageduct,
  createProduct,
};
