const Clientes = require('../models/Clientes')


exports.login = async(req, res, next) => {

   const cliente = await Clientes.findOne( {email : req.body.email})

    if(!cliente){
        return res.status(400).json({error: 'No existe el usuario o email'});
    } 
    if(cliente.password != req.body.password){
        return res.status(400).json({error: 'Contraseña incorrecta'});
    }
    
    return res.status(200).json(cliente);
}