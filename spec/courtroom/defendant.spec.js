define(['../../build/defendant'], function(DefendantModule) {
  var Defendant = DefendantModule.Defendant;

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

    it("has no accusations", function() {
      var d = new Defendant("prop");

      expect(d.getAccusations().length).toBe(0);
    });
  });

  describe("Applying accusations", function() {
    it("has accusation count 1 when applied once", function() {
      var d = new Defendant("prop");

      d.accuse.not(null);

      expect(d.getAccusations().length).toBe(1);
    });

    it("has accusation count 1 when applied once", function() {
      var d = new Defendant("prop");

      d.accuse.not(null);

      expect(d.getAccusations().length).toBe(1);
    });
  });
});
