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

    it("should return defendant with correct name for 'prop'", function() {
      var expectedName = "prop";

      var courtroom = new Courtroom();

      var prop = courtroom.trial(expectedName);

      expect(prop.getName()).toBe(expectedName);
    });

    it("should return defendant with correct name for 'anotherprop'", function() {
      var expectedName = "anotherprop";

      var courtroom = new Courtroom();

      var prop = courtroom.trial(expectedName);

      expect(prop.getName()).toBe(expectedName);
    });
  });
});
