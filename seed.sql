USE workforce_db;

INSERT INTO departments (id, name) VALUES 
(1, "customer service"),
(2, "admin"),
(3, "sales"),
(4, "marketing"),
(5, "hr");


INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "csa", 30000, 1);

INSERT INTO roles (id, title, salary, department_id)
VALUES (2, "csm", 35000, 1);

INSERT INTO roles (id, title, salary, department_id)
VALUES (3, "CEO", 50000, 2);

INSERT INTO roles (id, title, salary, department_id)
VALUES (4, "salesperson", 31000, 3);

INSERT INTO roles (id, title, salary, department_id)
VALUES (5, "sales manager", 36000, 3);

INSERT INTO roles (id, title, salary, department_id)
VALUES (6, "marketing director", 37000, 4);

INSERT INTO roles (id, title, salary, department_id)
VALUES (7, "designer", 32000, 4);

INSERT INTO roles (id, title, salary, department_id)
VALUES (8, "HR mananger", 38000, 5);

INSERT INTO roles (id, title, salary, department_id)
VALUES (9, "HR specialist", 33000, 5);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Rusty", "Shackelford", 1, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Michael", "Hansen", 1, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Gemma", "Ray", 2, 3);

INSERT INTO employees (id, first_name, last_name, role_id)
VALUES (4, "Isaac", "Giorno", 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Joseph", "Shabadoo", 4, 7);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Lola", "Swinton", 4, 7);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Klaus", "Rooney", 5, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Terri", "Visitor", 7, 9);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Edward", "Guy", 6, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Boris", "Sisko", 8, 4);