// This file depends on database file, "importing" it here
const database = require('./database');
const express = require('express');

router = express.Router();

// API to replace function "get_all_products()" below
router.get('/products/all', (request, response) => {
    database.connection.query(
        `select * from products`, // mysql query in string format
        (error, result) => {
            if (error) {
                console.error(error);
                response.status(500).send('Some error occured at the Backend');

            }
            else {
                // console.log(result);
                response.status(200).send(result);
            }
        }
    );
});
// function get_all_products() {
//     database.connection.query(
//         `select * from products`, // mysql query in string format
//         (error, result) => {
//             if (error) {
//                 console.error(error);
//             }
//             else {
//                 console.log(result);
//             }
//         }
//     );
// }


// API to replace function "get_product_by_id(id)" below
router.get('/products/by-id', (request, response) => {
    database.connection.query(
        `select * from products where id = ${request.query.id}`, // mysql query in string format
        (error, result) => {
            if (error) {
                console.error(error);
                response.status(500).send('Some error occured at the Backend');

            }
            else {
                // console.log(result);
                response.status(200).send(result);
            }
        }
    );
});
// function get_product_by_id(id) {
//     database.connection.query(
//         `select * from products where id = ${id}`,
//         (error, result) => {
//             if (error) {
//                 console.error(error);
//             }
//             else {
//                 console.log(result);
//             }
//         }
//     );
// }


// API to replace function "create_new_product(name, price)" below, request value taken from 'body'
router.post("/products/add", (request, response) => {
  database.connection.query(
    `insert into products (name, market_price) values ('${request.body.name}', '${request.body.price}')`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.status(500).send("Some error occurred at the Backend.");
      } else {
        response.status(200).send("New product created successfully!");
      }
    }
  );
});
// function create_new_product(name, price) {
//     database.connection.query(
//         `insert into products (name, market_price) values ('${name}', '${price}')`,
//         (error, result) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log("Created successfully!");
//             }
//         }
//     );
// }


// API to replace function "delete_product_by_id(id)" below, request value taken from 'body'
router.delete("/products/delete/by-id", (request, response) => {
    database.connection.query(`delete from products where id = ${request.query.id}`,
        (error, result) => {
            if (error) {
                console.error(error);
                response.status(500).send("Some error occurred at the Backend.");
            }
            else {
                // console.log(`Deleted product id:${id} successfully!`);
                response.status(200).send("Deleted successfully!");
            }
        }
    );
});
// function delete_product_by_id(id) {
//     database.connection.query(`delete from products where id = ${id}`,
//         (error, result) => {
//             if (error) {
//                 console.error(error);
//             }
//             else {
//                 console.log(`Deleted product id:${id} successfully!`);
//             }
//         }
//     );
// }


// API to replace function "update_price_by_id(id, new_price)" below, request value taken from 'body'
router.put("/products/update/by-id", (request, response) => {
    database.connection.query(
        `update products set name = '${request.body.new_name}', market_price = ${request.body.new_price} where id = ${request.body.id}`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.status(500).send("Some error occurred at the Backend.");
        } else {
          response.status(200).send("Product updated successfully!");
        }
      }
    );
});
// function update_price_by_id(id, new_price) {
//     database.connection.query(
//       `update products set market_price = ${new_price} where id = ${id}`,
//       (error, result) => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log(`Updated price of product id:${id} successfully!`);
//         }
//       }
//     );
//   }

module.exports = { // Export the functions for other Javascript files to import
    // get_all_products,
    // get_product_by_id,
    // create_new_product,
    // delete_product_by_id,
    // update_price_by_id,
    router,
};