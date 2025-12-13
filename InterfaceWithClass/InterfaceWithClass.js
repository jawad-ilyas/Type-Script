var CollageData = /** @class */ (function () {
    function CollageData(name) {
        this.name = name;
    }
    CollageData.prototype.dispayTeacherName = function () {
        console.log("jawad", "ilyas");
    };
    CollageData.prototype.getStudentName = function () {
        return ["jawad", "ilyas + | ", "mughal"];
    };
    return CollageData;
}());
var collage1 = new CollageData("ucp");
collage1.dispayTeacherName();
console.log(collage1.getStudentName());
