const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'angular_ecommerce_app',
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL is connected...");
});

module.exports = connection;
