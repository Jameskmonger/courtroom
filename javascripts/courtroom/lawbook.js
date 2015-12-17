define(["require", "exports", "./juries/notjury", "./juries/isjury", "./juries/string.contains.jury", "./juries/string.maxLength.jury", "./juries/string.minLength.jury"], function (require, exports, NotJury, IsJury, StringContainsJury, StringMaxLengthJury, StringMinLengthJury) {
    var Lawbook = (function () {
        function Lawbook() {
            this.juries = [];
        }
        Lawbook.prototype.not = function (compare) {
            this.juries.push(new NotJury.NotJury(compare));
            return this;
        };
        Lawbook.prototype.is = function (compare) {
            this.juries.push(new IsJury.IsJury(compare));
            return this;
        };
        Lawbook.prototype.contains = function (requirement) {
            this.juries.push(new StringContainsJury.ContainsJury(requirement));
            return this;
        };
        Lawbook.prototype.minLength = function (min) {
            this.juries.push(new StringMinLengthJury.MinLengthJury(min));
            return this;
        };
        Lawbook.prototype.maxLength = function (max) {
            this.juries.push(new StringMaxLengthJury.MaxLengthJury(max));
            return this;
        };
        Lawbook.prototype.getJuryCount = function () {
            return (this.juries.length);
        };
        Lawbook.prototype.getJuries = function () {
            return this.juries;
        };
        return Lawbook;
    })();
    exports.Lawbook = Lawbook;
});
