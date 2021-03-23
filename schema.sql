DROP DATABASE IF EXISTS workforce_db;

CREATE DATABASE workforce_db;

CREATE TABLE departments (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DEC(100000,2),
    department_id INTEGER(11),
    PRIMARY KEY (id),
    FOREIGN KEY department_id REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    role_id INTEGER(11) NOT NULL,
    manager_id INTEGER(11),
    PRIMARY KEY (id),
    FOREIGN KEY role_id REFERENCES roles(id);
);