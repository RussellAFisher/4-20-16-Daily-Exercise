<<<<<<< HEAD

var parensChecker = require('../solutions/RF.js');

=======
var parensChecker = require('../solutions/yourfile.js');
>>>>>>> 0b4cc8f0436833d359b8d0f67a98893526c21416
var assert = require('assert');

describe('Parentheses Checker', function() {

  it('should check if all parens are closed', function() {
    assert(parensChecker("()(((())))") === true);
    assert(parensChecker("())))(") === false);
    assert(parensChecker(")(") === false);
  });

});
