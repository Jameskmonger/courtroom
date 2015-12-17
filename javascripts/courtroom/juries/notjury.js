define(["require", "exports"], function (require, exports) {
    var NotJury = (function () {
        function NotJury(compare) {
            this.compare = compare;
        }
        NotJury.prototype.verdict = function (defendant) {
            return (defendant !== this.compare);
        };
        NotJury.prototype.getName = function () {
            return "match.not";
        };
        NotJury.prototype.getDetails = function () {
            return {
                prohibited: this.compare
            };
        };
        return NotJury;
    })();
    exports.NotJury = NotJury;
});
