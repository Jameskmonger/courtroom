define(['../../build/courtroom'], function(CourtroomValidation) {
  var Courtroom = CourtroomValidation.Courtroom;

  describe("Constructor", function() {
    it("does not have any defendants", function() {
      var courtroom = new Courtroom();

      expect(courtroom.defendantCount).toBe(0);
    });
  });
});
