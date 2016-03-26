///<reference path="../typings/main.d.ts" />

import expect = require('expect.js');
import DefendantModule = require("courtroom/courtroom/defendant");

const Defendant = DefendantModule.Defendant;

describe("Defendant Constructor", function() {
  it("stores the name correctly for 'property'", function() {
    var expectedName = "property";

    var d = new Defendant(expectedName);

    expect(d.getName()).to.be(expectedName);
  });

  it("stores the name correctly for 'value'", function() {
    var expectedName = "value";

    var d = new Defendant(expectedName);

    expect(d.getName()).to.be(expectedName);
  });

  it("has no laws", function() {
    var d = new Defendant("prop");

    expect(d.laws.getLawCount()).to.be(0);
  });
});

describe("Applying laws", function() {
  it("has laws count 1 when match.not applied once", function() {
    var d = new Defendant("prop");

    d.laws.not(null);

    expect(d.laws.getLawCount()).to.be(1);
  });

  it("has laws count 2 when match.not applied twice", function() {
    var d = new Defendant("prop");

    d.laws.not(null);
    d.laws.not(null);

    expect(d.laws.getLawCount()).to.be(2);
  });

  it("has laws count 1 when match.is applied once", function() {
    var d = new Defendant("prop");

    d.laws.is(null);

    expect(d.laws.getLawCount()).to.be(1);
  });

  it("has laws count 2 when match.is applied twice", function() {
    var d = new Defendant("prop");

    d.laws.is(null);
    d.laws.is(null);

    expect(d.laws.getLawCount()).to.be(2);
  });
});

describe("Chaining laws", function() {
  it("has the correct jury count with 3 same chained", function() {
    var d = new Defendant("name");

    d.laws.not("simon").not("luke").not("matt");

    expect(d.laws.getLawCount()).to.be(3);
  });

  it("has the correct jury count with 3 different chained", function() {
    var d = new Defendant("name");

    d.laws.not("simon").contains(" ").maxLength(12);

    expect(d.laws.getLawCount()).to.be(3);
  });

  it("has the correct jury count with 6 same chained", function() {
    var d = new Defendant("name");

    d.laws.not("simon").not("luke").not("matt").not("james").not("paulo").not("samantha");

    expect(d.laws.getLawCount()).to.be(6);
  });

  it("has the correct jury count with 6 different chained", function() {
    var d = new Defendant("name");

    d.laws.not("simon").contains(" ").maxLength(12).is("bla").minLength(10).not("rudeword");

    expect(d.laws.getLawCount()).to.be(6);
  });

  it("returns no issues when matches all same chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").not("james").not("bob");

    var issues = d.judge("bruce");

    expect(issues).to.be.empty();
  });

  it("returns no issues when matches all different chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").is("bruce").minLength(4);

    var issues = d.judge("bruce");

    expect(issues).to.be.empty();
  });

  it("returns one correct issue when breaks one of same chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").not("james").not("bob");

    var issues = d.judge("james");

    var expectedIssue = {
        property: "name",
        law: "not",
        value: "james",
        details: {
          prohibited: "james"
        }
    };

    expect(issues[0]).to.eql(expectedIssue);
  });

  it("returns one correct issue when breaks one of different chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").is("bruce").minLength(4);

    var issues = d.judge("notbruce");

    var expectedIssue = {
        property: "name",
        law: "is",
        value: "notbruce",
        details: {
          required: "bruce"
        }
    };

    expect(issues[0]).to.eql(expectedIssue);
  });

  it("returns two correct issues when breaks two of same chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").contains("a").not("bob");

    var issues = d.judge("simon");

    var expectedIssueFirst = {
        property: "name",
        law: "not",
        value: "simon",
        details: {
          prohibited: "simon"
        }
    };

    var expectedIssueSecond = {
        property: "name",
        law: "contains",
        value: "simon",
        details: {
          required: "a"
        }
    };

    var expectedIssues = [ expectedIssueFirst, expectedIssueSecond ];

    expect(issues).to.eql(expectedIssues);
  });

  it("returns two correct issues when breaks two of different chained laws", function() {
    var d = new Defendant("name");

    d.laws.not("simon").is("bruce").minLength(4);

    var issues = d.judge("simon");

    var expectedIssueFirst = {
        property: "name",
        law: "not",
        value: "simon",
        details: {
          prohibited: "simon"
        }
    };

    var expectedIssueSecond = {
        property: "name",
        law: "is",
        value: "simon",
        details: {
          required: "bruce"
        }
    };

    var expectedIssues = [ expectedIssueFirst, expectedIssueSecond ];

    expect(issues).to.eql(expectedIssues);
  });
});

describe("Trialling children", function() {
  it("returns the correct child count when none applied", function() {
    var defendant = new Defendant("name");

    expect(defendant.getChildCount()).to.be(0);
  });

  it("returns the correct child count when one applied", function() {
    var defendant = new Defendant("name");

    var child = defendant.trial("bob");

    expect(defendant.getChildCount()).to.be(1);
  });

  it("returns the correct child count when two applied", function() {
    var defendant = new Defendant("name");

    var child_one = defendant.trial("bob");
    var child_two = defendant.trial("brian");

    expect(defendant.getChildCount()).to.be(2);
  });

  it("returns correct issue when one child is wrong", function() {
    var defendant = new Defendant("obj");

    defendant.trial("number").laws.not(5);

    var obj = {
      number: 5
    };

    var expectedIssue = {
      property: "number",
      law: "not",
      value: 5,
      details: {
        prohibited: 5
      }
    };

    expect(defendant.judge(obj)).to.eql([ expectedIssue ]);
  });

  it("returns correct issues when two children are wrong", function() {
    var defendant = new Defendant("obj");

    defendant.trial("number").laws.not(5);
    defendant.trial("text").laws.contains("foo");

    var obj = {
      number: 5,
      text: "i don't contain f-o-o"
    };

    var expectedIssueFirst = {
      property: "number",
      law: "not",
      value: 5,
      details: {
        prohibited: 5
      }
    };

    var expectedIssueSecond = {
      property: "text",
      law: "contains",
      value: "i don't contain f-o-o",
      details: {
        required: "foo"
      }
    };

    expect(defendant.judge(obj)).to.eql([ expectedIssueFirst, expectedIssueSecond ]);
  });

  it("returns correct issues when one child and two grand children are wrong", function() {
    var defendant = new Defendant("obj");

    defendant.trial("number").laws.not(5);

    var text = defendant.trial("text");

    text.trial("first").laws.not(2);
    text.trial("second").laws.minLength(4);

    var obj = {
      number: 5,
      text: {
        first: 2,
        second: "aa"
      }
    };

    var expectedIssueFirst = {
      property: "number",
      law: "not",
      value: 5,
      details: {
        prohibited: 5
      }
    };

    var expectedIssueSecond = {
      property: "first",
      law: "not",
      value: 2,
      details: {
        prohibited: 2
      }
    };

    var expectedIssueThird = {
      property: "second",
      law: "minLength",
      value: "aa",
      details: {
        minimum: 4
      }
    };

    expect(defendant.judge(obj)).to.eql([ expectedIssueFirst, expectedIssueSecond, expectedIssueThird ]);
  });
});
