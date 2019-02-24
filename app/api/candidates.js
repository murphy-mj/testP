'use strict';

const Boom = require('boom');
const Candidate = require('../models/candidate');

const Candidates = {

  find: {
    auth: false,
    handler: async function(request, h) {
      const candidates = await Candidate.find();
      return candidates;
    }
  },

  findOne: {
    auth: false,
    handler: async function(request, h) {
      try {
        const candidate = await Candidate.findOne({ _id: request.params.id });
        if (!candidate) {
          return Boom.notFound('No Candidate with this id');
        }
        return candidate;
      } catch (err) {
        return Boom.notFound('No Candidate with this id');
      }
    }
  }
};

module.exports = Candidates;
