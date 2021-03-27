const cTable = require('console.table');

const fullEmployeeSearch = () => {
    const query = 'SELECT id, first_name, last_name, role_id, manager_id from workforce_db.employees';
    connection.query(query, (err, res) => {
        res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
          console.table(
            [{id: res.id,
             first_name: res.first_name,
             last_name: res.last_name,
             role_id: res.role_id,
             manager_id: res.manager_id}]
          );
        })
    })
};

module.exports = fullEmployeeSearch();