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
});
