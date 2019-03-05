'use strict';

const Boom = require('boom');
const Donation = require('../models/donation');

const Donations = {
  findAll: {
    auth: false,
    handler: async function(request, h) {
      const donations = await Donation.find();
      return donations;
    }
  },
  findByCandidate: {
    auth: false,
    handler: async function(request, h) {
      const donations = await Donation.find({ candidate: request.params.id });
      return donations;
    }
  }
};

module.exports = Donations;
