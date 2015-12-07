define(['Courtroom/courtroom'], function(Courtroom) {
  Courtroom = Courtroom.Courtroom;

  describe("Construction", function() {
    it("does not throw an error", function() {
      expect(function() {
        new Courtroom();
      }).not.toThrowError();
    });

    it("does not have validated properties", function() {
      var c = new Courtroom();

      expect(c.hasProperties()).toBe(false);
    })
  });

  describe("Construction with one rule", function() {
    it("has validated properties", function() {
      var c = new Courtroom();

      c.trial("cheese");

      expect(c.hasProperties()).toBe(false);
    });
  });
});
