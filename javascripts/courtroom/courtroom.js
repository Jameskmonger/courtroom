define(["require", "exports", "./defendant"], function (require, exports, Defendant) {
    var Courtroom = (function () {
        function Courtroom() {
            this.defendants = [];
        }
        Courtroom.prototype.trial = function (name) {
            var defendant = new Defendant.Defendant(name);
            this.defendants.push(defendant);
            return defendant;
        };
        Courtroom.prototype.getDefendantCount = function () {
            return this.defendants.length;
        };
        Courtroom.prototype.judge = function (object) {
            var issues = [];
            for (var property in object) {
                var defendant = this.defendants.filter(function (f) { return f.getName() === property; })[0];
                if (defendant !== undefined) {
                    Array.prototype.push.apply(issues, defendant.judge(object[property]));
                }
            }
            return issues;
        };
        return Courtroom;
    })();
    exports.Courtroom = Courtroom;
});
