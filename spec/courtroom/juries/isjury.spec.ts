import IsJuryModule = require("../../src/courtroom/juries/isjury");
///<reference path="../../typings/jasmine/jasmine.d.ts" />

const IsJury = IsJuryModule.IsJury;

describe("IsJury verdict tests (null and undefined)", function() {
  it("should return 'false' when not null and checking for null", function() {
    var a = new IsJury(null);

    expect(a.verdict(undefined)).toBe(false);
  });

  it("should return 'true' when null and checking for null", function() {
    var a = new IsJury(null);

    expect(a.verdict(null)).toBe(true);
  });

  it("should return 'false' when not undefined and checking for undefined", function() {
    var a = new IsJury(undefined);

    expect(a.verdict(null)).toBe(false);
  });

  it("should return 'true' when undefined and checking for undefined", function() {
    var a = new IsJury(undefined);

    expect(a.verdict(undefined)).toBe(true);
  });
});

describe("IsJury verdict tests (numeric)", function() {
  it("should return 'true' when numbers match", function() {
    var a = new IsJury(1);

    expect(a.verdict(1)).toBe(true);
  });

  it("should return 'false' when numbers don't match", function() {
    var a = new IsJury(1);

    expect(a.verdict(2)).toBe(false);
  });
});

describe("IsJury verdict tests (string)", function() {
  it("should return 'true' when strings match", function() {
    var a = new IsJury("james");

    expect(a.verdict("james")).toBe(true);
  });

  it("should return 'false' when strings don't match", function() {
    var a = new IsJury("james");

    expect(a.verdict("william")).toBe(false);
  });
});
