///<reference path="../../../typings/jasmine/jasmine.d.ts" />

import NotJuryModule = require("../../../src/courtroom/juries/notjury");

const NotJury = NotJuryModule.NotJury;

describe("NotJury verdict tests (null and undefined)", function() {
  it("should return 'true' when not null and checking for not null", function() {
    var a = new NotJury(null);

    expect(a.verdict(5)).toBe(true);
  });

  it("should return 'false' when null and checking for not null", function() {
    var a = new NotJury(null);

    expect(a.verdict(null)).toBe(false);
  });

  it("should return 'true' when not undefined and checking for not undefined", function() {
    var a = new NotJury(undefined);

    expect(a.verdict(17)).toBe(true);
  });

  it("should return 'false' when undefined and checking for not undefined", function() {
    var a = new NotJury(undefined);

    expect(a.verdict(undefined)).toBe(false);
  });
});

describe("NotJury verdict tests (numeric)", function() {
  it("should return 'true' when integer numbers don't match", function() {
    var a = new NotJury(5);

    expect(a.verdict(3)).toBe(true);
  });

  it("should return 'false' when integer numbers match", function() {
    var a = new NotJury(5);

    expect(a.verdict(5)).toBe(false);
  });

  it("should return 'true' when decimal numbers don't match", function() {
    var a = new NotJury(5.25);

    expect(a.verdict(3.6)).toBe(true);
  });

  it("should return 'false' when decimal numbers match", function() {
    var a = new NotJury(5.25);

    expect(a.verdict(5.25)).toBe(false);
  });
});

describe("NotJury verdict tests (string)", function() {
  it("should return 'true' when strings don't match", function() {
    var a = new NotJury("james");

    expect(a.verdict("william")).toBe(true);
  });

  it("should return 'false' when strings match", function() {
    var a = new NotJury("james");

    expect(a.verdict("james")).toBe(false);
  });
});

describe("NotJury verdict tests (object)", function() {
  it("should return 'true' when objects don't match", function() {
    var a = new NotJury(new NotJury(null));

    expect(a.verdict(new NotJury(null))).toBe(true);
  });

  it("should return 'false' when objects match", function() {
    var dummy = new NotJury(null);

    var a = new NotJury(dummy);

    expect(a.verdict(dummy)).toBe(false);
  });
});

describe("NotJury verdict tests (different types)", function() {
  it("should return 'true' for int vs string", function() {
    var a = new NotJury(3);

    expect(a.verdict("3")).toBe(true)
  });
});
