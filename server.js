var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// Global lib
var express = require("express"),
    app = express();

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

server.listen(server_port, server_ip_address, function () {
    console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});