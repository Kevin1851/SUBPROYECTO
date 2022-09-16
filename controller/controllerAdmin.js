const conexion = require('../database/conexionDB');

const controlador={};

// vista del incio de administrador

controlador.incioAdmin=(req,res)=> {
    res.render('index')
};

// eliminar usuario

controlador.Eliminar=(req,res)=>{
    const id=req.params.ident;

    const sql=`delete from usuario where PK_id_usuario=${id}`

    conexion.query(sql,(error,result) => {
        console.log(sql)
        if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
        else return res.json({mensaje:'Usuario eliminado con éxito'});
    });
}

// eliminar cliente

controlador.EliminarCliente=(req,res)=>{
    let id = req.params.ident;

    const sql=`delete from 	cliente where PK_id_cliente=${id}`

    conexion.query(sql,(error,result) => {
        console.log(sql)
        if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
        else return res.json({mensaje:'Usuario eliminado con éxito'});
    });
}

// eliminar producto

controlador.eliminarPdto=(req,res)=>{
    let id = req.params.ident;

    const sql=`delete from producto where PK_codigoProducto =${id}`

    conexion.query(sql,(error,result) => {
        console.log(sql)
        if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
        else return res.json({mensaje:'Producto eliminado con éxito'});
    });
}

// eliminar categoria

controlador.eliminarCategoria=(req,res)=>{
    let id=req.params.ident;
    const sql= `delete from categoria where PK_idCategoria =${id}`

    conexion.query(sql,(error,result) => {
        console.log(sql)
        if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
        else return res.json({mensaje:'Categoria eliminada con éxito'});
    });
}

// eliminar empresa

controlador.eliminarEmpresa=(req,res)=>{
    let id=req.params.ident;
    const sql=`delete from empresa where PK_idEmpresa =${id}`
    conexion.query(sql,(error,result) => {
        console.log(sql)
        if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
        else return res.json({mensaje:'Categoria eliminada con éxito'});
    });
}

// eliminar assesoria

controlador.eliminarAssesoria=(req,res)=>{
    let id = req.params.ident;
    const sql = `delete from asesoria where PK_idAsesoria  =${id}`

    conexion.query(sql,(error,result) => {
        console.log(sql)
        if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
        else return res.json({mensaje:'Asesoria eliminada con éxito'});
    });
}

// eliminar intercambio

controlador.EliminarIntercambio=(req,res)=>{
    let id = req.param.ident;
    const sql=`delete from intercambio where PK_idIntercambio =${id}`

    conexion.query(sql,(error,result) => {
        console.log(sql)
        if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
        else return res.json({mensaje:'intercambio eliminado con éxito'});
    });
}

// eliminar compra

controlador.EliminarCompra=(req,res)=>{
    let id = req.params.idEliminarCompra;
    const sql= `delete from compra where  PK_idCompra =${id}`

    conexion.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/EliminarCompra')
        }
    })
}

// eliminar venta
controlador.EliminarVenta=(req,res)=>{
    let id= req.params.idEliminarVenta;
    const sql= `delete from venta where PK_id_Venta =${id}`
}

// vista administrador lista de usuarios

controlador.listarUsuario=(req,res)=>{
    let sql= `SELECT * FROM usuario`;
    conexion.query(sql,(error,datos)=>{
        if(error) return res.json({mensaje:'Error al consultar en la bd...'});
        else return res.json(datos);
    })
};

controlador.adminUsuario=(req,res)=>{
    res.render('plantillaUsuario.ejs')
}

// vista administrador de clientes

controlador.listarCliente=(req,res)=>{
    let sql= `SELECT * FROM cliente`;
    conexion.query(sql,(error,datos)=>{
        if(error) return res.json({mensaje:'Error al consultar en la bd...'});
        else return res.json(datos);
    })
}

controlador.adminCliente=(req,res)=>{
    res.render('plantillaCliente.ejs')
}

// vista administrador lista de productos

controlador.adminPdto=(req,res)=>{
    res.render('plantillaProducto.ejs')
}

controlador.ListarProducto=(req,res)=>{
    let sql= "SELECT `PK_codigoProducto`, `nombreProducto`, `referencia`, `tipoProducto`, `estadoProducto`, `precioProducto`, `cantidadProductos`, `nombreCategoria`, `nombre` FROM `producto` INNER JOIN categoria ON Pk_idCategoria=FK_idCategoria INNER JOIN empresa on PK_idEmpresa=FK_idEmpresa;";
   conexion.query(sql,(error,datos)=>{
        if(error) return res.json({mensaje:'Error al consultar en la bd...'});
        else return res.json(datos);
    })
}

// vista de administrador lista de categorias

controlador.adminCategoria=(req,res)=>{
    res.render('plantillaCategoria.ejs')
}

