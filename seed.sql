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


INSERT INTO departments (name)
VALUES ("customer service", "admin", "sales", "marketing", "hr");


INSERT INTO roles (title, salary)
VALUES ("csa", 30000);

INSERT INTO roles (title, salary)
VALUES ("csm", 35000);

INSERT INTO roles (title, salary)
VALUES ("CEO", 50000);

INSERT INTO roles (title, salary)
VALUES ("salesperson", 31000);

INSERT INTO roles (title, salary)
VALUES ("sales manager", 36000);

INSERT INTO roles (title, salary)
VALUES ("marketing director", 37000);

INSERT INTO roles (title, salary)
VALUES ("designer", 32000);

INSERT INTO roles (title, salary)
VALUES ("HR mananger", 38000);

INSERT INTO roles (title, salary)
VALUES ("HR specialist", 33000);


INSERT INTO employees (first_name, last_name,)
VALUES ("Rusty", "Shackelford");

INSERT INTO employees (first_name, last_name,)
VALUES ("Michael", "Hansen");

INSERT INTO employees (first_name, last_name,)
VALUES ("Gemma", "Ray");

INSERT INTO employees (first_name, last_name,)
VALUES ("Isaac", "Giorno");

INSERT INTO employees (first_name, last_name,)
VALUES ("Joseph", "Shabadoo");

INSERT INTO employees (first_name, last_name,)
VALUES ("Lola", "Swinton");

INSERT INTO employees (first_name, last_name,)
VALUES ("Klaus", "Rooney");

INSERT INTO employees (first_name, last_name,)
VALUES ("Terri", "Visitor");

INSERT INTO employees (first_name, last_name,)
VALUES ("Edward", "Guy");

INSERT INTO employees (first_name, last_name,)
VALUES ("Boris", "Sisko");