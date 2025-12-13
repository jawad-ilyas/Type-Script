var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labStaff"] = "labStaff";
})(whoType || (whoType = {}));
var who = whoType.teacher;
// who = "jawad" // giving error because we not select the value from teh enum case 
// if in enum we not asign return the index values
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["developer"] = 1] = "developer";
    Roles[Roles["manager"] = 2] = "manager";
})(Roles || (Roles = {}));
console.log(Roles);
console.log(Roles === null || Roles === void 0 ? void 0 : Roles.admin);
