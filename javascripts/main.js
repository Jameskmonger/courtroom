require(["courtroom/courtroom"], function(CourtroomModule) {
  "use strict";

  const Courtroom = CourtroomModule.Courtroom;

  var c = new Courtroom();
  c.trial("min_5").laws.minLength(5);
  c.trial("max_5").laws.maxLength(5);
  c.trial("contains_hello").laws.contains("hello");
  c.trial("equals_james").laws.is("james");
  c.trial("not_equals_paulo").laws.not("paulo");

});
