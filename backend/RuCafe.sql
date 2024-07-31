CREATE DATABASE RuCafe;
USE RuCafe;

-- Creación de la tabla 'Categorias' con ID autoincremental
CREATE TABLE Categorias (
  IdCategoria INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(255) NOT NULL
);

-- Creación de la tabla 'Productos' con ID autoincremental
CREATE TABLE Productos (
  IdProducto INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(255) NOT NULL,
  Descripcion TEXT,
  Precio DECIMAL(10, 2),
  IdCategoria INT,
  Precio2 DECIMAL(10, 2),
  FOREIGN KEY (IdCategoria) REFERENCES Categorias(IdCategoria)
);

-- Creación de la tabla 'Usuarios' con ID autoincremental
CREATE TABLE Usuarios (
  IdUsuario INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(255) NOT NULL,
  CorreoElectronico VARCHAR(255) UNIQUE NOT NULL,
  Contraseña VARCHAR(255) NOT NULL
);

INSERT INTO Usuarios (Nombre, CorreoElectronico, Contraseña) VALUES 
('RuCafe', 'rucafemenu@gmail.com', 'admin');

-- Creación de la tabla 'Roles' con ID autoincremental
CREATE TABLE Roles (
  IdRol INT AUTO_INCREMENT PRIMARY KEY,
  NombreRol VARCHAR(255) NOT NULL
);

INSERT INTO Roles (NombreRol) VALUES 
('ADMINISTRADOR');

-- Creación de la tabla 'Permisos' con ID autoincremental
CREATE TABLE Permisos (
  IdPermiso INT AUTO_INCREMENT PRIMARY KEY,
  NombrePermiso VARCHAR(255) NOT NULL,
  Descripcion VARCHAR(255)
);

INSERT INTO Permisos (NombrePermiso, Descripcion) VALUES 
('ADMINISTRADOR', 'Acceso a todo');

-- Creación de la tabla 'Usuario_Rol' (tabla de unión entre 'Usuarios' y 'Roles') con ID autoincremental
CREATE TABLE Usuario_Rol (
  IdUsuario_Rol INT AUTO_INCREMENT PRIMARY KEY,
  IdUsuario INT,
  IdRol INT,
  FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario),
  FOREIGN KEY (IdRol) REFERENCES Roles(IdRol)
);

INSERT INTO Usuario_Rol (IdUsuario, IdRol) VALUES 
(1, 1);

-- Creación de la tabla 'Rol_Permiso' (tabla de unión entre 'Roles' y 'Permisos') con ID autoincremental
CREATE TABLE Rol_Permiso (
  IdRol_Permiso INT AUTO_INCREMENT PRIMARY KEY,
  IdRol INT,
  IdPermiso INT,
  FOREIGN KEY (IdRol) REFERENCES Roles(IdRol),
  FOREIGN KEY (IdPermiso) REFERENCES Permisos(IdPermiso)
);

INSERT INTO Rol_Permiso (IdRol, IdPermiso) VALUES 
(1, 1);

INSERT INTO Categorias (Nombre) VALUES 
('DesayunoMerienda'),
('CafeteriaPanaderia'),
('Sandwiches'),
('Licuados'),
('Bebidas'),
('ParaPicar'),
('Pizzas'),
('HamburguesasSandwiches'),
('AlPlato');

