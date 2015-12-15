///<reference path="../../../typings/jasmine/jasmine.d.ts" />

import StringJuryModule = require("../../../src/courtroom/juries/string.contains.jury");

const ContainsJury = StringJuryModule.ContainsJury;

describe("string.contains Constructor tests", function() {
  it("should have correct name", function() {
    var j = new ContainsJury("req");

    expect(j.getName()).toBe("string.contains");
  });

  it("should have correct details", function() {
    var j = new ContainsJury("req");

    expect(j.getDetails()).toEqual({ required: "req" });
  });
});

describe("string.contains Verdict tests", function() {
  it("should give false verdict if incorrect", function() {
    var j = new ContainsJury("req");

    expect(j.verdict("bla")).toBe(false);
  });

  it("should have true verdict if correct", function() {
    var j = new ContainsJury("req");

    expect(j.verdict("abcreqjkl")).toEqual(true);
  });
});
