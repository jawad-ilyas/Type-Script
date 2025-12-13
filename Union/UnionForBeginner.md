# TypeScript Union Types – Beginner Guide

This guide covers **beginner-level usage of union types in TypeScript**, including definitions, examples, and interview questions.

---

## 1. What is a Union Type?

* **Definition:** A union type allows a variable to hold **values of multiple types**.
* **Syntax:** Use the pipe `|` symbol to separate types.

```ts
let value: string | number;

value = "Hello"; // ✅ valid
value = 42;       // ✅ valid
// value = true;  // ❌ invalid, boolean is not allowed
```

* Useful when a variable can have **more than one possible type**

---

## 2. Union Types with Functions

* Functions can accept **multiple types as parameters**

```ts
function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
}

printId("abc123"); // Your ID is: abc123
printId(101);       // Your ID is: 101
```

* TypeScript **checks all possible types** during compilation

---

## 3. Type Narrowing with Union Types

* Use **type checks** to handle each type safely

```ts
function formatValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

formatValue("hello"); // HELLO
formatValue(123.456);  // 123.46
```

* This is called **type narrowing** and prevents runtime errors

---

## 4. Union Types with Arrays and Objects

```ts
// Array of multiple types
let mixedArray: (string | number)[] = ["Jawad", 25, "Ali", 30];
console.log(mixedArray);

// Object with union property
let user: { name: string; id: string | number } = { name: "Ali", id: 101 };
console.log(user);
```

* Provides **flexibility while keeping type safety**

---

## 5. Best Practices

1. Always use **type narrowing** when working with unions
2. Use **union types** for variables that can have multiple types
3. Avoid overusing unions with too many types, as it may reduce readability
4. Combine with **type aliases** for complex unions

```ts
type ID = string | number;
let userId: ID;
userId = 123;
userId = "abc";
```

---

## 6. Beginner Interview Questions

1. What is a union type in TypeScript?
2. How do you declare a variable that can hold multiple types?
3. How do you safely work with union types?
4. Give an example of a function parameter with a union type.
5. Can arrays or objects have union types?
6. Why is type narrowing important with union types?

---

## Summary

* Union types allow variables to hold **more than one type**
* Use **type narrowing** and **type aliases** for safety and readability
* Beginner-level union types prepare for **intermediate and expert usage** in functions, arrays, and objects
