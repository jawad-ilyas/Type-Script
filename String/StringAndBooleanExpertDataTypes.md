// 🧠 TypeScript Expert Guide — String & Boolean Data Types + Advanced Interview Questions
// This file contains expert-level concepts for string & boolean types in TypeScript
// Interview questions are included as comments

// ------------------------------
// 1. ADVANCED STRING TECHNIQUES
// ------------------------------

// 1.1 Template Literals & Expressions
let firstName: string = "Jawad";
let age: number = 25;
let message: string = `Hello ${firstName.toUpperCase()}, next year you will be ${age + 1}.`;
console.log(message); // Hello JAWAD, next year you will be 26.

/*
Interview Q: How do template literals improve complex string generation?
A: Allow embedding expressions ${...}, multi-line strings, and dynamic computation.
*/

// 1.2 Multi-line & Dynamic Strings
let items: string[] = ["Laptop", "Phone", "Tablet"];
let listMessage = `Available items:
${items.map((item, index) => `${index + 1}. ${item}`).join("\n")}`;
console.log(listMessage);

// 1.3 String Union & Literal Types
type Direction = "left" | "right" | "up" | "down";
let move: Direction = "up";

type Status = "success" | "error" | "loading";
let operationStatus: Status = "loading";

/*
Interview Q: How do string literal types enhance type safety?
A: They restrict a variable to predefined string values at compile time, preventing runtime errors.
*/

// 1.4 Advanced String Methods
let text: string = "TypeScript Expert Guide";
console.log(text.includes("Expert"));     // true
console.log(text.replace("Guide", "Manual")); // TypeScript Expert Manual
console.log(text.slice(0, 10));           // TypeScript
console.log(text.split(" "));             // ["TypeScript", "Expert", "Guide"]

// ------------------------------
// 2. BOOLEAN NUANCES
// ------------------------------

// 2.1 Boolean Expressions & Strict Typing
let isAdult: boolean = age >= 18;
let isLoggedIn: boolean = true;
console.log(isAdult && isLoggedIn); // true

// 2.2 Truthy/Falsy Checks
let value: any = 0;
if (!!value) console.log("Truthy"); else console.log("Falsy"); // Falsy

// 2.3 Common Pitfalls
// Avoid Boolean wrapper object
let active: Boolean = true; // ❌ Avoid
let activeFlag: boolean = true; // ✔ Correct

/*
Interview Q: Explain the difference between boolean and Boolean in TypeScript.
A: boolean is a primitive type; Boolean is an object wrapper. Avoid objects for type safety.
*/

// ------------------------------
// 3. COMBINED STRING & BOOLEAN EXAMPLES
// ------------------------------

// Conditional Messages
let username: string = "Jawad";
let loggedIn: boolean = true;
console.log(loggedIn ? `Welcome ${username.toUpperCase()}!` : "Please log in.");

// Status-based Logic
let status: "success" | "error" = "success";
let showMessage: boolean = status === "success";
if (showMessage) console.log(`Operation ${status}`); // Operation success

// ------------------------------
// 4. TYPE CONVERSIONS
// ------------------------------

// Number → String
let num: number = 456;
let strNum: string = num.toString();

// Boolean → String
let flag: boolean = false;
let strFlag: string = `${flag}`; // "false"

/*
Interview Q: Can a string act as a boolean?
A: No, TypeScript is strictly typed. You can use !!value for truthy/falsy checks, but the type must be boolean.
*/
