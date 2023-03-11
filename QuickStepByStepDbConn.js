var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8604816",
  password: "6iVgAJeANA",
  database: "sql8604816",
  port: 3306
});

////Test db connection
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
