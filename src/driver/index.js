'use strict';

const { io } = require('socket.io-client');

const socket = io('http://localhost:3002/caps');

const createTransitOrder = require('./driver');
const transitOrder = createTransitOrder(socket);

const createArrivedOrder = require('./arrived');
const arrivedOrder = createArrivedOrder(socket);

socket.emit('JOIN', 'Caps');

socket.on('PICKUP', transitOrder);
socket.on('TRANSIT', arrivedOrder);

socket.on('connect', () => {
  console.log(socket.id);
});
