///<reference path="../../typings/expect.js/expect.js.d.ts" />
///<reference path="../../typings/mocha/mocha.d.ts" />

import expect = require('expect.js');
import Courtroom = require("courtroom/index");

import StringLawModule = require("courtroom/courtroom/laws/contains");
const ContainsLaw = StringLawModule.ContainsLaw;

describe("string.contains Constructor tests", function() {
  it("should have correct name", function() {
    var j = new ContainsLaw("req");

    expect(j.getName()).to.be("contains");
  });

  it("should have correct details", function() {
    var j = new ContainsLaw("req");

    expect(j.getDetails()).to.eql({ required: "req" });
  });
});

describe("string.contains Verdict tests", function() {
  it("should give false verdict if incorrect", function() {
    var j = new ContainsLaw("req");

    expect(j.verdict("bla")).to.be(false);
  });

  it("should have true verdict if correct", function() {
    var j = new ContainsLaw("req");

    expect(j.verdict("abcreqjkl")).to.equal(true);
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

    expect(issues).to.be.empty();
  });

  it("should return no issues if string equals the requirements with value 'another_req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("another_req");

    var dummy = {
      property: "another_req"
    };

    var issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return no issues if string contains the requirements with value 'req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("req");

    var dummy = {
      property: "i_contain_req_!"
    };

    var issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return no issues if string contains the requirements with value 'another_req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("another_req");

    var dummy = {
      property: "i also contain 'another_req'!!!"
    };

    var issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return issue with correct details if string doesn't contain the requirements with value 'req'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("req");

    var dummy = {
      property: "you won't find r-e-q in here!"
    };

    var issues = c.judge(dummy);

    expect(issues.length).to.equal(1);

    expect(issues[0].property).to.be("property");
    expect(issues[0].law).to.be("contains");
    expect(issues[0].details.required).to.be("req");
  });

  it("should return issue with correct details if string doesn't contain the requirements with value 'apple'", function() {
    let c = new Courtroom();

    c.trial("property").laws.contains("apple");

    var dummy = {
      property: "I only like oranges. Nothing else."
    };

    var issues = c.judge(dummy);

    expect(issues.length).to.equal(1);

    expect(issues[0].property).to.be("property");
    expect(issues[0].law).to.be("contains");
    expect(issues[0].details.required).to.be("apple");
  });
});
