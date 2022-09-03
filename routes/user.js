
const { Router} = require("express");
const { check } = require("express-validator");


const { validarCampos } = require("../middlewares/field-Validator");
const { isValidRole, doesEmailExist } = require("../helpers/db-validators");

const { getUser, postUser, deleteUser, putUser } = require("../controllers/user");



const router = Router();


router.get('/', getUser);
router.put('/update/:id', putUser);
router.post('/create', [
    check('email', 'El correo no es valido').isEmail(),
    check('name', 'El nombre no es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y debe ser de mas de seis letras').isLength({ min: 6 }).not().isEmpty(),
    //check('role', 'No es un rol permitido').isIn([  'ADMIN_ROLE', 'USER_ROLE' ]),
    check('role').custom( isValidRole ),
    check('email').custom( doesEmailExist ),
    validarCampos
],postUser);
router.delete('/', deleteUser);




module.exports = router;