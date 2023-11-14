const express = require("express");
const loginController = require("../controllers/loginController")
const clienteController = require("../controllers/clienteController")
const productoController = require("../controllers/productosController")
const pedidosController = require("../controllers/pedidosController")

const router =  express.Router();


module.exports = function() { 

    //login
    router.post('/login', loginController.login)

    //agregar Clientes
    router.post('/clientes', clienteController.nuevoCliente)
    router.get('/clientes', clienteController.mostrarClientes)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente) 
    router.put('/clientes/:idCliente', clienteController.actualizarCliente) 
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente) 

    //Productos
    router.post('/productos', productoController.nuevoProductos)
    router.get('/productos', productoController.mostrarProductos)
    router.get('/productos/:idProducto', productoController.mostrarProducto) 
    router.put('/productos/:idProducto', productoController.actualizarProductos) 
    router.delete('/productos/:idProducto', productoController.eliminarProductos) 

    //Pedidos
    router.post('/pedidos', pedidosController.nuevoPedido)
    router.get('/pedidos', pedidosController.mostrarPedidos)
    router.get('/pedidos/:idCliente', pedidosController.mostrarPedido)
    router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido)


    
    return router
}