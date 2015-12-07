define(['courtroom'], function(Courtroom) {
  Courtroom = Courtroom.Courtroom;

  describe("Hello world", function() {
    it("says hello", function() {
      var c = new Courtroom();

      expect(c.helloWorld()).toEqual("Hello world!");
    });
  });
});
