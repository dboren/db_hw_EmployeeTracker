USE workforce_db;

INSERT INTO departments (id, name) VALUES 
(1, "customer service"),
(2, "admin"),
(3, "sales"),
(4, "marketing"),
(5, "hr");


INSERT INTO roles (id, title, salary)
VALUES (1, "csa", 30000);

INSERT INTO roles (id, title, salary)
VALUES (2, "csm", 35000);

INSERT INTO roles (id, title, salary)
VALUES (3, "CEO", 50000);

INSERT INTO roles (id, title, salary)
VALUES (4, "salesperson", 31000);

INSERT INTO roles (id, title, salary)
VALUES (5, "sales manager", 36000);

INSERT INTO roles (id, title, salary)
VALUES (6, "marketing director", 37000);

INSERT INTO roles (id, title, salary)
VALUES (7, "designer", 32000);

INSERT INTO roles (id, title, salary)
VALUES (8, "HR mananger", 38000);

INSERT INTO roles (id, title, salary)
VALUES (9, "HR specialist", 33000);


INSERT INTO employees (id, first_name, last_name)
VALUES (1, "Rusty", "Shackelford");

INSERT INTO employees (id, first_name, last_name)
VALUES (2, "Michael", "Hansen");

INSERT INTO employees (id, first_name, last_name)
VALUES (3, "Gemma", "Ray");

INSERT INTO employees (id, first_name, last_name)
VALUES (4, "Isaac", "Giorno");

INSERT INTO employees (id, first_name, last_name)
VALUES (5, "Joseph", "Shabadoo");

INSERT INTO employees (id, first_name, last_name)
VALUES (6, "Lola", "Swinton");

INSERT INTO employees (id, first_name, last_name)
VALUES (7, "Klaus", "Rooney");

INSERT INTO employees (id, first_name, last_name)
VALUES (8, "Terri", "Visitor");

INSERT INTO employees (id, first_name, last_name)
VALUES (9, "Edward", "Guy");

INSERT INTO employees (id, first_name, last_name)
VALUES (10, "Boris", "Sisko");