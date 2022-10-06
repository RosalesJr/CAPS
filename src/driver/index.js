'use strict';

const messageClient = require('../lib/messageClient');
const driver = new messageClient('driver');

driver.publish('GET_ALL',  { queueId: 'orderId'});

driver.subscribe('PICKUP', payload => {
  driver.publish('DELIVERED', payload);
});
