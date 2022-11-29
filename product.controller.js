const Product = require("../models/product.models");

// Man hinh tao moi product
exports.getProductCreate = (req, res, next) => {
  res.render("./product/add");
};
// Them product
exports.postProductCreate = (req, res, next) => {
  console.log("data gui tu form nhap len %j", req.body);
  var data = new Product();
  data.title = req.body.title;
  data.content = req.body.content;
  data.image = req.body.image;
  data.save(function (err) {
    console.log(err);
    res.redirect("/");
  });
};
// Xoa
exports.getProductDelete = (req, res, next) => {
  const ID = req.params.id;
  Todolist.findById(ID, function (err, resData) {
    console.log(" du lieu query %j", resData);
    res.render("./product/delete", { data: resData });
  });
};
// xoa voi method post
exports.postProductDelete = (req, res, next) => {
  console.log("chay toi xoa %j", req.params.id);
  Todolist.deleteOne({ _id: req.params.id }, function (err) {
    if (err) console.log(err);
    res.redirect("/");
  });
};

//danh sach todolist
exports.listProduct = (req, res, next) => {
  console.log("chay toi day");
  Todolist.get(function (err, data) {
    if (err) {
      console.log("co loi xay ra");
    } else {
      // console.log(" du lieu query %j", data);
      res.render("index", { data: data });
    }
  });
};
