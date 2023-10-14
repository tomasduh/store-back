const Productos = require('../models/Productos')

//agregar nuevo producto
exports.nuevoProductos = async (req, res, next) =>{
    const producto = new Productos(req.body);
    try{
        await producto.save()
        res.json({mensaje: 'se agrego un nuevo producto'})
    }catch(error){
        console.log(error);
        next();
    }
}

exports.mostrarProductos = async(req, res, next) => {
    try{
        const productos = await Productos.find();
        res.json(productos);
    }catch(error){
        console.log(error);
        next();
    }
}

exports.mostrarProducto = async(req, res, next) => {
    const producto = await Productos.findById(req.params.idProducto);
    
    if(!producto){
        res.json({mensaje: 'Producto no encontrado'});
        next()
    }
    res.json(producto);
}

exports.actualizarProductos = async(req, res, next) => {
    try{
        let producto = await Productos.findOneAndUpdate({_id : req.params.idProducto}, 
            req.body, {
                new:true
            })
        res.json(producto)
    }catch(error){
        console.log(error);
        next()
    }
}

exports.eliminarProductos = async(req, res, next) => {
    try{
        await Productos.findOneAndDelete({_id : req.params.idProducto})
        res.json({mensaje: 'Se elimino producto'})
    }catch(error){
        console.log(error);
        next()
    }
}