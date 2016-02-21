// Global lib
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    router = express.Router(),
    fs = require("fs");

// Database
var mongo = require("mongodb"),
    monk = require("monk"),
    db = monk("localhost:27017/pejaneczek");

//socket.io
var app = require("express")(),
    http = require("http").Server(app),
    io = require("socket.io")(http);

app.get("/chatRoomAll", function (req, res) {
    res.sendFile("/media/pawel/paweł/MAGISTERKA/BC/BrowserChat/SERVER/index.html");
});

io.on("connection", function (socket) {
    socket.on("chat message", function (msg) {
        io.emit("chat message", msg);
    });
});

http.listen(8081, function () {

    console.log("Server listening at 8081");
});
//
//// Body Parser
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
//    "extended": false
//}));
//
//router.get("/chatRoomAll", function (request, response) {
//    response.sendFile("/media/pawel/paweł/MAGISTERKA/BC/BrowserChat/SERVER/index.html");
//});
//
//// Route
//// lista uzytkowników
//router.get("/userlist", function (req, res) {
//    var collection = db.get("pejaneczek");
//
//    collection.find({}, {}, function (e, docs) {
//        res.json(docs);
//    });
//});
//
//app.use("/", router);
//
//// Server
//var server = app.listen(8081, function () {
//
//    var host = server.address().address;
//    var port = server.address().port;
//
//    console.log("Listening at http://%s:%s", host, port);
//
//});