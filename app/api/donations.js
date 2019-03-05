'use strict';

const Boom = require('boom');
const Donation = require('../models/donation');

const Donations = {
  find: {
    auth: false,
    handler: async function(request, h) {
      const donations = await Donation.find();
      return donations;
    }
  }
};

module.exports = Donations;
