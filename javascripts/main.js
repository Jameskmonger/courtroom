require(["courtroom/courtroom"], function(CourtroomModule) {
  "use strict";

  const Courtroom = CourtroomModule.Courtroom;

  var c = new Courtroom();
  setupLaws();
  setupListeners();
  judge();

  function updateStatuses(issues) {
    var statuses = { "min_5": 0, "max_5": 0, "contains_hello": 0, "equals_james": 0, "not_equals_paulo": 0, "between_5_10": 0, "contains_james_space_monger": 0 };

    for (var i in issues) {
      statuses[issues[i].property] = 1;
    }

    for (var s in statuses) {
      if (statuses[s] === 1) {
        document.querySelector("div#" + s).querySelector("img").src = "images/failed.png";
      } else {
        document.querySelector("div#" + s).querySelector("img").src = "images/success.png";
      }

      document.querySelector("div#" + s).querySelector("img").style.cssText = "display: inline;";
    }
  }

  function judge() {
    var inputs = {
      min_5: document.querySelector("div#min_5").querySelector("input").value,
      max_5: document.querySelector("div#max_5").querySelector("input").value,
      contains_hello: document.querySelector("div#contains_hello").querySelector("input").value,
      equals_james: document.querySelector("div#equals_james").querySelector("input").value,
      not_equals_paulo: document.querySelector("div#not_equals_paulo").querySelector("input").value,
      between_5_10: document.querySelector("div#between_5_10").querySelector("input").value,
      contains_james_space_monger: document.querySelector("div#contains_james_space_monger").querySelector("input").value
    };

    var issues = c.judge(inputs);

    updateStatuses(issues);
  }

  function setupListeners() {
    document.querySelector("div#min_5").querySelector("input").oninput = function() { judge(); };
    document.querySelector("div#max_5").querySelector("input").oninput = function() { judge(); };
    document.querySelector("div#contains_hello").querySelector("input").oninput = function() { judge(); };
    document.querySelector("div#equals_james").querySelector("input").oninput = function() { judge(); };
    document.querySelector("div#not_equals_paulo").querySelector("input").oninput = function() { judge(); };
    document.querySelector("div#between_5_10").querySelector("input").oninput = function () { judge(); };
    document.querySelector("div#contains_james_space_monger").querySelector("input").oninput = function () { judge(); };
  }

  function setupLaws() {
    c.trial("min_5").laws.minLength(5);
    c.trial("max_5").laws.maxLength(5);
    c.trial("contains_hello").laws.contains("hello");
    c.trial("equals_james").laws.is("james");
    c.trial("not_equals_paulo").laws.not("paulo");
    c.trial("between_5_10").laws.minLength(5).maxLength(10);
    c.trial("contains_james_space_monger").laws.contains("james").contains(" ").contains("monger");
  }
});
