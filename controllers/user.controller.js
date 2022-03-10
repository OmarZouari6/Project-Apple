let User = require("../models/user");
let config = require("config");
let secret = config.get("secret");
let bc = require("bcryptjs");
let jwt = require("jsonwebtoken");

// create user
exports.signUp = async (req, res) => {
  let { userName, email, password, phoneNumber, role } = req.body;
  let isExest = await User.findOne({ email });
  if (isExest) {
    res.status(400).json({ msg: "try an other email" });
  }
  try {
    let newUser = new User({ userName, email, password, phoneNumber, role });
    let salt = await bc.genSalt(10);
    let hash = bc.hashSync(password, salt);
    newUser.password = hash;
    await newUser.save();
    let payload = {
      id: newUser._id,
      userName: newUser.userName,
    };
    let token = jwt.sign(payload, secret);
    res.send({ token, newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login
exports.login=async(req,res)=>{
    let {email,password}=req.body
    try {
        let thisUser=await User.findOne({email})
        if(!thisUser){
            res.status(400).json({msg:"email or password incorrect"})
        }
        let isMatch= await bc.compare(password,thisUser.password)
        if(!isMatch){
            res.status(400).json({msg:"email or password incorrect"})
        }
        let payload={
            id:thisUser._id,
            role:thisUser.role
        }
        let token = jwt.sign(payload,secret)
        res.send({
            token,
            thisUser
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// get a user
exports.getUser=async(req,res)=>{
  res.send(req.user)
}

// get users
exports.getUsers=async(req,res)=>{
  try {
    let users= await User.find()
    res.send(users)
    } catch (error) {
       console.log(error.message)
    }
}

// delete a user
exports.deleteUser=async(req,res)=>{
  try {
  await User.findByIdAndDelete(req.params.id)
  res.send("user is deleted")
  } catch (error) {
      console.log(error.message)
  }
}

// edit a user
exports.editUser=async(req,res)=>{
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  console.log(req.params.id)
  console.log(decoded.id)
let {password}=req.body
  if (req.params.id!==decoded.id) {
    res.status(400).json({ msg: "you cannot edit this user" });}
  try {
    let editedUser= await User.findByIdAndUpdate(req.params.id,{...req.body})
    let salt = await bc.genSalt(10);
    let hash = await bc.hashSync(password, salt);
    editedUser.password = hash;
    await editedUser.save();
    let payload={
      id:editedUser._id,
      role:editedUser.role
  }
    let token = jwt.sign(payload, secret);
    res.send({editedUser,token})
    } catch (error) {
        console.log(error.message)
    }

}

