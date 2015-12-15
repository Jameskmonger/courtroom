///<reference path="../../typings/jasmine/jasmine.d.ts" />

import CourtroomModule = require("../../src/courtroom/courtroom");

const Courtroom = CourtroomModule.Courtroom;

describe("Courtroom Constructor", function() {
  it("does not have any defendants", function() {
    var courtroom = new Courtroom();

    expect(courtroom.getDefendantCount()).toBe(0);
  });
});

describe("Place property on trial", function() {
  it("should have one defendant when one trialled", function() {
    var courtroom = new Courtroom();

    courtroom.trial("prop");

    expect(courtroom.getDefendantCount()).toBe(1);
  });

  it("should have two defendants when two trialled", function() {
    var courtroom = new Courtroom();

    courtroom.trial("prop");
    courtroom.trial("anotherprop");

    expect(courtroom.getDefendantCount()).toBe(2);
  });

  it("should return defendant with correct name for 'prop'", function() {
    var expectedName = "prop";

    var courtroom = new Courtroom();

    var prop = courtroom.trial(expectedName);

    expect(prop.getName()).toBe(expectedName);
  });

  it("should return defendant with correct name for 'anotherprop'", function() {
    var expectedName = "anotherprop";

    var courtroom = new Courtroom();

    var prop = courtroom.trial(expectedName);

    expect(prop.getName()).toBe(expectedName);
  });

  it("should return a defendant that we can apply laws to", function() {
    var courtroom = new Courtroom();

    var defendant = courtroom.trial("test");

    defendant.laws.match.not("nottest");

    expect(defendant.laws.count()).toBe(1);
  });
});

describe("Courtroom Judge", function() {
  it("should return an empty array when no laws broken", function() {
    var courtroom = new Courtroom();

    var test = courtroom.trial("test");

    test.laws.match.is("test");

    var dummy = {
      test: "test"
    };

    var issues = courtroom.judge(dummy);

    expect(issues.length).toBe(0);
  });

  it("should return an array with one issue with correct details when one law broken", function() {
    const expectedValue = "expectedValue",
          actualValue = "actualValue";

    var courtroom = new Courtroom();

    var test = courtroom.trial("prop_name");

    test.laws.match.is(expectedValue);

    var dummy = {
      prop_name: actualValue,
      other: "bla"
    };

    var issues = courtroom.judge(dummy);
    expect(issues.length).toBe(1);

    var issue = issues[0];
    expect(issue.property).toBe("prop_name");
    expect(issue.jury).toBe("match.is");
    expect(issue.value).toBe(actualValue);
    expect(issue.details).toEqual({ expected: expectedValue });
  });
});
