'use strict'

// Connecting dependencies
const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io')(server);

const { v4: uuidV4 } = require('uuid');

const serverPort = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/${uuidV4()}')
});

server.listen(serverPort);

