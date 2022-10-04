'use strict';

const eventPool = require('./src/eventPool');
const vendorHandler = require('./src/vendor/vendor');
const driverHandler = require('./src/driver/driver');
const Chance = require('chance');

const chance = new Chance();

eventPool.on('PICKUP', driverHandler);
eventPool.on('TRANSIT', vendorHandler);
eventPool.on('DELIVERY', vendorHandler);


setInterval(() => {
  const payload = {
    store: chance.company(),
    orderId: chance.guid({version: 5}),
    name: chance.name(),
    address: chance.address(),
  };

  console.log('----new order----');
  eventPool.emit('PICKUP', {order: payload});
  eventPool.emit('DELIVERY', {order: payload});
}, 5000);
