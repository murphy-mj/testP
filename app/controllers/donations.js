'use strict';

const Donations = {
  index: {
    handler: async function(request, h) {
      return h.file('./app/views/main.html');
    }
  },
  signup: {
    handler: async function(request, h) {
      return h.file('./app/views/signup.html');
    }
  },
  login: {
    handler: async function(request, h) {
      return h.file('./app/views/login.html');
    }
  }
};

module.exports = Donations;
