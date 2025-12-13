# TypeScript Any and Unknown – Beginner Guide

This guide covers **beginner-level usage of `any` and `unknown` types in TypeScript**, including definitions, examples, and interview questions.

---

## 1. The `any` Type

* **Definition:** The `any` type allows a variable to hold **any type of value**.
* **Usage:** Use `any` when you do not know the type in advance or want to bypass type checking.

```ts
let anyVar: any;
anyVar = 10;
console.log(anyVar); // 10
anyVar = "Hello";
console.log(anyVar); // Hello
anyVar = true;
console.log(anyVar); // true
```

* **Note:** Using `any` disables type checking, which may lead to runtime errors. It should be used sparingly.

---

## 2. The `unknown` Type

* **Definition:** `unknown` is a safer alternative to `any`. You can assign any value to an `unknown` variable, but you **cannot use it without type checking**.

```ts
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "Hello";
unknownVar = true;

// console.log(unknownVar.toUpperCase()); // ❌ Error

if (typeof unknownVar === "string") {
  console.log(unknownVar.toUpperCase()); // ✅ Works after type check
}
```

* **Key Point:** TypeScript forces you to **check the type** before performing operations on `unknown`.

---

## 3. Differences between `any` and `unknown`

| Feature       | any                            | unknown                           |
| ------------- | ------------------------------ | --------------------------------- |
| Type Safety   | No                             | Yes, must check type              |
| Assignable To | Any type                       | Only assignable to unknown or any |
| Use Case      | Quick bypass of type system    | Safe handling of unknown values   |
| Risk          | High, may cause runtime errors | Low, forces type checks           |

---

## 4. Examples with Functions

```ts
function printAny(val: any) {
  console.log(val);
}
printAny(10);
printAny("Hello");

function printUnknown(val: unknown) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log("Not a string");
  }
}
printUnknown(10); // Not a string
printUnknown("hello"); // HELLO
```

---

## 5. Best Practices

1. Avoid using `any` unless absolutely necessary.
2. Prefer `unknown` when you expect dynamic or external input.
3. Always **check types** before performing operations on `unknown` variables.
4. Use `any` only for **quick prototyping**.

---

## 6. Beginner Interview Questions

1. What is the `any` type in TypeScript?
2. How does `unknown` differ from `any`?
3. Why is `unknown` considered safer than `any`?
4. How do you perform operations on an `unknown` type?
5. Can you assign an `unknown` variable to a string directly?
6. When should you use `any` vs `unknown`?

---

## Summary

* `any` allows **any type and disables type checking**
* `unknown` allows **any type but requires type checking before usage**
* Beginner-level understanding prepares for **intermediate and expert handling of dynamic values and safe type checks**
