"use strict";
// // ===============================
// //  TypeScript Data Types Examples (Beginner Version)
// // ===============================
Object.defineProperty(exports, "__esModule", { value: true });
// // ===============================
// //  Primitive Data Types
// // ===============================
// /*
// number, string, boolean, undefined, null, symbol, bigint
// */
// // number
// let ages: number = 120;
// console.log(ages);
// // string
// let names: string = "jawad";
// console.log(names);
// // boolean
// let flags: boolean = true;
// console.log("boolean example", flags);
// // ===============================
// // undefined (Beginner Example)
// // ===============================
// // undefined means the variable is declared but no value assigned yet
// let undefinedVariable: undefined = undefined;
// console.log("undefined variable:", undefinedVariable);
// // ===============================
// // null (Beginner Example)
// // ===============================
// // null means the variable is intentionally empty or has no value
// let nullVariable: null = null;
// console.log("null variable:", nullVariable);
// // symbol
// // ❗ tsconfig target must be ES2015 or higher
// let id: symbol = Symbol(121212);
// console.log("symbol examples ", id);
// // bigint
// // ❗ tsconfig target must be ES2020 or higher
// let numberBigInt: bigint = 1212121212121212983129812931293129312931298n;
// console.log("big int number ", numberBigInt);
// // ===============================
// //  Object Data Types
// // ===============================
// // Tuples (fixed types and positions)
// let employeeTuple: [string, number];
// employeeTuple = ['jawad', 12];
// console.log(employeeTuple[0]);
// console.log(employeeTuple[1]);
// let employeeTuple2: [string, number, boolean];
// employeeTuple2 = ["jawad", 12, false];
// console.log(employeeTuple2[0]);
// console.log(employeeTuple2[1]);
// console.log(employeeTuple2[2]);
// let optionalTuple: [string, number?];
// optionalTuple = ['jawad'];
// optionalTuple = ['jawad', 12];
// // Arrays
// let arrayOfNumbers: number[];
// arrayOfNumbers = [1, 2, 3];
// console.log(arrayOfNumbers[0]);
// console.log(arrayOfNumbers[1]);
// console.log(arrayOfNumbers[2]);
// let arrayOfStrings: string[];
// arrayOfStrings = ["jawad", "ilyas", "mughal"];
// console.log(arrayOfStrings[0]);
// console.log(arrayOfStrings[1]);
// console.log(arrayOfStrings[2]);
// // Objects
// let users: { name: string, age: number } = { name: "jawad", age: 12 };
// console.log(users.name);
// console.log(users.age);
// // ===============================
// //  Special Data Types
// // ===============================
// // void - function returns nothing
// function hellos(): void {
// console.log("jawad void example");
// }
// hellos();
// // never - function never returns (throws error)
// function errorFun(): never {
// throw new Error("This function never returns");
// }
// // errorFun(); // Uncommenting will terminate program
// // any - can hold any value
// let anyTypeTesting: any = 12;
// console.log(anyTypeTesting);
// anyTypeTesting = "jawad";
// console.log(anyTypeTesting);
// // unknown - must check type before using
// let checkUnknownVariable: unknown = "testing unknown";
// if (typeof checkUnknownVariable === "string") {
// console.log(checkUnknownVariable.toUpperCase());
// }
// // ===============================
// //  Advanced Data Types
// // ===============================
// // enum
// enum City { Lahore, Karachi, Islamabad }
// let userCity: City = City.Lahore;
// console.log(userCity);
// // literal types
// let directions: "up" | "down";
// directions = 'down';
// console.log(directions);
// // union types
// let unionExample: string | number = "jawad";
// unionExample = 10;
// console.log(unionExample);
// // intersection types
// type EmployeesType = { name: string };
// type Managers = { department: string };
// type TeamLead = EmployeesType & Managers;
// let lead: TeamLead = { name: "jawad", department: 'ITC' };
// console.log(lead);
// // type alias
// type Id = string | number;
// let userId: Id = "121212";
// console.log(userId);
// // function types
// let sum: (x: number, y: number) => number;
// sum = (x, y) => x + y;
// console.log(sum(5, 10));
//# sourceMappingURL=NullAndUndefined.js.map