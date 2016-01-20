///<reference path="../../typings/jasmine/jasmine.d.ts" />

import NotLawModule = require("../../src/courtroom/laws/not");

const NotLaw = NotLawModule.NotLaw;

describe("NotLaw verdict tests (null and undefined)", function() {
  it("should return 'true' when not null and checking for not null", function() {
    var a = new NotLaw(null);

    expect(a.verdict(5)).toBe(true);
  });

  it("should return 'false' when null and checking for not null", function() {
    var a = new NotLaw(null);

    expect(a.verdict(null)).toBe(false);
  });

  it("should return 'true' when not undefined and checking for not undefined", function() {
    var a = new NotLaw(undefined);

    expect(a.verdict(17)).toBe(true);
  });

  it("should return 'false' when undefined and checking for not undefined", function() {
    var a = new NotLaw(undefined);

    expect(a.verdict(undefined)).toBe(false);
  });
});

describe("NotLaw verdict tests (numeric)", function() {
  it("should return 'true' when integer numbers don't match", function() {
    var a = new NotLaw(5);

    expect(a.verdict(3)).toBe(true);
  });

  it("should return 'false' when integer numbers match", function() {
    var a = new NotLaw(5);

    expect(a.verdict(5)).toBe(false);
  });

  it("should return 'true' when decimal numbers don't match", function() {
    var a = new NotLaw(5.25);

    expect(a.verdict(3.6)).toBe(true);
  });

  it("should return 'false' when decimal numbers match", function() {
    var a = new NotLaw(5.25);

    expect(a.verdict(5.25)).toBe(false);
  });
});

describe("NotLaw verdict tests (string)", function() {
  it("should return 'true' when strings don't match", function() {
    var a = new NotLaw("james");

    expect(a.verdict("william")).toBe(true);
  });

  it("should return 'false' when strings match", function() {
    var a = new NotLaw("james");

    expect(a.verdict("james")).toBe(false);
  });
});

describe("NotLaw verdict tests (object)", function() {
  it("should return 'true' when objects don't match", function() {
    var a = new NotLaw(new NotLaw(null));

    expect(a.verdict(new NotLaw(null))).toBe(true);
  });

  it("should return 'false' when objects match", function() {
    var dummy = new NotLaw(null);

    var a = new NotLaw(dummy);

    expect(a.verdict(dummy)).toBe(false);
  });
});

describe("NotLaw verdict tests (different types)", function() {
  it("should return 'true' for int vs string", function() {
    var a = new NotLaw(3);

    expect(a.verdict("3")).toBe(true)
  });
});
