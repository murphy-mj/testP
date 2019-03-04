'use strict';

const axios = require('axios');
const baseUrl = 'http://localhost:3000';

class DonationService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getCandidates() {
    try {
      const response = await axios.get(this.baseUrl + '/api/candidates');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async getCandidate(id) {
    try {
      const response = await axios.get(this.baseUrl + '/api/candidates/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async createCandidate(newCandidate) {
    try {
      const response = await axios.post(this.baseUrl + '/api/candidates', newCandidate);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteAllCandidates() {
    try {
      const response = await axios.delete(this.baseUrl + '/api/candidates');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteOneCandidate(id) {
    try {
      const response = await axios.delete(this.baseUrl + '/api/candidates/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }
}

module.exports = DonationService;
