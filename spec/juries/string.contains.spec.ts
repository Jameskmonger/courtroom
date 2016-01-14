///<reference path="../../typings/jasmine/jasmine.d.ts" />

import Courtroom = require("../../src/index");

import StringJuryModule = require("../../src/juries/string.contains.jury");
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

  it("should return issue with correct details if string doesn't contain the requirements with value 'req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("req");

    var dummy = {
      property: "you won't find r-e-q in here!"
    };

    var issues = c.judge(dummy);

    expect(issues.length).toEqual(1);

    expect(issues[0].property).toBe("property");
    expect(issues[0].jury).toBe("string.contains");
    expect(issues[0].details.required).toBe("req");
  });

  it("should return issue with correct details if string doesn't contain the requirements with value 'apple'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("apple");

    var dummy = {
      property: "I only like oranges. Nothing else."
    };

    var issues = c.judge(dummy);

    expect(issues.length).toEqual(1);

    expect(issues[0].property).toBe("property");
    expect(issues[0].jury).toBe("string.contains");
    expect(issues[0].details.required).toBe("apple");
  });
});
