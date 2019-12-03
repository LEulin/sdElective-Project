var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

var list_users = {};

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        io.emit('message', msg);
        console.log(msg)
    });
});


http.listen(port, function () {
    console.log('listening on *:' + port);
});

var numUsers = 0;

io.on('connection', (socket) => {
    console.log("New Student is conected!");

    socket.id = 11;

    socket.on('change_username', (data) => {
        socket.username = data.username
        if (!list_users.hasOwnProperty(data)) {
            socket.username = data.username;
            list_users[socket.username] = { online: true };
            console.log('a user connected ' + socket.username);
            io.sockets.emit('change_username', list_users);
            console.log(socket.username)
            console.log(list_users);
        }
    })







});
