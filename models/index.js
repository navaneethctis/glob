const bookshelf = require('../database');

exports.Post = bookshelf.model('Post', {
  tableName: 'posts'
});
