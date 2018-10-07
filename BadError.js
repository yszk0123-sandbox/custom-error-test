const util = require('util');

function BadError(message) {
  message = message || 'Default message';
  Error.call(this, message);
}

util.inherits(BadError, Error);

exports.BadError = BadError;
