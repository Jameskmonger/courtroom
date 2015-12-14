define(['../../../build/juries/notjury'], function(NotJuryModule) {
  var NotJury = NotJuryModule.NotJury;

  describe("NotJury verdict tests (null and undefined)", function() {
    it("should return 'true' when not null and checking for not null", function() {
      var a = new NotJury(null);

      expect(a.verdict(5)).toBe(true);
    });

    it("should return 'false' when null and checking for not null", function() {
      var a = new NotJury(null);

      expect(a.verdict(null)).toBe(false);
    });

    it("should return 'true' when not undefined and checking for not undefined", function() {
      var a = new NotJury(undefined);

      expect(a.verdict(17)).toBe(true);
    });

    it("should return 'false' when undefined and checking for not undefined", function() {
      var a = new NotJury(undefined);

      expect(a.verdict(undefined)).toBe(false);
    });
  });
});
