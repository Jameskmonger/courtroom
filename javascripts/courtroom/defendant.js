define(["require", "exports", "./lawbook"], function (require, exports, Lawbook) {
    var Defendant = (function () {
        function Defendant(name) {
            this.name = name;
            this.laws = new Lawbook.Lawbook();
        }
        Defendant.prototype.getName = function () {
            return this.name;
        };
        Defendant.prototype.judge = function (value) {
            var issues = [];
            for (var _i = 0, _a = this.laws.getJuries(); _i < _a.length; _i++) {
                var jury = _a[_i];
                var complies = jury.verdict(value);
                if (!complies) {
                    var issue = {
                        property: this.getName(),
                        jury: jury.getName(),
                        value: value,
                        details: jury.getDetails()
                    };
                    issues.push(issue);
                }
            }
            return issues;
        };
        return Defendant;
    })();
    exports.Defendant = Defendant;
});
