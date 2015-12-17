///<reference path="../../../typings/jasmine/jasmine.d.ts" />

import CourtroomModule = require("../../../src/courtroom/courtroom");
const Courtroom = CourtroomModule.Courtroom;

describe("maxLength tests", function() {
  it("should return no issues if string's length is 0", function() {
    let c = new Courtroom();

    c.trial("property").laws.maxLength(0);

    var dummy = {
      property: ""
    };

    var issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });

  it("should return no issues if string's length is less than req when req is 2", function() {
    let c = new Courtroom();

    c.trial("property").laws.maxLength(2);

    var dummy = {
      property: "a"
    };

    var issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });

  it("should return no issues if string's length is less than req when req is 10", function() {
    let c = new Courtroom();

    c.trial("property").laws.maxLength(10);

    var dummy = {
      property: "abcde"
    };

    var issues = c.judge(dummy);

    expect(issues).toEqual([]);
  });

  it("should return an issue with correct details if string's length is more than req when req is 1", function() {
    let c = new Courtroom();

    c.trial("property").laws.maxLength(1);

    var dummy = {
      property: "abcde"
    };

    var issues = c.judge(dummy);

    expect(issues.length).toBe(1);

    expect(issues[0].property).toBe("property");
    expect(issues[0].jury).toBe("string.maxLength");
    expect(issues[0].details.maximum).toBe(1);
  });

  it("should return an issue with correct details if string's length is more than req when req is 5", function() {
    let c = new Courtroom();

    c.trial("property").laws.maxLength(5);

    var dummy = {
      property: "abcdefg"
    };

    var issues = c.judge(dummy);

    expect(issues.length).toBe(1);

    expect(issues[0].property).toBe("property");
    expect(issues[0].jury).toBe("string.maxLength");
    expect(issues[0].details.maximum).toBe(5);
  });
});