-- Desayuno y Merienda (Categoría 1)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('CLASICO', 'Infusión + 2 Tortillas o Medialunas', 2100, 1, 0),
('LIGHT', 'Infusión + Tostadas de Pan Lactal + Mermelada + Queso crema + Jugo de Naranja + Yogurt con granola', 2900, 1, 0),
('EJECUTIVO', 'Infusión + Tostadas en Pan Lactal + Queso blanco + Mermelada + Jugo de Naranja', 2800, 1, 0),
('PROTEICO', 'Infusión + Tostadas en Pan Lactal Negro + Huevo revuelto + Jamón cocido + Queso crema + Jugo de Naranja', 3900, 1, 0),
('MAFALDA', 'Infusión + 2 Medialunas de Jamón y Queso + Jugo de Naranja', 4200, 1, 0),
('CONTINENTAL', 'Infusión + Pan de campo + manteca, dulce de leche o mermelada + Jugo de Naranja + Ensalada de Fruta', 3600, 1, 0),
('SALUDABLE', 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Jugo de Naranja', 2700, 1, 0),
('SUPER RUCA', 'Infusión + 1 Omelette + Jugo de Naranja', 5500, 1, 0),
('SIN TACC', 'Infusión + Galletas de Arroz + Mermelada + Queso Untable', 2700, 1, 0),
('DELICIA DE JAMON Y QUESO', 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + 2 rodajas de pan lactal negro', 3300, 1, 0),
('Vasito de yogurt o jugo chiquito', '', 1200, 1, 0),
('Vasito de yogurt con granola chiquito', '', 1400, 1, 0),
('Compotera de yogurt con granola', '', 2500, 1, 0),
('Proporcionado Queso / Mermelada / Dulce de Leche / Manteca', '', 1200, 1, 0);

-- Cafetería y Panadería (Categoría 2)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Café/Cortado', 'Café o Café con leche Chico', 1500, 2, 0),
('Café en jarrita', 'Café o Café con leche en Jarrita', 1600, 2, 0),
('Café con leche', 'Grande', 1800, 2, 0),
('Cortado doble', 'Doble ración de café', 1900, 2, 0),
('Macchiato', 'Café con espuma', 2000, 2, 0),
('Lágrima', 'Poco café y mucha leche', 1800, 2, 0),
('Cappuchino', 'Café con leche y mucha espuma con canela o chocolate', 2200, 2, 0),
('Té con Leche', '', 1800, 2, 0),
('Té', '', 1400, 2, 0),
('Mate cocido', '', 1400, 2, 0),
('Submarino', '', 2300, 2, 0),
('Tortilla', '', 600, 2, 0),
('Tostadas', 'Negra, negra con semilla, de campo, pan francés', 600, 2, 0),
('Medialunas', '', 600, 2, 0),
('Medialunas con jamón y queso', '', 1400, 2, 0),
('Croissant', '', 0, 2, 0),
('Croissant con jamón y queso', '', 0, 2, 0),
('Alfajores', '(Consultar variedad)', 0, 2, 0);

-- Sándwiches (Categoría 3)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('1/2 Jamón y Queso', '', 2200, 3, 0),
('Triple Jamón y Queso', '', 3400, 3, 0),
('Triple Jamón, Queso y Tomate', '', 3500, 3, 0),
('Triple de Ternera y Queso', '', 3900, 3, 0),
('Triple de Ternera, Queso y Tomate', '', 4100, 3, 0),
('Triple de Ternera + Lechuga y Tomate', '', 4300, 3, 0),
('Triple de Pollo, Lechuga y Tomate', '', 4200, 3, 0),
('Triple de Pollo, Queso y Tomate', '', 4400, 3, 0);

-- Licuados (Categoría 4)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Licuado Chocolate', 'Leche + Chocolate + Hielo', 2200, 4, 0),
('Licuado Simple (con leche o con agua)', 'Banana, frutilla, durazno, ananá, maracuyá', 2200, 4, 0),
('Licuado Especial con jugo de naranja', 'Frutilla, durazno, maracuyá', 2500, 4, 0),
('Frozzen Frutal (con leche o con agua)', 'Incluye mix de banana, frutilla, durazno, ananá, maracuyá', 2700, 4, 0);

-- Bebidas (Categoría 5)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Gaseosa línea Coca Cola 350ml', '', 1600, 5, 0),
('Gaseosa línea Coca Cola 1 litro', '', 2700, 5, 0),
('Agua Saborizada 500ml', '', 1700, 5, 0),
('Agua mineral con gas / sin gas', '', 1500, 5, 0),
('Jugo de naranja jarrita', '', 2200, 5, 0),
('Jugo de naranja 1 litro', '', 3300, 5, 0),
('Limonada jarrita', '', 2100, 5, 0),
('Limonada 1 litro', '', 3200, 5, 0),
('Cerveza en latas', '(Consultar variedad)', 2200, 5, 0),
('Quilmes 1 litro', '', 3300, 5, 0),
('Salta Negra 1 litro', '', 3500, 5, 0),
('Heineken 1 litro', '', 4700, 5, 0),
('Stella Artois 1 litro', '', 4700, 5, 0);

-- Para Picar (Categoría 6)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Empanadas de Carne o Pollo', '', 900, 6, 0),
('Porción de papas fritas', '', 3700, 6, 0),
('Porción de papas fritas con queso gratinado', '', 4700, 6, 0),
('Porción de papas fritas con queso gratinado y jamón', '', 5200, 6, 0),
('Picada Grande', '(Queso, Jamón cocido, Roquefort, Ternera, Aceitunas, Mila, Papas y Salame)', 18000, 6, 0);

-- Pizzas (Categoría 7)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Común / Muzzarella', 'Queso muzzarella + Aceitunas', 6200, 7, 3600),
('Especial', 'Queso muzzarella, Jamón cocido + Aceitunas y Morrones', 6500, 7, 3800),
('Fugazzeta', 'Queso muzzarella + Cebolla + Aceitunas', 6500, 7, 3900),
('Napolitana', 'Queso muzzarella + Tomate + Jamón cocido + Aceitunas y Morrones', 5700, 7, 3900),
('Ternera', 'Queso muzzarella + Ternera + Aceitunas y Morrones', 7700, 7, 4400),
('Calabresa', 'Queso muzzarella + Peperoni + Aceitunas', 7700, 7, 4400),
('Rúcula', 'Queso muzzarella + Rúcula + Tomate', 0, 7, 0);

-- Hamburguesas y Sándwiches (Categoría 8)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('HComún / Clásica', 'Con lechuga, tomate y aderezos', 4200, 8, 0),
('HSuper', 'Con Jamón, queso, lechuga, tomate y aderezos', 5100, 8, 0),
('HRuca', 'Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas', 5300, 8, 0),
('LComún / Clásica', 'Con lechuga, tomate y aderezos', 5600, 8, 0),
('LSuper', 'Con Jamón, queso, lechuga, tomate y aderezos', 6100, 8, 0),
('LRuca', 'Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas', 7000, 8, 0),
('SComún / Clásica', 'Con lechuga, tomate y aderezos', 4200, 8, 0),
('SSuper', 'Con Jamón, queso, lechuga, tomate y aderezos', 4700, 8, 0),
('SRuca', 'Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas', 5200, 8, 0);

-- Al plato (Categoría 9)
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Milanesa Común con papas o ensalada', 'lechuga y tomate', 7300, 9, 0),
('Milanesa Napolitana con papas o ensalada', 'lechuga y tomate', 7800, 9, 0),
('Milanesa a Caballo con papas o ensalada', 'lechuga y tomate', 7800, 9, 0),
('Milanesa a la Suiza con papas o ensalada', 'lechuga y tomate', 8200, 9, 0),
('Milanesa de pollo Común con papas o ensalada', 'lechuga y tomate', 7000, 9, 0),
('Milanesa de pollo Napolitana con papas o ensalada', 'lechuga y tomate', 7500, 9, 0),
('Milanesa de pollo a Caballo con papas o ensalada', 'lechuga y tomate', 7500, 9, 0),
('Milanesa de pollo a la Suiza con papas o ensalada','lechuga y tomate', 7900, 9, 0);
