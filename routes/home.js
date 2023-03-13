const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing"
    message: "The app is working properly!",
  });
});

module.exports = router;

// // new below ver 1
var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('../home.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}
