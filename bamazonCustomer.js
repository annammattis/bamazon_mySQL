var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
    start();
});

function start() {
    inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
    });
}

 
connection.end();