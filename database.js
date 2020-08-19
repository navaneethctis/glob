const knex = require('knex')({
  client: 'mysql',
  connection: {
    charset: 'utf8',
    database: 'glob',
    host: '127.0.0.1',
    password: '',
    user: 'root'
  }
});

module.exports = require('bookshelf')(knex);
