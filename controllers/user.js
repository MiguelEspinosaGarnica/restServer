const { response } = require("express");
const bcryptjs = require("bcryptjs");


const User = require("../models/user");

const getUser = async (req = request, res = response) => {

    const {q, name = "no name", page = 1, limit = 5, from = 0} = req.query;
    

    const users = await User.find()
    .skip(from)
    .limit(limit, from);
    res.json({
        
        ok: true,
        msg: 'Usuarios guardados',
        users
    });
  } 

 const putUser = async (req, res) => {

    const id = req.params.id;

    const { _id, password, google, email, ...rest} = req.body;


    //TODO Validar contra base de datos
    if( password ){
      const salt = bcryptjs.genSaltSync(10);
      rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate( id, rest, {new: true} );

    res.json({
        
        ok: true,
        msg: 'Usuario actualizado con exito',
        user

    });
  }


  const postUser = async (req, res) => {

  
    const {name, password, email, role, ...rest} = req.body;
    const user = new User({name, password, email, role});  

    //Verificar si el correo existe
    

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt); 


  //Guardar en base de datos
    await user.save();

    res.json({
         
        user
        
    });
  }

  const deleteUser = (req, res) => {
    res.json({
        
        ok: true,
        msg: 'delete API'

    });
  }

  module.exports = { 
    getUser,
    putUser,
    postUser,
    deleteUser
  }