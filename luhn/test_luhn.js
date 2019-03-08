var assert = require("chai").assert;
var valid = require("./luhn.js");

describe("Valid Luhn number", function() {
  it("this number is not a valid Luhn number; code should return false", function() {
    var test_cases = 79927398710;
    assert.isFalse(valid(test_cases));
  });

  it("this number is a valid Luhn number; code should return true", function() {
    var test_cases = 79927398713;
    assert.isTrue(valid(test_cases));
  });

  it("this number is a valid Luhn number; code should return false", function() {
    var test_cases = [79927398711, 79927398712, 79927398714,
                  79927398715, 79927398716, 79927398717, 79927398718, 79927398719];
    test_cases.forEach(function(num) { assert.isFalse(valid(num))} );
  });
});


// , 79927398711, 79927398712, 79927398714,
//                  79927398715, 79927398716, 79927398717, 79927398718, 79927398719