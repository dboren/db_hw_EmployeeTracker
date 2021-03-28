const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
require('dotenv').config();

// const fullEmployeeSearch = require('./funct/fullsearch');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',

    password: process.env.DB_PASS,
    database: 'workforce_db',
    // insecureAuth: true
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    init();
  });

  const init = () => {
    inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'Welcome to Workforce Manager. What would you like to do?',
      choices: [
        'View all employees',
        'View employees by department',
        'View employees by role',
        'View all departments',
        'View all roles',
        'Update employee role',
        'Add employee',
        'Remove employee',
        'Add role',
        'Add department',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all employees':
          fullEmployeeSearch();
          break;

        case 'View employees by department':
          deptEmployeeSearch();
          break;

        case 'View employees by role':
          roleEmployeeSearch();
          break;

        case 'View all departments':
          viewDepts();
          break;

        case 'View all roles':
          viewRoles();
          break;

        case 'Update employee role':
          updateRole();
          break;

        case 'Add employee':
          addEmployee();
          break;

        case 'Remove employee':
          removeEmployee();
          break;
            
        case 'Add role':
          addRole();
          break;

        case 'Add department':
          addDepartment();
          break;

        case 'Exit':
          connection.end();
          break;  

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};


const fullEmployeeSearch = () => {
  const query = 'SELECT id, first_name, last_name, role_id, manager_id from workforce_db.employees';
  connection.query(query, (err, res) => {
      res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
          console.log(
            `id: ${id} || first_name: ${first_name} || last_name: ${last_name} || role_id: ${role_id} || manager_id: ${manager_id}`
          );
      })
  })
};

const viewDepts = () => {
  const query = 'SELECT id, name from workforce_db.departments';
  connection.query(query, (err, res) => {
      res.forEach(({ id, name}) => {
          console.log(
            `id: ${id} || name: ${name}}`
          );
      })
  })
};

const viewRoles = () => {
  const query = 'SELECT id, title, salary, department_id from workforce_db.roles';
  connection.query(query, (err, res) => {
      res.forEach(({ id, title, salary, department_id}) => {
          console.log(
            `id: ${id} || title: ${title} || salary: ${salary} || department_id: ${department_id}}`
          );
      })
  })
};

// const roleEmployeeSearch = () => {
//   inquirer
//     .prompt({
//       name: 'roles',
//       type: 'input',
//       message: 'What role would you like to view?',
//     })
//     .then((answer) => {
//       let query = 
//         'SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, empoloyees.manager_id ';
//       query +=
//         'FROM workforce_db.employees LEFT JOIN workforce_db.roles ON employees.role_id = roles.id';
//       connection.query(query, [answer.roles, answer.roles], (err, res) => {
//         console.log('answer.roles', answer.roles);
//         res.forEach(({ id, first_name, last_name, title, role_id, manager_id }) => {
//           console.log(

//             `id: ${id} || first_name: ${first_name} || last_name: ${last_name} || title ${title} || role_id: ${role_id} || manager_id: ${manager_id}}`
//           );
//         });

//       })
//     });
//   };
      

const addRole = () => {
  inquirer
  .prompt({
    name: 'newrole',
    type: 'input',
    message: 'What is the title of this new role?',
  },
  {name: 'dept',
  type: 'input',
  message: 'What department is this role part of?',
})
};

const addDepartment = () => {
  inquirer
  .prompt({
    name: 'newdept',
    type: 'input',
    message: 'What will this new department be called?',
  })
  .then((answer) => {
    connection.query(
      'INSERT INTO workforce_db.departments SET?',
      {
        name: answer.newdept,
      },
      (err) => {
        if (err) throw err;
        console.log('Department added');
        console.log(answer);
    })
  })
};