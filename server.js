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
    //res.sendFile("/media/pawel/paweł/MAGISTERKA/BC/BrowserChat/SERVER/index.html");

    res.send("Hello World");
});

io.on("connection", function (socket) {
    socket.on("chat message", function (msg) {
        io.emit("chat message", msg);
    });
});

http.listen(8081, function () {

    console.log("Server listening at 8081");
});