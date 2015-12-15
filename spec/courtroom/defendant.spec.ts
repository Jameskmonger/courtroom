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

    expect(d.laws.count()).toBe(0);
  });
});

describe("Applying laws", function() {
  it("has laws count 1 when match.not applied once", function() {
    var d = new Defendant("prop");

    d.laws.match.not(null);

    expect(d.laws.count()).toBe(1);
  });

  it("has laws count 2 when match.not applied twice", function() {
    var d = new Defendant("prop");

    d.laws.match.not(null);
    d.laws.match.not(null);

    expect(d.laws.count()).toBe(2);
  });

  it("has laws count 1 when match.is applied once", function() {
    var d = new Defendant("prop");

    d.laws.match.is(null);

    expect(d.laws.count()).toBe(1);
  });

  it("has laws count 2 when match.is applied twice", function() {
    var d = new Defendant("prop");

    d.laws.match.is(null);
    d.laws.match.is(null);

    expect(d.laws.count()).toBe(2);
  });
});
