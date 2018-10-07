class GoodError extends Error {
  constructor() {
    super(...arguments);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, GoodError);
  }
}

exports.GoodError = GoodError;
