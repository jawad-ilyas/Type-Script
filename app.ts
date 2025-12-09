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