///<reference path="../../../typings/jasmine/jasmine.d.ts" />

import StringLawContainerModule = require("../../../src/courtroom/laws/stringlawcontainer");

const StringLawContainer = StringLawContainerModule.StringLawContainer;

describe("StringLawContainer constructor", function() {
  it("should have count 0 when initialised", function() {
    var s = new StringLawContainer();

    expect(s.count()).toBe(0);
  });

  it("should have no juries when initialised", function() {
    var s = new StringLawContainer();

    expect(s.getJuries()).toEqual([]);
  });
});
