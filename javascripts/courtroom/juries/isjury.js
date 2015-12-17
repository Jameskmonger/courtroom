define(["require", "exports"], function (require, exports) {
    var IsJury = (function () {
        function IsJury(compare) {
            this.compare = compare;
        }
        IsJury.prototype.verdict = function (defendant) {
            return (defendant === this.compare);
        };
        IsJury.prototype.getName = function () {
            return "match.is";
        };
        IsJury.prototype.getDetails = function () {
            return {
                expected: this.compare
            };
        };
        return IsJury;
    })();
    exports.IsJury = IsJury;
});
