'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`thank you for ordering with us ${payload.order.name}`);
};
