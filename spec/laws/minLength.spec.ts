///<reference path="../../typings/expect.js/expect.js.d.ts" />
///<reference path="../../typings/mocha/mocha.d.ts" />

import expect = require('expect.js');
import Courtroom = require("../../src/index");

describe("minLength tests", function() {
  it("should return no issues if minimum length is 0 and property is empty string", function() {
    let c = new Courtroom();

    c.trial("prop").laws.minLength(0);

    let dummy = {
      prop: ""
    };

    let issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return no issues if minimum length is 0 and property is 'james'", function() {
    let c = new Courtroom();

    c.trial("prop").laws.minLength(0);

    let dummy = {
      prop: "james"
    };

    let issues = c.judge(dummy);

    expect(issues).to.be.empty();
  });

  it("should return an issue with correct details if minimum length is 3 and property 'ab'", function() {
    let c = new Courtroom();

    c.trial("prop").laws.minLength(3);

    let dummy = {
      prop: "ab"
    };

    let issues = c.judge(dummy);

    expect(issues.length).to.be(1);

    expect(issues[0].property).to.be("prop");
    expect(issues[0].law).to.be("minLength");
    expect(issues[0].details.minimum).to.be(3);
  });

  it("should return an issue with correct details if minimum length is 10 and property 'jkm'", function() {
    let c = new Courtroom();

    c.trial("myprop").laws.minLength(10);

    let dummy = {
      myprop: "jkm"
    };

    let issues = c.judge(dummy);

    expect(issues.length).to.be(1);

    expect(issues[0].property).to.be("myprop");
    expect(issues[0].law).to.be("minLength");
    expect(issues[0].details.minimum).to.be(10);
  });
});
