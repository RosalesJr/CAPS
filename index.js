'use strict';

const eventPool = require('./src/eventPool');
const vendorHandler = require('./src/vendor/vendor');
const driverHandler = require('./src/driver/driver');
const arrivedHandler = require('./src/arrived/arrived');
const Chance = require('chance');

const chance = new Chance();

eventPool.on('PICKUP', driverHandler);
eventPool.on('TRANSIT', vendorHandler);
eventPool.on('ARRIVED', arrivedHandler);


setInterval(() => {
  const payload = {
    store: chance.company(),
    orderId: chance.guid({version: 5}),
    name: chance.name(),
    address: chance.address(),
  };

  console.log('----new order----');
  eventPool.emit('PICKUP', {order: payload});
}, 8000);
