const mysql = require("mysql");
const inquirer = require("inquirer");
const consoletable = require("console.table");
require("dotenv").config();

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
        'View employees by manager',
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

        case 'View employees by manager':
          mgrEmployeeSearch();
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
