///<reference path="../../../typings/jasmine/jasmine.d.ts" />

import CourtroomModule = require("../../../src/courtroom/courtroom");
const Courtroom = CourtroomModule.Courtroom;

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
});
