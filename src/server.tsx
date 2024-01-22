const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

const server = http.createServer(app);
const io = new Server(server);

// Listen for incoming socket connections
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for incoming messages
  socket.on('message', (message) => {
    console.log(`Received message from ${socket.id}: ${message}`);
    // Broadcast the message to all connected clients
    io.emit('message', message);
  });

  // Listen for socket disconnection
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
