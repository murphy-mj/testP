'use strict';

const Donations = {
  index: {
    handler: async function(request, h) {
      return h.file('./app/views/main.html');
    }
  }
};

module.exports = Donations;
