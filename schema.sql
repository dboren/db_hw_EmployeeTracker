DROP DATABASE IF EXISTS workforce_db;

CREATE DATABASE workforce_db;

USE workforce_db;

CREATE TABLE departments (
    id INT(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DEC(65,2),
    department_id INTEGER(11),
    PRIMARY KEY (id),
    INDEX par_ind (department_id),
    CONSTRAINT fk_departments FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE employees (
    id INT(11) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    role_id INT(11),
    manager_id INT(11),
    PRIMARY KEY (id),
    INDEX par_ind (role_id),
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);