///<reference path="../../../typings/jasmine/jasmine.d.ts" />

import CourtroomModule = require("../../../src/courtroom/courtroom");
const Courtroom = CourtroomModule.Courtroom;

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

describe("contains tests", function() {
  it("should return no issues if string equals the requirements with value 'req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("req");

    var dummy = {
      property: "req"
    };

    var issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });

  it("should return no issues if string equals the requirements with value 'another_req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("another_req");

    var dummy = {
      property: "another_req"
    };

    var issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });

  it("should return no issues if string contains the requirements with value 'req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("req");

    var dummy = {
      property: "i_contain_req_!"
    };

    var issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });

  it("should return no issues if string contains the requirements with value 'another_req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("another_req");

    var dummy = {
      property: "i also contain 'another_req'!!!"
    };

    var issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });
});
