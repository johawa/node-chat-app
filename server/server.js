const socketIO = require('socket.io');
const http = require('http'); //build in Node
const path = require('path'); //build in Node
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app); // made up to use socket.io
var io = socketIO(server);


app.use(express.static(publicPath));


//Set up Eventlistener for Socket.io for Serverside
io.on('connection', (socket) => {
    console.log('New user connected');

    //Set up disconnect Eventlistener for Serverside
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});