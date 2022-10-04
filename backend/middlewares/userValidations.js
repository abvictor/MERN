const {body} = require("express-validator")

const userCreateValidation = () =>{
    return [
        body("name")
        .isString()
        .withMessage("O nome é obrigatório")
        .isLength({min: 3})
        .withMessage("O nome precisa ter mais de 3 caracteres"),
        body("email")
        .isString()
        .withMessage("O e-mail é obrigatório")
        .isEmail()
        .withMessage("Insira um e-mail válido"),
        body("password")
        .isString()
        .withMessage("A senha é obrigatória")
        .isLength({min: 4})
        .withMessage("A senha precisa ter no mínimo 4 caracteres"),
        body("confirmPassword")
        .isString()
        .withMessage("A confirmaçação de senha é obrigatória")
        .isLength({min: 4})
        .withMessage("A senha precisa ter no mínimo 4 caracteres")
        .custom((value, {req})=>{
            if(value != req.body.password){
                throw new Error("As senhas não são iguais")
            }
            return true
        })   
    ]
}

const loginValidation = () =>{
    return [
        body('email')
        .isString()
        .withMessage("O e-mail é obrigatório")
        .isEmail()
        .withMessage("Insira um e-mail válido"),
        body("password")
        .isString()
        .withMessage("A senha é obrigatória")
        
        
    ]
}
const userUpdateValidation = () =>{
    return [
        body("name")
        .optional()
        .isLength({min: 3})
        .withMessage("O nome precisa de pelo menos 3 caracteres"),
        body("password")
        .optional()
        .isLength({min: 4})
        .withMessage("A senha precisa ter no mínimo 4 caracteres")

    ]
}
module.exports = {userCreateValidation, loginValidation, userUpdateValidation}