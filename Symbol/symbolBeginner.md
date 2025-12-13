# TypeScript Symbol Data Type - Beginner Examples

## 1. Overview

**Definition:**

* `Symbol` is a primitive and unique data type in TypeScript used to create **unique identifiers**.
* Every Symbol value is guaranteed to be unique.
* Useful as keys for object properties to avoid naming collisions.

**Key Points:**

* Cannot be created with `new Symbol()`, must call as a function: `Symbol()`.
* Each Symbol is unique even if it has the same description.
* Can have an optional description string.

---

## 2. Basic Examples

```ts
// Creating Symbols
let sym1: symbol = Symbol();
let sym2: symbol = Symbol("mySymbol");
console.log(sym1);
console.log(sym2);

// Symbols are unique
let symA: symbol = Symbol("desc");
let symB: symbol = Symbol("desc");
console.log(symA === symB); // false

// Using Symbol as object key
let obj = {
    [sym1]: "value1",
    [sym2]: "value2"
};
console.log(obj[sym1]); // value1
console.log(obj[sym2]); // value2
```

---

## 3. Notes

* Symbols are **not enumerable** in `for...in` loops.
* Use `Object.getOwnPropertySymbols(obj)` to get Symbol properties of an object.
* Each Symbol is **unique**, even with the same description string.
* Symbols are often used for **internal or private object keys** in libraries.

---

## 4. Beginner-Level Interview Questions

1. What is a Symbol in TypeScript and why is it used?
2. How do you create a Symbol?
3. Can two Symbols with the same description be equal?
4. How do you use a Symbol as an object property key?
5. Can you use `new Symbol()` to create a Symbol? Why or why not?
6. How do you retrieve all Symbol properties of an object?
7. Are Symbol properties enumerable with `for...in` loops?
8. Give a basic example of using Symbols in an object.
9. Why are Symbols considered unique?
10. Name a practical use case for Symbols in TypeScript.