controlador.listarCategoria=(req,res)=>{
    let sql = "SELECT * FROM categoria"
    conexion.query(sql,(error,datos)=>{
        if(error) return res.json({mensaje:'Error al consultar en la bd...'});
        else return res.json(datos);
    })
}

// vista de administrador lista de Empresas

controlador.adminEmpresa=(req,res)=>{
    res.render('plantillaEmpresa.ejs')
}
controlador.listarEmpresa=(req,res)=>{
    let sql="SELECT * FROM empresa"
    conexion.query(sql,(error,datos)=>{
        if(error) return res.json({mensaje:'Error al consultar en la bd...'});
        else return res.json(datos);
    })
}

// vista de administrador lista de assesorias

controlador.listarAssesoria=(req,res)=>{
    let sql= "SELECT  `PK_idAsesoria`, `fechaAsesoria`, `temaAbordado`, `duracion`, `Calificacion`, `nombreUsuario`, `nombreCliente` FROM `asesoria` inner join usuario on usuario.PK_id_usuario=asesoria.FK_idUasesor INNER join cliente on cliente.PK_id_cliente=asesoria.idUcliente"
    conexion.query(sql,(error,datos)=>{
        if(error) return res.json({mensaje:'Error al consultar en la bd...'});
        else return res.json(datos);
    })
}

controlador.adminAssesoria=(req,res)=>{
    res.render('plantillaAssesoria.ejs')
}
// vista de administrador de intercambios


controlador.adminIntercambio=(req,res)=>{
    res.render('plantillaIntercambio.ejs')
}
controlador.listarIntercambio=(req,res)=>{
    let sql="SELECT `PK_idIntercambio`, `descripcionIntercambio`, `fechaIntercambio`, `nombreUsuario`, `nombreCliente`, `nombreProducto` FROM `intercambio` inner join usuario on usuario.PK_id_usuario=intercambio.FK_idUvendedor INNER JOIN producto on producto.PK_codigoProducto=intercambio.FK_idProducto INNER join cliente on cliente.PK_id_cliente=intercambio.FK_idUcliente;"
    conexion.query(sql,(error,datos)=>{
        if(error) return res.json({mensaje:'Error al consultar en la bd...'});
        else return res.json(datos);
    })
}

// vista de admnistrador lista de compras

controlador.adminCompra=(req,res)=>{
    let sql = "SELECT `PK_idCompra`, `fechaCompra`, `cantidadProducto`, `valorTotalProducto`, `descripcion_compra`, `nombreCliente`, `nombreProducto` FROM `compra` INNER JOIN cliente on cliente.PK_id_cliente=compra.Fk_id_cliente INNER JOIN producto on producto.PK_codigoProducto=compra.FK_idProducto;"
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.render('plantillaCompras',{listadoCompra:datos})
        }else{
            console.log("Error al consultar compras"+error)
        }
    })
}

// vista administrador de ventas
controlador.adminVentas=(req,res)=>{
    let sql = "SELECT `PK_id_Venta`, `fechaVenta`, `cantidad_producto`, `valorVenta`, `descripcionVenta`, `nombreUsuario`, `nombreProducto`,`FK_id_compra` FROM `venta` inner join usuario on usuario.PK_id_usuario=venta.FK_id_Uvendedor INNER join producto on producto.PK_codigoProducto=venta.FK_id_pdto ;"
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.render('plantillaVentas',{listadoVenta:datos})
        }else{
            console.log("Error al consultar compras"+error)
        }
    })
}

// controlador para registrar un usuario nuevo

// controlador.registrar=(req,res)=>{
//     res.render('registrarUsuario')
// }
controlador.registrarUsuario=(req,res)=>{
    const{identificacion,nombre,fechaNacimiento,estado,contrasenia,correo,telefono,tipo}= req.body;

    const sql = `insert into usuario (identificacion,nombreUsuario,fechaNacimiento,estadoUsuario,contrasenia,correo,telefono,tipoUsuario )
                values
                ('${identificacion}','${nombre}','${fechaNacimiento}','${estado}','${contrasenia}','${correo}','${telefono}','${tipo}');`;

                console.log(sql);
                conexion.query(sql,(error,result)=>{
                    if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
                    else return res.json({mensaje:'Usuario registrado con éxito'});
                })
}

// controlador regitrar nuevo cliente

// controlador.registrarCliente=(req,res)=>{
//     res.render('registrarCliente')
// }
controlador.registrarClientes=(req,res)=>{
        const{identificacion,nombre,fechaNacimiento,estado,contrasenia,correo,telefono}= req.body;
    
        const sql = `insert into cliente (identificacion_cliente,nombreCliente,fechaNacimientoCliente,estadoCliente,contraseniaCliente,correoCliente,telefonoCliente )
                    values
                    ('${identificacion}','${nombre}','${fechaNacimiento}','${estado}','${contrasenia}','${correo}','${telefono}');`;
    
                    console.log(sql);
                    conexion.query(sql,(error,result)=>{
                        if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
                        else return res.json({mensaje:'Usuario registrado con éxito'});
                    })
    }


