const express = require("express")
const router = express.Router()

//controller
const {register, login, getCurrentUser} = require('../controllers/UserController')
const authGuard = require("../middlewares/authGuard")


//middlewares
const validate = require('../middlewares/handleValidation')
const {userCreateValidation, loginValidation} = require("../middlewares/userValidations")

//routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/profile", authGuard, getCurrentUser)

module.exports = router;