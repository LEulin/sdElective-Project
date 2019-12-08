var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

const Lealyn = {
    "id": 1,
    "name": "Lealyn Eulin",
    "Batch": "2020B",
    "monthPaid": {
        "January": true,
        "February": true,
        "March": true,
        "April": true,
        "May": true,
        "June": true,
        "July": true,
        "August": true,
        "September": true,
        "October": true,
        "November": true,
        "December": false
    }
}
const Faye = {
    "id": 1,
    "name": "Faye Erika Catalvas",
    "Batch": "2020B",
    "monthPaid": {
        "January": true,
        "February": true,
        "March": true,
        "April": true,
        "May": true,
        "June": true,
        "July": true,
        "August": true,
        "September": true,
        "October": true,
        "November": true,
        "December": false
    }
}
const Jericho = {
    "id": 1,
    "name": "Jericho James Villahermosa",
    "Batch": "2020B",
    "monthPaid": {
        "January": true,
        "February": true,
        "March": true,
        "April": true,
        "May": true,
        "June": true,
        "July": true,
        "August": true,
        "September": true,
        "October": true,
        "November": true,
        "December": false
    }
}

var users = [Lealyn,Faye,Jericho];
var online_users = [];



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/counterpartNotifier.html');
});

io.on('connection', function (socket) {
    socket.on('user login', function (msg) {
        io.emit('user login', msg);
        console.log(msg);
    });
});


app.use(express.static('public'));
http.listen(port, function () {
    console.log('listening on *:' + port);
});