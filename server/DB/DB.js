const DBconfig = require('./knexfile');
let knex = require('knex')(DBconfig);

const db = knex;
module.exports = db;