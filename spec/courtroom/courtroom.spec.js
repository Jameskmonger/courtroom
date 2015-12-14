define(['../../build/courtroom'], function(CourtroomValidation) {
  var Courtroom = CourtroomValidation.Courtroom;

  describe("Courtroom Constructor", function() {
    it("does not have any defendants", function() {
      var courtroom = new Courtroom();

      expect(courtroom.getDefendantCount()).toBe(0);
    });
  });

  describe("Place property on trial", function() {
    it("should have one defendant when one trialled", function() {
      var courtroom = new Courtroom();

      courtroom.trial("prop");

      expect(courtroom.getDefendantCount()).toBe(1);
    });

    it("should have two defendants when two trialled", function() {
      var courtroom = new Courtroom();

      courtroom.trial("prop");
      courtroom.trial("anotherprop");

      expect(courtroom.getDefendantCount()).toBe(2);
    });
  });
});
