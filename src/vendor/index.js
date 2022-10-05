'use strict';

const { io } = require('socket.io-client');

const socket = io('http://localhost:3002/caps');
const Chance = require('chance');

const chance = new Chance();

socket.emit('JOIN', 'caps');

socket.on('connect', () => {
  console.log(socket.id);


  setInterval(() => {
    const payload = {
      store: chance.company(),
      orderId: chance.guid({version: 5}),
      name: chance.name(),
      address: chance.address(),
    };

    console.log('----new order----');
    socket.emit('PICKUP', {order: payload});
  }, 8000);
});
