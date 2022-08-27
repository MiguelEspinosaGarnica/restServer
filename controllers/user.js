const { response } = require("express");
const bcryptjs = require("bcryptjs");


const User = require("../models/user");


const getUser = (req = request, res = response) => {

    const {q, name = "no name", page = 1} = req.query;
    res.json({
        
        ok: true,
        msg: 'get API - controlador',
        q,
        name,
        page

    });
  } 

 const putUser = (req, res) => {

    const id = req.params.id;
    res.json({
        
        ok: true,
        msg: 'put API',
        id

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
    delete user.password;

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