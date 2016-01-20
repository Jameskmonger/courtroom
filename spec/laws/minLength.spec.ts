///<reference path="../../typings/jasmine/jasmine.d.ts" />

import Courtroom = require("../../src/index");

describe("minLength tests", function() {
  it("should return no issues if minimum length is 0 and property is empty string", function() {
    let c = new Courtroom();

    c.trial("prop").laws.minLength(0);

    let dummy = {
      prop: ""
    };

    let issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });

  it("should return no issues if minimum length is 0 and property is 'james'", function() {
    let c = new Courtroom();

    c.trial("prop").laws.minLength(0);

    let dummy = {
      prop: "james"
    };

    let issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });

  it("should return an issue with correct details if minimum length is 3 and property 'ab'", function() {
    let c = new Courtroom();

    c.trial("prop").laws.minLength(3);

    let dummy = {
      prop: "ab"
    };

    let issues = c.judge(dummy);

    expect(issues.length).toBe(1);

    expect(issues[0].property).toBe("prop");
    expect(issues[0].law).toBe("string.minLength");
    expect(issues[0].details.minimum).toBe(3);
  });

  it("should return an issue with correct details if minimum length is 10 and property 'jkm'", function() {
    let c = new Courtroom();

    c.trial("myprop").laws.minLength(10);

    let dummy = {
      myprop: "jkm"
    };

    let issues = c.judge(dummy);

    expect(issues.length).toBe(1);

    expect(issues[0].property).toBe("myprop");
    expect(issues[0].law).toBe("string.minLength");
    expect(issues[0].details.minimum).toBe(10);
  });
});