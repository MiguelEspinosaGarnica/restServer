const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async( role = '' ) => {
    const existRole = await Role.findOne({ role }); 
    if( !existRole ){
       throw new Error(`El rol ${ role } no esta registrado en la base de datos`)
       }
    
}

const doesEmailExist = async (email = '') => {
    const existEmail = await User.findOne({ email });
    if ( existEmail ){
        throw new Error(`El email ${ email } ya esta registrado en la base de datos`);
    }
} 

const doesUserExist = async (id) => {
    const existsUser = await User.findById(id);
    if ( !existsUser ){
        throw new Error(`El usuario ${ id } no existe en la base de datos`);
    }
} 

module.exports = {
    isValidRole,
    doesEmailExist,
    doesUserExist
}