// ===============================
//  Primitive Types in TypeScript
// ===============================
// 1. string → used for text
var userName = "Jawad Mughal";
// 2. number → used for integers and decimals
var age = 22;
// 3. boolean → true or false values
var isActive = true;
// 4. null → intentional absence of a value
var emptyValue = null;
// 5. undefined → variable declared but not assigned yet
var notAssigned = undefined;
// 6. bigint → for very large numbers (beyond number limit)
// let bigNumber: bigint = 9007199254740991n;
// 7. symbol → unique and immutable values (mostly used in advanced cases)
// let uniqueId: symbol = Symbol(23);
// 8. any → disables type checking (not recommended, but exists)
var randomValue = "Hello";
randomValue = 100; // valid but risky
// 9. unknown → safer alternative to "any"
var safeValue = "Some text";
// safeValue.toUpperCase(); // ❌ Error: can't directly use unknown type
// 10. void → no return value (mostly used with functions)
function showMessage() {
    console.log("This function returns nothing!");
}
// Print values to verify
console.log(userName);
console.log(age);
console.log(isActive);
console.log(emptyValue);
console.log(notAssigned);
// console.log(bigNumber);
// console.log(uniqueId);
console.log(randomValue);
console.log(safeValue);
showMessage();
// =====================================
//   OBJECT DATA TYPES in TypeScript
// =====================================
// object literals
var user = {
    name: "jawad",
    age: 10
};
// nested objects
var studentd = {
    name: "jawad",
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
};
// array of th objects
var arrayOfObject = [
    { id: 1, title: "title1" },
    { id: 2, title: "title2" },
];
var emp1 = { id: 101, name: "Hamxa", role: "user" };
var myCar = {
    brand: "toyoto",
    model: 2012,
};
// Funciton inside Object
var person = {
    name: "jawad",
    great: function () {
        console.log(this.name);
    }
};
// optional properties in object
var profile = {
    userName: "jawad mughal"
};
var config = {
    port: 3000
};
// =====================================
//      SPECIAL DATA TYPES in TypeScript
// =====================================
//  any means we can hold any values 
var randomValueChecker = 10;
randomValueChecker = "jawad";
randomValueChecker = true;
// unkown simpier to any but before use this we need to check the data tyes
var checkUnkown = "jawad";
// console.log(checkUnkown.toUpperCase()) // produced error 
if (typeof checkUnkown === "string") {
    console.log(checkUnkown.toUpperCase());
}
// void tell this function is no return 
// ? can we use the void with variabled 
function sayHelloFun2() {
    console.log("hello");
}
sayHelloFun2();
function erroFun() {
    console.log("error");
    // return 2; give error because value is return 
}
erroFun();
// =====================================
//      ADVANCE DATA TYPES in TypeScript
// =====================================
// UNION means combination of the two data types
var unionTypes = "jawad ilyas ";
console.log("union types ", unionTypes);
unionTypes = 10;
console.log("union types ", unionTypes);
var lead = { name: "anil", depertement: "ics" };
var userId = "121212";
// enum
//  use for we need to values from this only 
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
// literals     types
// restrict the values to a spefic set
var direction;
direction = "up";
direction = "down";
// function types
var add;
add = function (x, y) {
    return x + y;
};
