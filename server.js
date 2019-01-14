var express = require("express");

var app = express();

app.get('/', function (req, res) {
    res.send("Welcome!");
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Server is listening at: %s on port %s", host, port);

});