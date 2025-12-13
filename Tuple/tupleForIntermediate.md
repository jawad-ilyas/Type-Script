# TypeScript Tuples – Intermediate Guide

This guide covers **intermediate-level usage of tuples in TypeScript**, including union types, nested tuples, and common patterns.

---

## 1. Tuples with Union Types

* You can allow multiple types for elements using **union types**

```ts
let mixedTuple: [string | number, boolean] = ["Jawad", true];
mixedTuple = [25, false]; // ✅ Allowed
```

---

## 2. Nested Tuples

* Tuples can contain other tuples or arrays

```ts
let nestedTuple: [string, [number, number]];
nestedTuple = ["coordinates", [10, 20]];
console.log(nestedTuple[0]); // coordinates
console.log(nestedTuple[1][0]); // 10
console.log(nestedTuple[1][1]); // 20
```

---

## 3. Readonly Tuples

* Prevent modification of tuple elements

```ts
let readonlyTuple: readonly [string, number] = ["Jawad", 25];
// readonlyTuple[1] = 30; // ❌ Error
```

---

## 4. Tuples with Optional Elements

* Optional elements can be used for more flexible tuples

```ts
let optionalTuple: [string, number?];
optionalTuple = ["Jawad"];
optionalTuple = ["Jawad", 25];
```

---

## 5. Tuple Destructuring

```ts
let employee: [string, number, boolean] = ["Ali", 30, true];
let [name, age, isActive] = employee;
console.log(name, age, isActive); // Ali 30 true
```

---

## 6. Tuples in Functions

* Useful for returning multiple values with different types

```ts
function getEmployee(): [string, number] {
  return ["Jawad", 25];
}

let [empName, empAge] = getEmployee();
console.log(empName, empAge); // Jawad 25
```

---

## 7. Common Intermediate Mistakes

❌ Assigning wrong types in union tuples
❌ Modifying readonly tuples
❌ Ignoring nested tuples type

---

## 8. Best Practices

* Always define **types and order** of elements
* Use **readonly** for immutable tuples
* Consider **nested tuples** for structured data
* Prefer returning tuples from functions instead of arrays for multiple typed values

---

## 9. Intermediate Interview Questions

1. How do union types work in tuples?
2. How do you define a nested tuple?
3. What is a readonly tuple and when would you use it?
4. How do optional tuple elements work?
5. How can you destructure a tuple?
6. When would you use a tuple in a function return?
7. Difference between tuple and array at intermediate level?

---

## Summary

* Intermediate tuples include **union types, optional elements, readonly tuples, nested tuples, and destructuring**
* Useful for structured data and function return types
* Prepares you for **expert-level tuple features like rest eleme
