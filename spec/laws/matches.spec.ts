///<reference path="../../typings/main.d.ts" />

import expect = require('expect.js');
import Courtroom = require("courtroom/index");

import RegExpLawModule = require("courtroom/courtroom/laws/matches");
const MatchesLaw = RegExpLawModule.MatchesLaw;

describe("string.matches Constructor tests", function() {
  it("should have correct name", function() {
    var j = new MatchesLaw("req");

    expect(j.getName()).to.be("matches");
  });

  it("should have correct details", function() {
    var j = new MatchesLaw("req");

    expect(j.getDetails()).to.eql({ required: "req" });
  });
});

describe("string.matches Verdict tests", function() {
  it("should give false verdict if incorrect", function() {
    var j = new MatchesLaw(/req/);

    expect(j.verdict("bla")).to.be(false);
  });

  it("should have true verdict if correct", function() {
    var j = new MatchesLaw(/req/);

    expect(j.verdict("abcreqjkl")).to.equal(true);
  });
});

describe("matches tests", function() {
  it("should return no issues if string matches the requirements with value /req/", function() {
    let c = new Courtroom();

    c.trial("property").laws.matches(/req/);

    var dummy = {
      property: /req/
    };

    var issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return no issues if string matches the requirements with value /another_req/", function() {
    let c = new Courtroom();

    c.trial("property").laws.matches(/another_req/);

    var dummy = {
      property: "another_req"
    };

    var issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return no issues if string matches the requirements with value /req/", function() {
    let c = new Courtroom();

    c.trial("property").laws.matches(/req/);

    var dummy = {
      property: "i_contain_req_!"
    };

    var issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return no issues if string matches the requirements with value /another_req/", function() {
    let c = new Courtroom();

    c.trial("property").laws.matches(/another_req/);

    var dummy = {
      property: "i also contain 'another_req'!!!"
    };

    var issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return no issues if string matches the requirements with value /^(?:.+) *[complicated]{11} RegExp$/i", function() {
    let c = new Courtroom();

    c.trial("property").laws.matches(/^(?:.+) *[complicated]{11} RegExp$/i);

    var dummy = {
      property: "a complicated regexp"
    };

    var issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return issue with correct details if string doesn't contain the requirements with value /req/", function() {
    let c = new Courtroom();

    c.trial("property").laws.matches(/req/);

    var dummy = {
      property: "you won't find r-e-q in here!"
    };

    var issues = c.judge(dummy);

    expect(issues.length).to.equal(1);

    expect(issues[0].property).to.be("property");
    expect(issues[0].law).to.be("matches");
    expect(issues[0].details.required).to.eql(/req/);
  });

  it("should return issue with correct details if string doesn't contain the requirements with value /apple/", function() {
    let c = new Courtroom();

    c.trial("property").laws.matches(/apple/);

    var dummy = {
      property: "I only like oranges. Nothing else."
    };

    var issues = c.judge(dummy);

    expect(issues.length).to.equal(1);

    expect(issues[0].property).to.be("property");
    expect(issues[0].law).to.be("matches");
    expect(issues[0].details.required).to.eql(/apple/);
  });
});
