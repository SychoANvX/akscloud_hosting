//AKSCLOUD_Hosting version 1.0.0//

//Connection to the web using express
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`akscloud_hosting is active at http://localhost:${port}`)
});

//create a database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'userdefines',
    password: 'userdefines ',
    database: 'AKSCLOUD_Hosting'
});

//create a table in mysql
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    connection.query (sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    }
    );
}); 


