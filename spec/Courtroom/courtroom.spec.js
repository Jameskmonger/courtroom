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

      expect(c.getValidatedProperties().length).toBe(0);
    })
  });
});
