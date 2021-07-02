// Depends on product file, "importing"
const product = require('./product');

const express = require('express');
// const { response } = require('express');

/* Since Express does not handle all formats (some data formats in Postman->Body),
    it will require outside handling*/
// const body_parser = require("body-parser");
server = express();
// server.use(body_parser.json()); // Depreciated function for parsing json
server.use(express.json()); // Latest function for parsing json

// router = express.Router();
// router.get('/welcome', (request, response) => {
//     response.send('Welcome to DevToolkit#2'); // By default is ".status(200)"
//     // response.status(200).send('Welcome to DevToolkit#3'); // Equivalent to above
//     // response.status(404).send('URL not found!');
//     // response.status(403).send('Forbidden request!');
// });
// server.use(router);

server.use(product.router);

server.listen(3000, () => {
    console.log('Server is runnning!');
});

// product.get_all_products();
// product.get_product_by_id(3);

// product.create_new_product("ipad", "1000");
// product.delete_product_by_id(9);
// product.update_price_by_id(10, 1500);
// product.get_all_products();
