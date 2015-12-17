///<reference path="../../typings/jasmine/jasmine.d.ts" />

import DefendantModule = require("../../src/courtroom/defendant");

const Defendant = DefendantModule.Defendant;

describe("Defendant Constructor", function() {
  it("stores the name correctly for 'property'", function() {
    var expectedName = "property";

    var d = new Defendant(expectedName);

    expect(d.getName()).toBe(expectedName);
  });

  it("stores the name correctly for 'value'", function() {
    var expectedName = "value";

    var d = new Defendant(expectedName);

    expect(d.getName()).toBe(expectedName);
  });

  it("has no laws", function() {
    var d = new Defendant("prop");

    expect(d.laws.getJuryCount()).toBe(0);
  });
});

describe("Applying laws", function() {
  it("has laws count 1 when match.not applied once", function() {
    var d = new Defendant("prop");

    d.laws.not(null);

    expect(d.laws.getJuryCount()).toBe(1);
  });

  it("has laws count 2 when match.not applied twice", function() {
    var d = new Defendant("prop");

    d.laws.not(null);
    d.laws.not(null);

    expect(d.laws.getJuryCount()).toBe(2);
  });

  it("has laws count 1 when match.is applied once", function() {
    var d = new Defendant("prop");

    d.laws.is(null);

    expect(d.laws.getJuryCount()).toBe(1);
  });

  it("has laws count 2 when match.is applied twice", function() {
    var d = new Defendant("prop");

    d.laws.is(null);
    d.laws.is(null);

    expect(d.laws.getJuryCount()).toBe(2);
  });
});

describe("Chaining laws", function() {
  it("has the correct jury count with 3 same chained", function() {
    var d = new Defendant("name");

    d.laws.not("simon").not("luke").not("matt");

    expect(d.laws.getJuryCount()).toBe(3);
  });

  it("has the correct jury count with 3 different chained", function() {
    var d = new Defendant("name");

    d.laws.not("simon").contains(" ").maxLength(12);

    expect(d.laws.getJuryCount()).toBe(3);
  });

  it("has the correct jury count with 6 same chained", function() {
    var d = new Defendant("name");

    d.laws.not("simon").not("luke").not("matt").not("james").not("paulo").not("samantha");

    expect(d.laws.getJuryCount()).toBe(6);
  });

  it("has the correct jury count with 6 different chained", function() {
    var d = new Defendant("name");

    d.laws.not("simon").contains(" ").maxLength(12).is("bla").minLength(10).not("rudeword");

    expect(d.laws.getJuryCount()).toBe(6);
  });

  it("returns no issues when matches all same chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").not("james").not("bob");

    var issues = d.judge("bruce");

    expect(issues).toEqual([]);
  });

  it("returns no issues when matches all different chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").is("bruce").minLength(4);

    var issues = d.judge("bruce");

    expect(issues).toEqual([]);
  });

  it("returns one correct issue when breaks one of same chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").not("james").not("bob");

    var issues = d.judge("james");

    var expectedIssue = {
        property: "name",
        jury: "match.not",
        value: "james",
        details: {
          prohibited: "james"
        }
    };

    expect(issues[0]).toEqual(expectedIssue);
  });

  it("returns one correct issue when breaks one of different chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").is("bruce").minLength(4);

    var issues = d.judge("notbruce");

    var expectedIssue = {
        property: "name",
        jury: "match.is",
        value: "notbruce",
        details: {
          expected: "bruce"
        }
    };

    expect(issues[0]).toEqual(expectedIssue);
  });

  it("returns two correct issues when breaks two of same chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").contains("a").not("bob");

    var issues = d.judge("simon");

    var expectedIssueFirst = {
        property: "name",
        jury: "match.not",
        value: "simon",
        details: {
          prohibited: "simon"
        }
    };

    var expectedIssueSecond = {
        property: "name",
        jury: "string.contains",
        value: "simon",
        details: {
          required: "a"
        }
    };

    var expectedIssues = [ expectedIssueFirst, expectedIssueSecond ];

    expect(issues).toEqual(expectedIssues);
  });

  it("returns two correct issues when breaks two of different chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").is("bruce").minLength(4);

    var issues = d.judge("simon");

    var expectedIssueFirst = {
        property: "name",
        jury: "match.not",
        value: "simon",
        details: {
          prohibited: "simon"
        }
    };

    var expectedIssueSecond = {
        property: "name",
        jury: "match.is",
        value: "simon",
        details: {
          expected: "bruce"
        }
    };

    var expectedIssues = [ expectedIssueFirst, expectedIssueSecond ];

    expect(issues).toEqual(expectedIssues);
  });
});
