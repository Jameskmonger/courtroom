define(['Courtroom/courtroom'], function(Courtroom) {
  Courtroom = Courtroom.Courtroom;

  describe("Construction", function() {
    it("does not throw an error", function() {
      expect(function() {
        new Courtroom();
      }).not.toThrowError();
    });
  });
});
