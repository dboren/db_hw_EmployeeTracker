const mysql = require("mysql");
const inquirer = require("inquirer");
const consoletable = require("console.table");
require("dotenv").config();

// const fullEmployeeSearch = require('./funct/fullsearch');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',

    password: 'Cheliax541',
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
        'view employees by department',
        'View employees by role',
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

        case 'view employees by department':
          deptEmployeeSearch();
          break;

        case 'View employees by role':
          roleEmployeeSearch();
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

// const deptEmployeeSearch = () => {
//   inquirer
//     .prompt({
//       name: 'dept',
//       type: 'input',
//       message: 'What department would you like to view?',
//     })
//     .then((answer) => {
//       const query = 'SELECT id, first_name, last_name, role_id, manager_id: FROM workforce_db.employees WHERE ?';
//       connection.query(query, { department: answer.department }, (err, res) => {
//         res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
//           console.log(
//             `id: ${id} || first_name: ${first_name} || last_name: ${last_name} || role_id: ${role_id} || manager_id: ${manager_id}`
//           );
//         });

//       });
//     });
// };

// const addRole = () => {
//   inquirer
//   .prompt({
//     name: 'newrole',
//     type: 'input',
//     message: 'What is the title of this new role?',
//   },
//   {name: 'dept',
//   type: 'input',
//   message: 'What department is this role part of?',
// })
// };

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
        name: answer,
      },
      (err) => {
        if (err) throw err;
        console.log('Department added');
        console.log(answer);
    })
  })
};