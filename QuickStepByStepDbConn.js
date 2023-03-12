var mysql = require('mysql');

// 2nd part - 2 lines
var http = require('http');
var fs = require('fs');

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

http.createServer(onRequest).listen(8000);
