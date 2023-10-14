const Clientes = require('../models/Clientes')

//agregar nuevo cliente
exports.nuevoCliente = async (req, res, next) =>{
    const cliente = new Clientes(req.body);

    try{
        await cliente.save()
        res.json({mensaje: 'se agrego un nuevo cliente'})
    }catch(error){
        console.log(error);
        next();
    }
}

exports.mostrarClientes = async(req, res, next) => {
    try{
        const clientes = await Clientes.find();
        res.json(clientes);
    }catch(error){
        console.log(error);
        next();
    }
}

exports.mostrarCliente = async(req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);
    
    if(!cliente){
        res.json({mensaje: 'Cliente no encontrado'});
        next()
    }
    res.json(cliente);
}

exports.actualizarCliente = async(req, res, next) => {
    try{
        const cliente = await Clientes.findOneAndUpdate({_id : req.params.idCliente}, 
            req.body, {
                new:true
            })
        res.json(cliente)
    }catch(error){
        console.log(error);
        next()
    }
}

exports.eliminarCliente = async(req, res, next) => {
    try{
        await Clientes.findOneAndDelete({_id : req.params.idCliente})
        res.json({mensaje: 'Se elimino cliente'})
    }catch(error){
        console.log(error);
        next()
    }
}