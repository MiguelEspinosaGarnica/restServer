const { response } = require("express");


const getUser = (req, res = response) => {

    res.json({
        
        ok: true,
        msg: 'get API - controlador'

    });
  } 

 const putUser = (req, res) => {
    res.json({
        
        ok: true,
        msg: 'put API'

    });
  }


  const postUser = (req, res) => {
    res.status(201).json({
        
        ok: true,
        msg: 'post API'

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