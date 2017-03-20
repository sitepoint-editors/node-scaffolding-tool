'use strict';

const Models = require('../models/');

module.exports = (request, reply) => {
    reply.view('home', {
      data: 'World!'
    });
};