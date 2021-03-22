DROP DATABASE IF EXISTS workforce_db;

CREATE DATABASE workforce_db;

CREATE TABLE department (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DEC(10000,2),
    department_id INTEGER(11),
    PRIMARY KEY (id),
    FOREIGN KEY department_id REFERENCES department(id)
);

