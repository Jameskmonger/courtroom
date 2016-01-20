///<reference path="../typings/jasmine/jasmine.d.ts" />

import Courtroom = require("../src/index");

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

    defendant.laws.not("nottest");

    expect(defendant.laws.getLawCount()).toBe(1);
  });
});

describe("Courtroom Judge", function() {
  it("should return an empty array when no laws broken", function() {
    var courtroom = new Courtroom();

    var test = courtroom.trial("test");

    test.laws.is("test");

    var dummy = {
      test: "test"
    };

    var issues = courtroom.judge(dummy);

    expect(issues.length).toBe(0);
  });

  it("should return an array with one issue with correct details when one match.is law broken", function() {
    const requiredValue = "expectedValue",
          actualValue = "actualValue";

    var courtroom = new Courtroom();

    var test = courtroom.trial("prop_name");

    test.laws.is(requiredValue);

    var dummy = {
      prop_name: actualValue
    };

    var issues = courtroom.judge(dummy);
    expect(issues.length).toBe(1);

    var issue = issues[0];
    expect(issue.property).toBe("prop_name");
    expect(issue.law).toBe("is");
    expect(issue.value).toBe(actualValue);
    expect(issue.details).toEqual({ required: requiredValue });
  });

  it("should return an array with one issue with correct details when one match.not law broken", function() {
    const prohibitedValue = "i_am_prohibited",
          actualValue = "i_am_prohibited";

    var courtroom = new Courtroom();

    var test = courtroom.trial("prop_name");

    test.laws.not(prohibitedValue);

    var dummy = {
      prop_name: actualValue
    };

    var issues = courtroom.judge(dummy);
    expect(issues.length).toBe(1);

    var issue = issues[0];
    expect(issue.property).toBe("prop_name");
    expect(issue.law).toBe("not");
    expect(issue.value).toBe(actualValue);
    expect(issue.details).toEqual({ prohibited: prohibitedValue });
  });

  it("should report no issues with a courtroom with no trials", function() {
    var courtroom = new Courtroom();

    var dummy = {
      untested_one: "blabla",
      untested_two: 17
    };

    var issues = courtroom.judge(dummy);
    expect(issues).toEqual([]);
  });

  it("should return no issues when properties all comply including children", function() {
    var courtroom = new Courtroom();

    courtroom.trial("not_parent").laws.not(5);

    var parent = courtroom.trial("is_parent");

    parent.trial("jimmy").laws.minLength(4);
    parent.trial("bob").laws.maxLength(6);

    var obj = {
      not_parent: 6,
      is_parent: {
        jimmy: "hello there my friend!",
        bob: "hi"
      }
    }

    expect(courtroom.judge(obj)).toEqual([]);
  });
});