// controlador para registrar un producto nuevo


controlador.registroPdto=(req,res)=>{
    const{nombrePdto,referencia,tipoPdto,estadoPdto,precio,cantidad,categoria,empresa}=req.body;

    const sql= `insert into producto(nombreProducto,referencia,tipoProducto,estadoProducto,precioProducto,cantidadProductos,FK_idCategoria,FK_idEmpresa)
                values
                ('${nombrePdto}','${referencia}','${tipoPdto}','${estadoPdto}','${precio}','${cantidad}','${categoria}','${empresa}')`
              
                console.log(sql);
                    conexion.query(sql,(error,result)=>{
                        if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
                        else return res.json({mensaje:'Producto registrado con éxito'});
                    })
};

// controlador para el registro de una nueva categoria

// controlador.RegistrarCategorias=(req,res)=>{
//     res.render('registrarCategoria')
// }
 controlador.registrarCategorias=(req,res)=>{
    const{nombreCategoria,cantidadProductoCtg}=req.body;
    const sql=`insert into categoria (nombreCategoria,cantidadProducto)
                values
                ('${nombreCategoria}','${cantidadProductoCtg}')`
                console.log(sql);
                    conexion.query(sql,(error,result)=>{
                        if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
                        else return res.json({mensaje:'Categoria registrada con éxito'});
                    })
 }

// controlador registrar una empresa nueva

controlador.registrarEmpresas=(req,res)=>{
    const{nitEmpresa,nombreEmpresa,ubicacion,Propietario}=req.body;
    const sql=`insert into empresa (PK_idEmpresa,nombre,ubicacion,propietario)
                values
                ('${nitEmpresa}','${nombreEmpresa}','${ubicacion}','${Propietario}')`
                console.log(sql);
                    conexion.query(sql,(error,result)=>{
                        if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
                        else return res.json({mensaje:'Categoria registrada con éxito'});
                    })
}

// controlador registrar nueva assesoria

// 

controlador.RegistrarAssesorias=(req,res)=>{
    const{fecha,tema,duracion,calificacion,idAss,idcliente}=req.body;
    const sql=`insert into asesoria (fechaAsesoria,temaAbordado,duracion,Calificacion,
                FK_idUasesor,idUcliente)
                values
                ('${fecha}','${tema}','${duracion}','${calificacion}','${idAss}','${idcliente}')`;
                console.log(sql);
                conexion.query(sql,(error,result)=>{
                    if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
                    else return res.json({mensaje:'Asesoria registrada con éxito'});
                })
}

// controladir para registrar un nuevo intercambio 

controlador.registrarIntercambios=(req,res)=>{
    const {descripsion,fecha,idVendedor,idCliente,idpdto}=req.body;
    const sql = `insert into intercambio (descripcionIntercambio,fechaIntercambio,FK_idUvendedor,FK_idUcliente,FK_idProducto)
                values
                ('${descripsion}','${fecha}','${idVendedor}','${idCliente}','${idpdto}')`
                console.log(sql);
                conexion.query(sql,(error,result)=>{
                    if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
                    else return res.json({mensaje:'Intercambio registrado con éxito'});
                })
}

// controlador para registrar nueva compra
controlador.RegistrarCompra=(req,res)=>{
    res.render('registrarCompras')
}
controlador.RegistrarCompras=(req,res)=>{
    const {fecha,cantidadPdto,descripcionPdto,idCliente,idPdto}=req.body;
    const sql = `insert into compra (fechaCompra,cantidadProducto,valorTotalProducto,descripcion_compra,Fk_id_cliente ,FK_idProducto )
                values
                ('${fecha}','${cantidadPdto}','${descripcionPdto}','${idCliente}','${idPdto})`
                conexion.query(sql,(error,result)=>{
                    if(error){
                        console.log(error);
                    }else{
                        res.redirect('/adminCompras')
                    }
                })
}

// controlador para registrar una venta nueva
controlador.RegistrarVenta=(req,res)=>{
    res.render('registrarVentas')
}
controlador.RegistrarVentas=(req,res)=>{
    const {fecha,cantidadd,valor,descripcion,idVendedor,idPdto}=req.body;
    const sql = `insert into compra (fechaCompra,cantidadProducto,valorTotalProducto,descripcion_compra,Fk_id_cliente ,FK_idProducto )
                values
                ('${fecha}','${cantidadd}','${valor}','${descripcion}','${idVendedor}','${idPdto})`
                conexion.query(sql,(error,result)=>{
                    if(error){
                        console.log(error);
                    }else{
                        res.redirect('/adminVentas')
                    }
                })
}

module.exports=controlador;