
const { Router} = require("express");
const { check } = require("express-validator");
const Role = require('../models/role');

const { validarCampos } = require("../middlewares/field-Validator");

const { getUser, postUser, deleteUser, putUser } = require("../controllers/user");


const router = Router();


router.get('/', getUser);
router.put('/:id', putUser);
router.post('/', [
    check('email', 'El correo no es valido').isEmail(),
    check('name', 'El nombre no es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y debe ser de mas de seis letras').isLength({ min: 6 }).not().isEmpty(),
    //check('role', 'No es un rol permitido').isIn([  'ADMIN_ROLE', 'USER_ROLE' ]),
    check('role').custom( async( role = '' ) => {
         const existRole = await Role.findOne({ role }); 
         if( !existRole ){
            throw new Error(`El rol ${ role } no esta registrado en la base de datos`)
            }
         
    }),
    validarCampos
],postUser);
router.delete('/', deleteUser);




module.exports = router;