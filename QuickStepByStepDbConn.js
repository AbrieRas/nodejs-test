var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8604816",
  password: "6iVgAJeANA",
  database: "sql8604816",
  port: 3306
});

////Test db connection - OLD
//con.connect(function(err) {
//  if (err) throw err;
//  console.log("Connected!");
//});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM StepByStepTable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


// // new below ver 1
var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./home.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

// http.createServer(onRequest).listen(8000);


// new below - ver 3

// const http = require('http');
// const fs = require('fs');

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     const html = fs.readFileSync('./home.html');
//     res.end(html);
// }).listen(3000, () => {
//     console.log('running on 3000');
// });


// new below - ver 2

// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
