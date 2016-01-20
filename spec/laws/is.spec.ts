///<reference path="../../typings/jasmine/jasmine.d.ts" />

import IsLawModule = require("../../src/courtroom/laws/is");

const IsLaw = IsLawModule.IsLaw;

describe("IsLaw verdict tests (null and undefined)", function() {
  it("should return 'false' when not null and checking for null", function() {
    var a = new IsLaw(null);

    expect(a.verdict(undefined)).toBe(false);
  });

  it("should return 'true' when null and checking for null", function() {
    var a = new IsLaw(null);

    expect(a.verdict(null)).toBe(true);
  });

  it("should return 'false' when not undefined and checking for undefined", function() {
    var a = new IsLaw(undefined);

    expect(a.verdict(null)).toBe(false);
  });

  it("should return 'true' when undefined and checking for undefined", function() {
    var a = new IsLaw(undefined);

    expect(a.verdict(undefined)).toBe(true);
  });
});

describe("IsLaw verdict tests (numeric)", function() {
  it("should return 'true' when numbers match", function() {
    var a = new IsLaw(1);

    expect(a.verdict(1)).toBe(true);
  });

  it("should return 'false' when numbers don't match", function() {
    var a = new IsLaw(1);

    expect(a.verdict(2)).toBe(false);
  });
});

describe("IsLaw verdict tests (string)", function() {
  it("should return 'true' when strings match", function() {
    var a = new IsLaw("james");

    expect(a.verdict("james")).toBe(true);
  });

  it("should return 'false' when strings don't match", function() {
    var a = new IsLaw("james");

    expect(a.verdict("william")).toBe(false);
  });
});
