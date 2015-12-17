define(["require", "exports"], function (require, exports) {
    var MinLengthJury = (function () {
        function MinLengthJury(min) {
            this.min = min;
        }
        MinLengthJury.prototype.verdict = function (defendant) {
            return (defendant.length >= this.min);
        };
        MinLengthJury.prototype.getName = function () {
            return "string.minLength";
        };
        MinLengthJury.prototype.getDetails = function () {
            return {
                minimum: this.min
            };
        };
        return MinLengthJury;
    })();
    exports.MinLengthJury = MinLengthJury;
});
