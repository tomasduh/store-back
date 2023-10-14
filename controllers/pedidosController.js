const Pedidos = require('../models/Pedidos')

//agregar nuevo pedido
exports.nuevoPedido = async (req, res, next) =>{
    const pedido = new Pedidos(req.body);

    try{
        await pedido.save()
        res.status(200).json({mensaje: 'se agrego un nuevo pedido'})
    }catch(error){
        res.status(400).json({error: error});
        next();
    }
}

exports.mostrarPedidos = async(req, res, next) => {
    try{
        const pedidos = await Pedidos.find().populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });
        res.status(200).json(pedidos);
    }catch(error){
        res.status(400).json({error: error});
        next();
    }
}

exports.mostrarPedido = async (req, res) => {
    try {
      const pedido = await Pedidos.find({ cliente: req.params.idCliente })
        .populate({
          path: 'pedido.producto',
          model: 'Productos'
        });
  
      if (!pedido) {
        return res.status(400).json({ mensaje: 'Pedido no encontrado' });
      }
  
      res.status(200).json(pedido);
    } catch (error) {
      // Manejo de errores
      console.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };


exports.actualizarPedido = async(req, res, next) => {
    try{
        let pedido = await Pedidos.findOneAndUpdate({_id : req.params.idPedido}, 
            req.body, {
                new:true
            })
        res.json(pedido)
    }catch(error){
        console.log(error);
        next()
    }
}

exports.eliminarPedido = async(req, res, next) => {
    try{
        await Pedidos.findOneAndDelete({_id : req.params.idPedido})
        res.json({mensaje: 'Se elimino el pedidp'})
    }catch(error){
        console.log(error);
        next()
    }
}