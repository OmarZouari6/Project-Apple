let express = require('express');
let router = express.Router();
let { getProduct, addProduct, deleteProduct, editProduct } = require('../controllers/product.controller');
const rolevalidator = require('../middleware/role');
const { addProductRoles } = require('../middleware/validator');
const  auth  = require('../middleware/auth')




router.get('/getProducts', getProduct);
router.post('/addProduct',auth,addProductRoles(),rolevalidator(["admin"]),  addProduct);
router.delete('/deleteProduct/:id',auth,rolevalidator(["admin"]),deleteProduct);
router.put('/editProduct/:id',auth,rolevalidator(["admin"]),editProduct);

module.exports = router;