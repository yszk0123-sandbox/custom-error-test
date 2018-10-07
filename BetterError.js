const util = require('util');
const ExtendableError = require('es6-error');

function BetterError(message) {
  message = message || 'Default message';
  ExtendableError.call(this, message);
}

util.inherits(BetterError, ExtendableError);

exports.BetterError = BetterError;
