define(['../../build/courtroom'], function(CourtroomValidation) {
  var Courtroom = CourtroomValidation.Courtroom;

  describe("Constructor", function() {
    it("does not have any defendants", function() {
      var courtroom = new Courtroom();

      expect(courtroom.defendantCount).toBe(0);
    });
  });

  describe("Trial", function() {
    it("has one defendant when one is trialled", function() {
      var courtroom = new Courtroom();

      courtroom.trial("num");

      expect(courtroom.defendantCount).toBe(1);
    });
  });
});
