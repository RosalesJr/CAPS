'use strict';

module.exports = (socket) => (payload) => {

  setTimeout(() => {
    console.log(`order has been picked up ${payload.order.orderId}`);
    console.log('order is on the way', payload);
    socket.emit('TRANSIT', payload);

  }, 3000);
};

