'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`order has been picked up ${payload.order.orderId}`);
  console.log('order is on the way', payload);
  console.log(`order is delivered ${payload.order.orderId}`);
};
