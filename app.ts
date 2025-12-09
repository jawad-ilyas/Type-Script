// ===============================
//  Primitive Types in TypeScript
// ===============================

// 1. string → used for text
let userName: string = "Jawad Mughal";

// 2. number → used for integers and decimals
let age: number = 22;

// 3. boolean → true or false values
let isActive: boolean = true;

// 4. null → intentional absence of a value
let emptyValue: null = null;

// 5. undefined → variable declared but not assigned yet
let notAssigned: undefined = undefined;

// 6. bigint → for very large numbers (beyond number limit)
// let bigNumber: bigint = 9007199254740991n;

// 7. symbol → unique and immutable values (mostly used in advanced cases)
// let uniqueId: symbol = Symbol(23);

// 8. any → disables type checking (not recommended, but exists)
let randomValue: any = "Hello";
randomValue = 100; // valid but risky

// 9. unknown → safer alternative to "any"
let safeValue: unknown = "Some text";
// safeValue.toUpperCase(); // ❌ Error: can't directly use unknown type

// 10. void → no return value (mostly used with functions)
function showMessage(): void {
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
let user: { name: string, age: number } = {
    name: "jawad",
    age: 10
}


// nested objects
let studentd: {
    name: string,
    address: {
        city: string,
        country: string
    }
} = {
    name: "jawad",
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
}


// array of th objects


let arrayOfObject: { id: number, title: string }[] = [
    { id: 1, title: "title1" },
    { id: 2, title: "title2" },
]

// types --- are used when we need to asign the alines to any thing 

type Employee = {
    id: number,
    name: string,
    role: string
}

let emp1: Employee = { id: 101, name: "Hamxa", role: "user" }


// 5 -- using interface (similer to type)


interface Car {
    brand: string,
    model: number
}

let myCar: Car = {
    brand: "toyoto",
    model: 2012,
}



// Funciton inside Object

let person = {
    name: "jawad",
    great() {
        console.log(this.name)
    }
}


// optional properties in object

let profile: { userName: string, bio?: string } = {
    userName: "jawad mughal"
}

let config: { readonly port: number } = {
    port: 3000
}




// =====================================
//      SPECIAL DATA TYPES in TypeScript
// =====================================




//  any means we can hold any values 
let randomValueChecker: any = 10
randomValueChecker = "jawad"
randomValueChecker = true



// unkown simpier to any but before use this we need to check the data tyes
let checkUnkown: unknown = "jawad"
// console.log(checkUnkown.toUpperCase()) // produced error 

if (typeof checkUnkown === "string") {
    console.log(checkUnkown.toUpperCase())
}


// void tell this function is no return 

// ? can we use the void with variabled 

function sayHelloFun2(): void {
    console.log("hello")
}
sayHelloFun2();

function erroFun(): never {
    console.log("error")
    // return 2; give error because value is return 
}

erroFun()


// =====================================
//      ADVANCE DATA TYPES in TypeScript
// =====================================


// UNION means combination of the two data types


let unionTypes: string | number = "jawad ilyas "
console.log("union types ", unionTypes)
unionTypes = 10
console.log("union types ", unionTypes)


// intersection types (T & U)
// combines multiple types

type Employees = { name: string };
type Managers = { depertement: string };

type TeamLead = Employees & Managers;
let lead: TeamLead = { name: "anil", depertement: "ics" }



// Alias 
// means create own custom data types
type Id = string | number
let userId: Id = "121212"



// enum

//  use for we need to values from this only 
enum Role {
    Admin,
    User,
    Guest
}

let userRole: Role = Role.Admin


// literals     types

// restrict the values to a spefic set

let direction: "up" | "down"
direction = "up"
direction = "down"



// function types

let add: (x: number, y: number) => number

add = (x, y) => {
    return x + y
}