'use strict';

const MessageClient = require('../lib/messageClient');
const acmeVendor = new MessageClient('Acme Widgets');
const flowerVendor = new MessageClient('1-800-Flowers');
const Chance = require('chance');
const chance = new Chance();

acmeVendor.subscribe('DELIVERED', payload => {
    console.log('received message', payload.order.orderId);
    acmeVendor.publish('RECEIVED', payload);
});

  setInterval(() => {
    const payload = {
      store: chance.company(),
      orderId: chance.guid({version: 5}),
      name: chance.name(),
      address: chance.address(),
    };

    console.log('----new order----');
    acmeVendor.publish('PICKUP', {order: payload});
  }, 8000);
// });

flowerVendor.subscribe('DELIVERED', payload => {
    console.log('received message', payload.order.orderId);
    flowerVendor.publish('RECEIVED', payload);
});

setInterval(() => {
    const payload = {
      store: chance.company(),
      orderId: chance.guid({version: 5}),
      name: chance.name(),
      address: chance.address(),
    };

    console.log('----new order----');
    flowerVendor.publish('PICKUP', {order: payload});
  }, 8000);
