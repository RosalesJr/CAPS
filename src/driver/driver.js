'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {

  setTimeout(() => {
    console.log(`order has been picked up ${payload.order.orderId}`);
    console.log('order is on the way', payload);
    eventPool.emit('TRANSIT', payload);

  }, 3000);
};

