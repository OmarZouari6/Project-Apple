let express=require('express')
const { signUp, login, getUser, deleteUser, getUsers, editUser } = require('../controllers/user.controller')
const { signUpRoles,validator } = require('../middleware/validator')
const  auth  = require('../middleware/auth')
const rolevalidator = require('../middleware/role')
let router=express.Router()


router.post("/signUp",signUpRoles(),validator,signUp)
router.post('/login',login)
router.get('/get',auth,getUser)
router.get('/getAllUsers',auth,rolevalidator(["admin"]),getUsers)
router.delete('/deleteUser/:id',auth,rolevalidator(["admin"]),deleteUser)
router.put('/editUser/:id',auth,editUser)

module.exports=router