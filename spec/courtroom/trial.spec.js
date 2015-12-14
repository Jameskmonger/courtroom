define(['../../build/trial'], function(TrialModule) {
  var Trial = TrialModule.Trial;

  describe("Trial Constructor", function() {
    it("stores the name correctly for 'property'", function() {
      var expectedName = "property";

      var t = new Trial(expectedName);

      expect(t.getName()).toBe(expectedName);
    });

    it("stores the name correctly for 'value'", function() {
      var expectedName = "value";

      var t = new Trial(expectedName);

      expect(t.getName()).toBe(expectedName);
    });

    it("has no accusations", function() {
      var t = new Trial("prop");

      expect(t.getAccusations().length).toBe(0);
    });
  });
});
