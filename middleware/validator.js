const { check, validationResult } = require('express-validator')

exports.signUpRoles=()=>[
    check("userName","Required Field").notEmpty(),
    check("email","Required Field").notEmpty(),
    check("email","Required Field").isEmail(),
    check("password","Required Field").isLength({min:6}),
    check("phoneNumber","Required Field").isLength({min:8}),
    check("role","Required Field").notEmpty()
]

exports.addProductRoles=()=>[
    check("productName","Required Field").notEmpty(),
    check("image","Required Field").notEmpty(),
    check("quantity","Required Field").notEmpty(),
    check("categorie","Required Field").notEmpty()
]

exports.validator=(req,res,next)=>{
    let errors=validationResult(req)
    return errors.isEmpty()?
    next()
    :res.status(400).json({errors:errors.array()})
}

