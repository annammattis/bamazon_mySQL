var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'bamazon_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  start();
});

function start() {
  inquirer
    .prompt({
      name: "buy",
      type: "confirm",
      message: "Would you like to purchase something off of bamazon?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.buy === "YES") {
        productID();
        unitsOfProduct();
      }
      else if(answer.buy === "NO") {
        connection.end();
      }
    });
}

function productID() {
  inquirer
    .prompt({
      /* Pass your questions in here */
      // The first should ask them the ID of the product they would like to buy.
      name: "item_id",
      type: "number",
      message: "What is the ID of the product you would like to purchase?"
    },
    {
      name: "quantity",
      type: "number",
      message: "How many units of the product would you like to purchase?"
    })
    .then(answers => {
      // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
      var query = "SELECT stock_quantity FROM products WHERE ?";
      connection.query(query, { item_id: answer.item_id }, function (err, res) {
        if (err) throw err; 
        console.log(res);
        // if (res > 0) {
        //   unitsOfProduct();
        // }
          // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
        // productID();
      // However, if your store does have enough of the product, you should fulfill the customer's order.
      // This means updating the SQL database to reflect the remaining quantity.

      //create a function that targets the item_id that was selected and subract from the quantity of that product
      function selectedItem(item_id) {
        query = "SELECT * FROM products WHERE item_id ?";
        connection.query(query, { item_id: answer.item_id }, function (err, res))
      }

          // Once the update goes through, show the customer the total cost of their purchase.
          connection.end();
      });
    }


// function unitsOfProduct() {
//         inquirer
//           .prompt({
//             /* Pass your questions in here */
//             // The second message should ask how many units of the product they would like to buy

//           })
//           .then(answers => {
//             // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
//             var query = "SELECT stock_quantity FROM products WHERE ?";
//             connection.query(query, { stock_quantity: answer.stock_quantity }, function (err, res) {
//               if (err) throw err;
//               for (var i = 0; i < res.length; i++) {
//                 console.log("Left in Stock " + res[i].stock_quantity);
//                 // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

//               } if (stock_quantity === 0) {
//                 console.log("Insufficiant answer");
//               }

//       // However, if your store does have enough of the product, you should fulfill the customer's order.
//       // This means updating the SQL database to reflect the remaining quantity.

//       ????????

//                 // Once the update goes through, show the customer the total cost of their purchase.
//                 function cost() {
//                   if (var i = 0; i < stock_quantity.length + price; i++) {
//               console.log(cost);
//             }
//           },
