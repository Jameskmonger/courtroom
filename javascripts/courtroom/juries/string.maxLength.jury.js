define(["require", "exports"], function (require, exports) {
    var MaxLengthJury = (function () {
        function MaxLengthJury(max) {
            this.max = max;
        }
        MaxLengthJury.prototype.verdict = function (defendant) {
            return (defendant.length <= this.max);
        };
        MaxLengthJury.prototype.getName = function () {
            return "string.maxLength";
        };
        MaxLengthJury.prototype.getDetails = function () {
            return {
                maximum: this.max
            };
        };
        return MaxLengthJury;
    })();
    exports.MaxLengthJury = MaxLengthJury;
});
