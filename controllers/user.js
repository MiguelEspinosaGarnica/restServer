const { response } = require("express");


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


  const postUser = (req, res) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
         
        ok: true,
        msg: 'post API',
        nombre,
        edad

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