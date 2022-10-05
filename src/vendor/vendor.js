'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
    setTimeout(() => {
        eventPool.emit('ARRIVED', payload);
        console.log(`thank you for ordering with us ${payload.order.name}`);
    }, 2000);
};
