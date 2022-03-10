let Product = require("../models/Product");
const User = require("../models/user");
let jwt = require("jsonwebtoken");
let config = require("config");
let secret = config.get("secret");

// get all the porducts
exports.getProduct = async (req, res) => {
  try {
    let products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

// add product
exports.addProduct = async (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  try {
    let { productName, image,prix, discreption, quantity, categorie } = req.body;
    let newProduct = new Product({
      productName,
      image,
      prix,
      discreption,
      quantity,
      categorie,
    });
    newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.deleteProduct=async(req,res)=>{
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let theProduct= await Product.findById(req.params.id)
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.send(`${theProduct.productName} is deleted by ${user.userName}`)
  } catch (error) {
      console.log(error.message)
  }
}

exports.editProduct=async(req,res)=>{
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let theProduct= await Product.findById(req.params.id)
  try {
    let editedProduct= await Product.findByIdAndUpdate(req.params.id,{...req.body})
    res.send(editedProduct)
  } catch (error) {
    console.log(error.message)
  }
}


