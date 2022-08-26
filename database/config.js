const mongoose = require("mongoose");
const colors = require("colors");


const dbConnection = async() => {

try{

    await mongoose.connect( process.env.MONGDB_CNN,{
    });

    console.log("Base de datos Online".blue);

}catch(error){

    console.log(error);
    throw new Error("Error a la hora de inicializar la base de datos")
}

}






module.exports = {
    dbConnection
}