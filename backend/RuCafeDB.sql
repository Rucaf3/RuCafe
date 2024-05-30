-- Crear la base de datos y usarla
CREATE DATABASE IF NOT EXISTS RucafeDB;
USE RucafeDB;

-- Creación de la tabla 'Categorias' con ID autoincremental
CREATE TABLE IF NOT EXISTS Categorias (
  IdCategoria INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(255) NOT NULL
);

-- Creación de la tabla 'Productos' con ID autoincremental
CREATE TABLE IF NOT EXISTS Productos (
  IdProducto INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(255) NOT NULL,
  Descripcion TEXT,
  Precio DECIMAL(10, 2),
  IdCategoria INT,
  Precio2 DECIMAL(10, 2),
  FOREIGN KEY (IdCategoria) REFERENCES Categorias(IdCategoria)
);

-- Creación de la tabla 'Usuarios' con ID autoincremental
CREATE TABLE IF NOT EXISTS Usuarios (
  IdUsuario INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(255) NOT NULL,
  CorreoElectronico VARCHAR(255) UNIQUE NOT NULL,
  Contraseña VARCHAR(255) NOT NULL
);

-- Creación de la tabla 'Roles' con ID autoincremental
CREATE TABLE IF NOT EXISTS Roles (
  IdRol INT AUTO_INCREMENT PRIMARY KEY,
  NombreRol VARCHAR(255) NOT NULL
);

-- Creación de la tabla 'Permisos' con ID autoincremental
CREATE TABLE IF NOT EXISTS Permisos (
  IdPermiso INT AUTO_INCREMENT PRIMARY KEY,
  NombrePermiso VARCHAR(255) NOT NULL,
  Descripcion VARCHAR(255)
);

-- Creación de la tabla 'Usuario_Rol' (tabla de unión entre 'Usuarios' y 'Roles') con ID autoincremental
CREATE TABLE IF NOT EXISTS Usuario_Rol (
  IdUsuario_Rol INT AUTO_INCREMENT PRIMARY KEY,
  IdUsuario INT,
  IdRol INT,
  FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario),
  FOREIGN KEY (IdRol) REFERENCES Roles(IdRol)
);

-- Creación de la tabla 'Rol_Permiso' (tabla de unión entre 'Roles' y 'Permisos') con ID autoincremental
CREATE TABLE IF NOT EXISTS Rol_Permiso (
  IdRol_Permiso INT AUTO_INCREMENT PRIMARY KEY,
  IdRol INT,
  IdPermiso INT,
  FOREIGN KEY (IdRol) REFERENCES Roles(IdRol),
  FOREIGN KEY (IdPermiso) REFERENCES Permisos(IdPermiso)
);

-- Insertar datos en la tabla 'Usuarios'
INSERT INTO Usuarios (Nombre, CorreoElectronico, Contraseña) VALUES 
('RuCafe', 'rucafemenu@gmail.com', 'admin');

-- Insertar datos en la tabla 'Roles'
INSERT INTO Roles (NombreRol) VALUES 
('Administrador');

-- Insertar datos en la tabla 'Permisos'
INSERT INTO Permisos (NombrePermiso, Descripcion) VALUES 
('Administrador', 'Acceso a todo');

-- Insertar datos en la tabla 'Usuario_Rol'
INSERT INTO Usuario_Rol (IdUsuario, IdRol) VALUES 
(1, 1);

-- Insertar datos en la tabla 'Rol_Permiso'
INSERT INTO Rol_Permiso (IdRol, IdPermiso) VALUES 
(1, 1);

-- Insertar datos en la tabla 'Categorias'
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

