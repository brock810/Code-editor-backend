"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    console.log('A user connected');
    // Handle events here...
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
