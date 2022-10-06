'use strict';

const messageClient = require('../lib/messageClient');
const driver = new messageClient('driver');

driver.publish('GET_ALL',  { queueId: 'orderId'});

driver.subscribe('PICKUP', payload => {
  console.log('picked up delivery', payload.order.orderId );
  driver.publish('DELIVERED', payload);
  console.log('order is delivered', payload.order.orderId);
});
