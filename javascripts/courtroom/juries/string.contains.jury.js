define(["require", "exports"], function (require, exports) {
    var ContainsJury = (function () {
        function ContainsJury(contain) {
            this.contain = contain;
        }
        ContainsJury.prototype.verdict = function (defendant) {
            return (defendant.indexOf(this.contain) !== -1);
        };
        ContainsJury.prototype.getName = function () {
            return "string.contains";
        };
        ContainsJury.prototype.getDetails = function () {
            return {
                required: this.contain
            };
        };
        return ContainsJury;
    })();
    exports.ContainsJury = ContainsJury;
});
