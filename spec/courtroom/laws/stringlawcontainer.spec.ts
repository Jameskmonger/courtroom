///<reference path="../../../typings/jasmine/jasmine.d.ts" />

import LawContainerModule = require("../../../src/courtroom/laws/lawcontainer");
import StringLawContainerModule = require("../../../src/courtroom/laws/stringlawcontainer");

const StringLawContainer = StringLawContainerModule.StringLawContainer;

describe("StringLawContainer constructor", function() {
  it("should be of type LawContainer", function() {
    var s = new StringLawContainer();

    expect(s instanceof (<any>LawContainerModule).LawContainer).toBe(true);
  });

  it("should have count 0 when initialised", function() {
    var s = new StringLawContainer();

    expect(s.count()).toBe(1);
  });
});
