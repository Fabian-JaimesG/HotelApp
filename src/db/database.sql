CREATE DATABASE HotelDB;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    email TEXT,
    gender VARCHAR(1),
    TaxId VARCHAR(10)
);

INSERT INTO users(first_name,last_name,email,gender,TaxId) VALUES
    ('Flossy', 'Dyball', 'fdyball0@google.es', 'F', 5933327508),
    ('Justis', 'Spadoni', 'jspadoni1@ed.gov', 'M', 1204576800),
    ('Daniela', 'Dunlea', 'ddunlea2@edublogs.org', 'F', 8073198461),
    ('Kaylyn', 'Barstock', 'kbarstock3@sohu.com', 'F', 3906763257),
    ('Emmey', 'Heathcote', 'eheathcote4@icio.us', 'F', 1042117947),
    ('Mohandis', 'Beddows', 'mbeddows5@blog.com', 'M', 7849570890),
    ('Lynn', 'Hallt', 'lhallt6@virginia.edu', 'M', 6122266008),
    ('Emmy', 'Keaysell', 'ekeaysell7@ustream.tv', 'F', 7864214243),
    ('Chas', 'Burnet', 'cburnet8@nasa.gov', 'M', 1826955894),
    ('Melessa', 'Tales', 'mtales9@unc.edu', 'F', 4519574358);

-- CREATE TABLE Disponibilidad (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     habitacion_id INT,
--     fecha DATE NOT NULL,
--     disponible BOOLEAN NOT NULL,
--     FOREIGN KEY (habitacion_id) REFERENCES Habitaciones(id)
-- );

-- CREATE TABLE Habitaciones (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     numero_habitacion INT NOT NULL UNIQUE,
--     tipo VARCHAR(255) NOT NULL,
--     numero_camas INT NOT NULL,
--     descripcion TEXT,
--     precio DECIMAL(10,2) NOT NULL
-- );

-- CREATE TABLE Reservas (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     habitacion_id INT,
--     fecha_inicio DATE NOT NULL,
--     fecha_salida DATE NOT NULL,
--     FOREIGN KEY (habitacion_id) REFERENCES Habitaciones(id)
-- );
