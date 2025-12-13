// class Student {
//     constructor(){
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     }
//     login (name : string , password : string)
//     {
//         if(name && password)
//         {
//             return "student login "
//         }
//         else {
//             return "student not login or any error "
//         }
//     }
//     result ( marks : number) {
//         if(marks > 33)
//         {
//             return "Pass"
//         }
//         else {
//             return "failed"
//         }
//     }
// }
// class Teacher {
//     constructor(){
//     }
//     login (name : string , password : string)
//     {
//         if(name && password)
//         {
//             return "student login "
//         }
//         else {
//             return "student not login or any error "
//         }
//     }
//     subject ( subName : string) : string {
//         if(subName )
//         {
//             return "subName"
//         }
//         else {
//             return "pass the subject"
//         }
//     }
// }
// let student = new Student()
// let teacher = new Teacher()
// // but issue is this both class using the string , but now we can use inheritance and extens them 
// student.login("jawad" ,"1212")
// teacher.login("t1" ,"1212")
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.login = function (name, password) {
        if (name && password) {
            return "".concat(name, " is this");
        }
        else {
            return "student not login or any error ";
        }
    };
    return Auth;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super.call(this) || this;
    }
    Student.prototype.result = function (marks) {
        if (marks > 33) {
            return "Pass";
        }
        else {
            return "failed";
        }
    };
    return Student;
}(Auth));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super.call(this) || this;
    }
    Teacher.prototype.subject = function (subName) {
        if (subName) {
            return "subName";
        }
        else {
            return "pass the subject";
        }
    };
    return Teacher;
}(Auth));
var student = new Student();
var teacher = new Teacher();
// /now both using the login method but extens from the other class
console.log(student.login("jawad", "1212"));
console.log(teacher.login("t1", "1212"));
