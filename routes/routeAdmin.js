const express= require("express");
const rutaAdmin = express.Router();

const controladorAdmin = require('../controller/controllerAdmin');
//rutas para eliminar
rutaAdmin.get('/EliminarUsuario/:ident',controladorAdmin.Eliminar);
rutaAdmin.get('/EliminarPdtos/:ident', controladorAdmin.eliminarPdto);
rutaAdmin.get('/EliminarCategorias/:ident',controladorAdmin.eliminarCategoria);
rutaAdmin.get('/EliminarEmpresas/:ident',controladorAdmin.eliminarEmpresa);
rutaAdmin.get('/EliminarAsesorias/:ident',controladorAdmin.eliminarAssesoria);
rutaAdmin.get('/EliminarIntercambio/:ident',controladorAdmin.EliminarIntercambio);
rutaAdmin.get('/EliminarCompra/:idEliminarCompra',controladorAdmin.EliminarCompra);
rutaAdmin.get('/EliminarVenta/:idEliminarVenta',controladorAdmin.EliminarVenta);
rutaAdmin.get('/EliminarCliente/:ident',controladorAdmin.EliminarCliente);
//inicio de sesion
rutaAdmin.get('/Inicio',controladorAdmin.incioAdmin);
// rutas de administradoe de usuarios
rutaAdmin.get('/adminUsuarios',controladorAdmin.adminUsuario);
rutaAdmin.get('/listarUsuario',controladorAdmin.listarUsuario);
rutaAdmin.post('/RegistrarUsuario',controladorAdmin.registrarUsuario);
// rutas administrador de cliente
rutaAdmin.get('/adminCliente',controladorAdmin.adminCliente);
rutaAdmin.get('/listarCliente',controladorAdmin.listarCliente);
rutaAdmin.post('/RegistrarClientes',controladorAdmin.registrarClientes);
// rutas de administrador de producto
rutaAdmin.get ('/adminProductos',controladorAdmin.adminPdto);
rutaAdmin.get('/ListarProducto',controladorAdmin.ListarProducto);
rutaAdmin.post('/registrarProducto',controladorAdmin.registroPdto);
// rutas de administrador de categorias
rutaAdmin.get('/adminCategorias', controladorAdmin.adminCategoria);
rutaAdmin.get('/listarCategoria', controladorAdmin.listarCategoria);
rutaAdmin.post('/registrarCategorias',controladorAdmin.registrarCategorias);
// rutas de administrador de empresa
rutaAdmin.get('/adminEmpresas',controladorAdmin.adminEmpresa);
rutaAdmin.get('/listarEmpresas',controladorAdmin.listarEmpresa);
rutaAdmin.post('/registrarEmpresas',controladorAdmin.registrarEmpresas)
// rutas de administrador de Asesoria
rutaAdmin.get('/adminAssesorias',controladorAdmin.adminAssesoria);
rutaAdmin.get('/listarAsesoria',controladorAdmin.listarAssesoria);
rutaAdmin.post('/registrarAssesorias',controladorAdmin.RegistrarAssesorias)
// rutas de administrador de intercambio
rutaAdmin.get('/adminIntercambio',controladorAdmin.adminIntercambio);
rutaAdmin.get('/listarIntercambio',controladorAdmin.listarIntercambio);
rutaAdmin.post('/registrarIntercambios',controladorAdmin.registrarIntercambios);
// rutas de administrador de compras
rutaAdmin.get('/adminCompras',controladorAdmin.adminCompra);
rutaAdmin.get('/RegistrarCompra',controladorAdmin.RegistrarCompra);
rutaAdmin.post('/RegistrarCompras',controladorAdmin.RegistrarCompras)
// rutas administrador de venta
rutaAdmin.get('/adminVentas',controladorAdmin.adminVentas);
rutaAdmin.get('/RegistrarVenta',controladorAdmin.RegistrarVenta);
rutaAdmin.post('/RegistrarVentas',controladorAdmin.RegistrarVentas);

module.exports= rutaAdmin;