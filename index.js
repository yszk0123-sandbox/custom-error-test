const { BadError } = require('./BadError');
const { GoodError } = require('./GoodError');
const { BetterError } = require('./BetterError');

function throwError() {
  const a = b[0];
}

function throwBadError() {
  try {
    throwError();
  } catch (e) {
    throw new BadError('bad');
  }
}

function throwGoodError() {
  try {
    throwError();
  } catch (e) {
    throw new GoodError('good');
  }
}

function throwBetterError() {
  try {
    throwError();
  } catch (e) {
    throw new BetterError('better');
  }
}

function testBadError() {
  return throwBadError();
}

function testGoodError() {
  return throwGoodError();
}

function testBetterError() {
  return throwBetterError();
}

try {
  console.log('====== Bad');
  testBadError();
} catch (e) {
  console.error(e);
}

try {
  console.log('====== Good');
  testGoodError();
} catch (e) {
  console.error(e);
}

try {
  console.log('====== Better');
  testBetterError();
} catch (e) {
  console.error(e);
}
