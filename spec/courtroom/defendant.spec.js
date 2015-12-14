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

    it("has no laws", function() {
      var d = new Defendant("prop");

      expect(d.laws.count()).toBe(0);
    });
  });

  describe("Applying laws", function() {
    it("has laws count 1 when applied once", function() {
      var d = new Defendant("prop");

      d.laws.not(null);

      expect(d.laws.count()).toBe(1);
    });

    it("has laws count 2 when applied twice", function() {
      var d = new Defendant("prop");

      d.laws.not(null);
      d.laws.not(null);

      expect(d.laws.count()).toBe(2);
    });
  });
});
