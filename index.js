var ig = require('instagram-node').instagram();

exports = module.exports = {};

exports.name = 'instagram';
exports.type = 'service';

exports.register = function(app, options, next) {
  ig.use(options);
  app.service.register('instagram', ig);
  next();
};
