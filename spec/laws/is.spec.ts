///<reference path="../../typings/expect.js/expect.js.d.ts" />
///<reference path="../../typings/mocha/mocha.d.ts" />

import expect = require('expect.js');
import IsLawModule = require("../../src/courtroom/laws/is");

const IsLaw = IsLawModule.IsLaw;

describe("IsLaw verdict tests (null and undefined)", function() {
  it("should return 'false' when not null and checking for null", function() {
    var a = new IsLaw(null);

    expect(a.verdict(undefined)).to.be(false);
  });

  it("should return 'true' when null and checking for null", function() {
    var a = new IsLaw(null);

    expect(a.verdict(null)).to.be(true);
  });

  it("should return 'false' when not undefined and checking for undefined", function() {
    var a = new IsLaw(undefined);

    expect(a.verdict(null)).to.be(false);
  });

  it("should return 'true' when undefined and checking for undefined", function() {
    var a = new IsLaw(undefined);

    expect(a.verdict(undefined)).to.be(true);
  });
});

describe("IsLaw verdict tests (numeric)", function() {
  it("should return 'true' when numbers match", function() {
    var a = new IsLaw(1);

    expect(a.verdict(1)).to.be(true);
  });

  it("should return 'false' when numbers don't match", function() {
    var a = new IsLaw(1);

    expect(a.verdict(2)).to.be(false);
  });
});

describe("IsLaw verdict tests (string)", function() {
  it("should return 'true' when strings match", function() {
    var a = new IsLaw("james");

    expect(a.verdict("james")).to.be(true);
  });

  it("should return 'false' when strings don't match", function() {
    var a = new IsLaw("james");

    expect(a.verdict("william")).to.be(false);
  });
});
