const { Router} = require("express");
const { check } = require("express-validator");

const { login } = require("../controllers/auth");

const { validarCampos } = require("../middlewares/field-Validator");



const router = Router();


router.post('/login', [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").notEmpty(),
    validarCampos
], login);



module.exports = router;