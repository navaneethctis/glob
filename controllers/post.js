const { Post } = require('../models');

exports.create = (request, response) => {
  response.render('index', {
    page: 'post/create',
    title: 'Create Post | Glob'
  });
};

exports.destroy = async (request, response) => {
  await Post.forge({ id: request.params.id }).destroy();

  response.json({});
};

exports.edit = async (request, response) => {
  const post = await Post.forge({ id: request.params.id }).fetch();

  response.render('index', {
    page: 'post/edit',
    post,
    title: 'Edit Post | Glob'
  });
};

exports.index = async (request, response) => {
  const posts = await Post.fetchAll();

  response.render('index', {
    page: 'post/index',
    posts: posts.toArray(),
    title: 'Posts'
  });
};

exports.show = async (request, response) => {
  const post = await Post.forge({ id: request.params.id }).fetch();

  response.render('index', {
    page: 'post/show',
    post,
    title: post.title
  });
};

exports.store = async (request, response) => {
  await Post.forge({
    body: request.body.body,
    title: request.body.title
  }).save();

  response.redirect('/posts');
};

exports.update = async (request, response) => {
  const post = await Post.forge({ id: request.params.id });
  post.set(request.body);
  post.save();

  response.json(post);
};
