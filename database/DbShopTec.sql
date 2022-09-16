create database shoptec;
use shoptec;
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesoria`
--

CREATE TABLE `asesoria` (
  `PK_idAsesoria` int(10) NOT NULL,
  `fechaAsesoria` date NOT NULL,
  `temaAbordado` varchar(30) NOT NULL,
  `duracion` time NOT NULL,
  `Calificacion` int(5) NOT NULL,
  `FK_idUasesor` int(10) NOT NULL,
  `idUcliente` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `PK_idCategoria` int(10) NOT NULL,
  `nombreCategoria` varchar(50) NOT NULL,
  `cantidadProducto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `PK_id_cliente` int(10) NOT NULL,
  `identificacion_cliente` int(10) NOT NULL,
  `nombreCliente` varchar(50) NOT NULL,
  `fechaNacimientoCliente` date NOT NULL,
  `estadoCliente` enum('activo','inactivo') DEFAULT NULL,
  `contraseniaCliente` varchar(50) NOT NULL,
  `correoCliente` varchar(255) NOT NULL,
  `telefonoCliente` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `PK_idCompra` int(10) NOT NULL,
  `fechaCompra` date NOT NULL,
  `cantidadProducto` int(10) NOT NULL,
  `valorTotalProducto` float(10,2) NOT NULL,
  `descripcion_compra` varchar(100) NOT NULL,
  `Fk_id_cliente` int(10) NOT NULL,
  `FK_idProducto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `PK_idEmpresa` int(10) NOT NULL,
  `nitEmpresa` varchar(30) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `ubicacion` varchar(50) NOT NULL,
  `propietario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `intercambio`
--

CREATE TABLE `intercambio` (
  `PK_idIntercambio` int(10) NOT NULL,
  `descripcionIntercambio` text NOT NULL,
  `fechaIntercambio` date NOT NULL,
  `FK_idUvendedor` int(10) NOT NULL,
  `FK_idProducto` int(10) NOT NULL,
  `FK_idUcliente` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `PK_codigoProducto` int(10) NOT NULL,
  `nombreProducto` varchar(50) NOT NULL,
  `referencia` varchar(30) NOT NULL,
  `tipoProducto` enum('Nuevo','Usado') NOT NULL,
  `estadoProducto` enum('revision','cancelado','ok') DEFAULT NULL,
  `precioProducto` decimal(10,2) DEFAULT NULL,
  `cantidadProductos` int(10) NOT NULL,
  `FK_idCategoria` int(30) NOT NULL,
  `FK_idEmpresa` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `PK_id_usuario` int(10) NOT NULL,
  `identificacion` varchar(30) NOT NULL,
  `nombreUsuario` varchar(50) DEFAULT NULL,
  `fechaNacimiento` date NOT NULL,
  `estadoUsuario` enum('Activo','Inactivo') DEFAULT NULL,
  `tipoUsuario` enum('Administrador','Vendedor','Asesor') DEFAULT NULL,
  `contrasenia` varchar(50) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `telefono` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `PK_id_Venta` int(10) NOT NULL,
  `fechaVenta` varchar(50) NOT NULL,
  `cantidad_producto` int(8) NOT NULL,
  `valorVenta` float(10,2) DEFAULT NULL,
  `descripcionVenta` varchar(100) NOT NULL,
  `FK_id_pdto` int(10) NOT NULL,
  `FK_id_Uvendedor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asesoria`
--
ALTER TABLE `asesoria`
  ADD PRIMARY KEY (`PK_idAsesoria`),
  ADD KEY `usua_Asesori_l` (`FK_idUasesor`),
  ADD KEY `cliente_asesoria` (`idUcliente`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`PK_idCategoria`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`PK_id_cliente`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`PK_idCompra`),
  ADD KEY `compra_cliente` (`Fk_id_cliente`),
  ADD KEY `prod_comp_L` (`FK_idProducto`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`PK_idEmpresa`);

--
-- Indices de la tabla `intercambio`
--
ALTER TABLE `intercambio`
  ADD PRIMARY KEY (`PK_idIntercambio`),
  ADD KEY `usua_Inter_L` (`FK_idUvendedor`),
  ADD KEY `usuc_Inter_L` (`FK_idUcliente`),
  ADD KEY `prod_Inter_L` (`FK_idProducto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`PK_codigoProducto`),
  ADD KEY `cate_Producto_L` (`FK_idCategoria`),
  ADD KEY `empr_Producto_L` (`FK_idEmpresa`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`PK_id_usuario`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`PK_id_Venta`),
  ADD KEY `ventapdto` (`FK_id_pdto`),
  ADD KEY `ventaUs` (`FK_id_Uvendedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asesoria`
--
ALTER TABLE `asesoria`
  MODIFY `PK_idAsesoria` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `PK_idCategoria` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `PK_id_cliente` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `PK_idCompra` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `PK_idEmpresa` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `intercambio`
--
ALTER TABLE `intercambio`
  MODIFY `PK_idIntercambio` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `PK_codigoProducto` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `PK_id_usuario` int(10) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asesoria`
--
ALTER TABLE `asesoria`
  ADD CONSTRAINT `cliente_Ase` FOREIGN KEY (`idUcliente`) REFERENCES `cliente` (`PK_id_cliente`),
  ADD CONSTRAINT `usua_Ase` FOREIGN KEY (`FK_idUasesor`) REFERENCES `usuario` (`PK_id_usuario`);

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `cliente_compra` FOREIGN KEY (`Fk_id_cliente`) REFERENCES `cliente` (`PK_id_cliente`),
  ADD CONSTRAINT `prod_Detalle` FOREIGN KEY (`FK_idProducto`) REFERENCES `producto` (`PK_codigoProducto`);

--
-- Filtros para la tabla `intercambio`
--
ALTER TABLE `intercambio`
  ADD CONSTRAINT `prod_Inter` FOREIGN KEY (`FK_idProducto`) REFERENCES `producto` (`PK_codigoProducto`),
  ADD CONSTRAINT `usuC_Inter` FOREIGN KEY (`FK_idUcliente`) REFERENCES `cliente` (`PK_id_cliente`),
  ADD CONSTRAINT `usua_Inter` FOREIGN KEY (`FK_idUvendedor`) REFERENCES `usuario` (`PK_id_usuario`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `cate_Producto` FOREIGN KEY (`FK_idCategoria`) REFERENCES `categoria` (`PK_idCategoria`),
  ADD CONSTRAINT `empr_Producto` FOREIGN KEY (`FK_idEmpresa`) REFERENCES `empresa` (`PK_idEmpresa`);

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `pdtoventa` FOREIGN KEY (`FK_id_pdto`) REFERENCES `producto` (`PK_codigoProducto`),
  ADD CONSTRAINT `ventasUs` FOREIGN KEY (`FK_id_Uvendedor`) REFERENCES `usuario` (`PK_id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
