'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const server = new Server(PORT);

// creating namespace
const caps = server.of('/caps');

// connect to server
server.on('connection', (socket) => {
  console.log('Socket connected to Event Server', socket.id);

});

caps.on('connection', (socket) => {
  console.log('Socket connected to caps namespace', socket.id);

  socket.on('JOIN', (room) => {
    console.log(`You have entered the ${room} room`);
  });

  socket.on('PICKUP', (payload) => {
    eventLogger('PICKUP', payload);
    caps.emit('PICKUP', payload);

  });

  socket.on('TRANSIT', (payload) => {
    eventLogger('TRANSIT', payload);
    caps.emit('TRANSIT', payload);
  });

  socket.on('ARRIVED', (payload) => {
    eventLogger('ARRIVED', payload);
    caps.emit('ARRIVED', payload);
  });

});

function eventLogger(event, payload){
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}
