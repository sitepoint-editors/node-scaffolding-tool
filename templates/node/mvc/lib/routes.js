'use strict';

const Path = require('path');
const Home = require('./controllers/home');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Home
  }
];