-- Insertar datos en la tabla 'Productos' para la categoría 'DesayunoMerienda'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('CLASICO', 'Infusión + 2 Tortillas o Medialunas', 1900, 1, 0),
('LIGHT', 'Infusión + Tostadas de Pan Lactal + Mermelada + Queso crema + Jugo de Naranja + Yogurt con granola', 2700, 1, 0),
('EJECUTIVO', 'Infusión + Tostadas en Pan Lactal + Queso blanco + Mermelada + Jugo de Naranja', 2600, 1, 0),
('PROTEICO', 'Infusión + Tostadas en Pan Lactal Negro + Huevo revuelto + Jamón cocido + Queso crema + Jugo de Naranja', 3600, 1, 0),
('MAFALDA', 'Infusión + 2 Medialunas de Jamón y Queso + Jugo de Naranja', 3900, 1, 0),
('CONTINENTAL', 'Infusión + Pan de campo + manteca, dulce de leche o mermelada + Jugo de Naranja + Ensalada de Fruta', 3300, 1, 0),
('SALUDABLE', 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + Jugo de Naranja', 2500, 1, 0),
('SUPER RUCA', 'Infusión + 1 Omelette + Jugo de Naranja', 5000, 1, 0),
('SIN TACC', 'Infusión + Galletas de Arroz + Mermelada + Queso Untable', 2500, 1, 0),
('DELICIA DE JAMON Y QUESO', 'Infusión + 2 Fetas de Queso + 2 Fetas de Jamón + 2 rodajas de pan lactal negro', 3000, 1, 0),
('Vasito de yogurt o jugo chiquito', '', 1000, 1, 0),
('Vasito de yogurt con granola chiquito', '', 1100, 1, 0),
('Compotera de yogurt con granola', '', 2000, 1, 0),
('Proporcionado Queso / Mermelada', '', 1000, 1, 0);

-- Insertar datos en la tabla 'Productos' para la categoría 'CafeteriaPanaderia'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Café/Cortado', 'Café o Café con leche Chico', 1300, 2, 0),
('Café en jarrita', 'Café o Café con leche en Jarrita', 1400, 2, 0),
('Café con leche', 'Grande', 1400, 2, 0),
('Cortado doble', 'Doble ración de café', 1600, 2, 0),
('Macchiato', 'Café con espuma', 1800, 2, 0),
('Lágrima', 'Poco café y mucha leche', 1600, 2, 0),
('Cappuchino', 'Café con leche y mucha espuma con canela o chocolate', 2100, 2, 0),
('Té con Leche', '', 1600, 2, 0),
('Té', '', 1300, 2, 0),
('Mate cocido', '', 1300, 2, 0),
('Submarino', '', 2100, 2, 0),
('Tortilla', '', 600, 2, 0),
('Tostadas', 'Negra, negra con semilla, de campo, pan francés', 600, 2, 0),
('Medialunas', '', 2100, 2, 0),
('Medialunas con jamón y queso', '', 1400, 2, 0),
('Croissant', '', 2100, 2, 0),
('Croissant con jamón y queso', '', 2100, 2, 0),
('Alfajores', '(Consultar variedad)', 2100, 2, 0);

-- Insertar datos en la tabla 'Productos' para la categoría 'Sandwiches'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('1/2 Jamón y Queso', '', 1900, 3, 0),
('Triple Jamón y Queso', '', 3000, 3, 0),
('Triple Jamón, Queso y Tomate', '', 3200, 3, 0),
('Triple de Ternera y Queso', '', 3600, 3, 0),
('Triple de Ternera, Queso y Tomate', '', 3600, 3, 0),
('Triple de Ternera + Lechuga y Tomate', '', 3800, 3, 0),
('Triple de Pollo, Lechuga y Tomate', '', 4600, 3, 0),
('Triple de Pollo, Queso y Tomate', '', 3800, 3, 0);

-- Insertar datos en la tabla 'Productos' para la categoría 'Licuados'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Licuado Chocolate', 'Leche + Chocolate + Hielo', 2000, 4, 0),
('Licuado Simple (con leche o con agua)', 'Banana, frutilla, durazno, ananá, maracuyá', 1900, 4, 0),
('Licuado Combinado', 'Banana y frutilla / Banana y durazno / Frutilla y durazno / Ananá y maracuyá', 2500, 4, 0);

-- Insertar datos en la tabla 'Productos' para la categoría 'Bebidas'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Gaseosa línea Coca Cola 500ml', '', 1800, 5, 0),
('Gaseosa línea Coca Cola 1 litro', '', 2500, 5, 0),
('Agua Saborizada 500ml', '', 1500, 5, 0),
('Agua mineral con gas / sin gas', '', 1300, 5, 0),
('Jugo de naranja jarrita', '', 2000, 5, 0),
('Jugo de naranja 1 litro', '', 3100, 5, 0),
('Limonada jarrita', '', 1900, 5, 0),
('Limonada 1 litro', '', 3000, 5, 0),
('Cerveza en latas', '(Consultar variedad)', 2000, 5, 0),
('Quilmes 1 litro', '', 3100, 5, 0),
('Salta Negra 1 litro', '', 3300, 5, 0),
('Heineken 1 litro', '', 4500, 5, 0),
('Stella Artois 1 litro', '', 4500, 5, 0);

-- Insertar datos en la tabla 'Productos' para la categoría 'ParaPicar'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Empanadas de Carne o Pollo', '', 800, 6, 0),
('Porción de papas fritas', '', 3500, 6, 0),
('Porción de papas fritas con queso gratinado', '', 4500, 6, 0),
('Porción de papas fritas con queso gratinado y jamón', '', 5000, 6, 0),
('Picada Grande', '(Queso, Jamón cocido, Roquefort, Ternera, Aceitunas, Mila, Papas y Salame)', 17000, 6, 0);

-- Insertar datos en la tabla 'Productos' para la categoría 'Pizzas'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Común / Muzzarella', 'Queso muzzarella + Aceitunas', 6000, 7, 3400),
('Especial', 'Queso muzzarella, Jamón cocido + Aceitunas y Morrones', 6300, 7, 3600),
('Fugazzeta', 'Queso muzzarella + Cebolla + Aceitunas', 6300, 7, 3600),
('Napolitana', 'Queso muzzarella + Tomate + Jamón cocido + Aceitunas y Morrones', 5500, 7, 3700),
('Ternera', 'Queso muzzarella + Ternera + Aceitunas y Morrones', 7500, 7, 4200),
('Calabresa', 'Queso muzzarella + Peperoni + Aceitunas', 7500, 7, 4200),
('Rúcula', 'Queso muzzarella + Rúcula + Tomate', 1400, 7, 0);

-- Insertar datos en la tabla 'Productos' para la categoría 'HamburguesasSandwiches'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('HComún / Clásica', 'Con lechuga, tomate y aderezos', 4000, 8, 0),
('HSuper', 'Con Jamón, queso, lechuga, tomate y aderezos', 4900, 8, 0),
('HRuca', 'Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas', 5100, 8, 0),
('LComún / Clásica', 'Con lechuga, tomate y aderezos', 5400, 8, 0),
('LSuper', 'Con Jamón, queso, lechuga, tomate y aderezos', 5900, 8, 0),
('LRuca', 'Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas', 6800, 8, 0),
('SComún / Clásica', 'Con lechuga, tomate y aderezos', 4000, 8, 0),
('SSuper', 'Con Jamón, queso, lechuga, tomate y aderezos', 4500, 8, 0),
('SRuca', 'Con Huevo, jamón, queso, lechuga, tomate y aderezos + Papas Fritas', 5000, 8, 0);

-- Insertar datos en la tabla 'Productos' para la categoría 'AlPlato'
INSERT INTO Productos (Nombre, Descripcion, Precio, IdCategoria, Precio2) VALUES 
('Milanesa Común con papas o ensalada', 'lechuga y tomate', 7000, 9, 0),
('Milanesa Napolitana con papas o ensalada ', 'lechuga y tomate', 7500, 9, 0),
('Milanesa a Caballo con papas o ensalada ', 'lechuga y tomate', 7500, 9, 0),
('Milanesa a la Suiza con papas o ensalada ', 'lechuga y tomate', 7900, 9, 0),
('Milanesa de pollo Común con papas o ensalada', 'lechuga y tomate', 1900, 9, 0),
('Milanesa de pollo Napolitana con papas o ensalada ', 'lechuga y tomate', 1900, 9, 0),
('Milanesa de pollo a Caballo con papas o ensalada ', 'lechuga y tomate', 1900, 9, 0);

-- Ver productos insertados
SELECT * FROM Productos;

-- Ver categorías insertadas
SELECT * FROM Categorias;
