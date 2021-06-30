// Depends on mysql
const mysql = require('mysql');

const properties = {
    host : '34.126.172.116',
    user: 'root',
    password: 'fintechsglab',
    port: 3306,
    database: 'market',
};

let connection = mysql.createConnection(properties);

connection.connect((error) => {
  if (error) {
    console.error("Connection to MySQL failed! \n" + error);
  } else {
    console.log("Connected to MySQL!");
  }
});
// Ctrl + c to exit connection

module.exports = { // Exports the function (variable object in this case) for other files to import
    connection,
}

// connection.query(
//     `select * from products`, // mysql query in string format
//     (error, result) => {
//         if(error) {
//             console.error(error);
//         }
//         else {
//             console.log(result);
//         }
//     }
// );