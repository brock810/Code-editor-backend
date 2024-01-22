"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const http = require('http');
// Create an Express app
const express = require('express');
const app = express();
// Create an HTTP server using the Express app
const server = http.createServer(app);
// Create a Socket.IO server attached to the HTTP server
const io = new socket_io_1.Server(server);
// Listen for incoming socket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    // Handle events here...
    // Listen for socket disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
// Define the port for the server to listen on
const PORT = process.env.PORT || 3001;
// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
