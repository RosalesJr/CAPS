'use strict';

module.exports = (socket) => (payload) =>  {
  setTimeout(() => {
    console.log(`thank you for ordering with us ${payload.order.name}`);
    socket.emit('ARRIVED', payload);
    console.log('Don\'t forget to rate the delivery!!' );
    socket.disconnect();
  }, 2000);
};
