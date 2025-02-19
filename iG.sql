 create database instagram;
 use instagram;
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    created_at date
);

INSERT INTO users (name, email, password,created_at) VALUES
('Mike', 'mike@gmail.com', 'pash52e3','2025-04-02'),
('Carlos', 'Carlos@gmail.com', 'sdkfks456','2024-01-01'),
('henry', 'henry@gmail.com', 'lmaoobroo','2023-04-04'),
('Peter', 'peter@gmail.com', 'yeeeyyyy','2022-04-02'),
('Rollins', 'rollins@gmail.com', 'rollins637gh','2021-04-02');

select *from users where created_at > '2024-01-01';
