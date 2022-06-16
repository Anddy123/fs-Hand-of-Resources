-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS fishes CASCADE;
DROP TABLE IF EXISTS cats CASCADE;
DROP TABLE IF EXISTS dogs CASCADE;
DROP TABLE IF EXISTS games CASCADE;

CREATE TABLE fishes (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    weight INTEGER NOT NULL
);

CREATE TABLE cats (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE dogs (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE games (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL
);

INSERT INTO fishes (name, color, weight) VALUES 
('Nemo', 'Blue', 10),
('Dory', 'Green', 20),
('Marlin', 'Orange', 30);

INSERT INTO cats (name, color, type) VALUES
('Garfield', 'Orange', 'Tiger'),
('Felix', 'Black', 'Cat'),
('Tom', 'White', 'Cat');

INSERT INTO dogs (name, color, type) VALUES
('Rex', 'Black', 'Dog'),
('Spot', 'White', 'Dog'),
('Scooby Doo', 'Black', 'Dog');

INSERT INTO games (name, genre, price) VALUES
('Super Mario', 'Platformer', 50),
('Pokemon', 'RPG', 100),
('Call of Duty', 'Shooter', 150);
