define(['../../build/trial'], function(TrialModule) {
  var Trial = TrialModule.Trial;

  describe("Constructor", function() {
    it("has no accusations", function() {
      var t = new Trial("prop");

      expect(t.getAccusations().length).toBe(0);
    });
  });
});
