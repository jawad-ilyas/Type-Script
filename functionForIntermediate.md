# TypeScript Function Return Types – Intermediate Guide

This guide covers **intermediate-level usage of function return types in TypeScript**, including advanced typing, generics, union types, and asynchronous functions.

---

## 1. Union Return Types

* Functions can return multiple types using **union types**

```ts
function formatInput(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toString();
}

console.log(formatInput("hello")); // HELLO
console.log(formatInput(123));     // 123
```

---

## 2. Generic Return Types

* Use **generics** for reusable functions

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Jawad")); // Jawad
console.log(identity<number>(42));      // 42
```

---

## 3. Functions Returning Arrays

```ts
function getNumbers(): number[] {
  return [1, 2, 3, 4];
}

const numbers = getNumbers();
console.log(numbers[0]); // 1
```

---

## 4. Functions Returning Objects

* Use **type alias** for clarity

```ts
type User = { name: string; age: number };

function getUser(): User {
  return { name: "Ali", age: 30 };
}

const user = getUser();
console.log(user.name, user.age); // Ali 30
```

---

## 5. Functions Returning Tuples

```ts
function getTuple(): [string, number] {
  return ["Jawad", 25];
}

const tuple = getTuple();
console.log(tuple[0], tuple[1]); // Jawad 25
```

---

## 6. Asynchronous Functions

* Use **Promise** return type

```ts
async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data Loaded"), 1000);
  });
}

fetchData().then(console.log); // Data Loaded
```

---

## 7. Best Practices

1. Always **explicitly define return types**
2. Use **union types** for multiple possible return types
3. Use **generics** for reusable functions
4. Use **type aliases** for structured objects
5. Always specify **Promise<T>** for async functions
6. Avoid using `any` for return type in intermediate scenarios

---

## 8. Intermediate Interview Questions

1. How do you define union types as a return type?
2. What is the benefit of using generics in functions?
3. How do you type functions returning arrays or tuples?
4. How do you specify a return type for asynchronous functions?
5. Why is it important to use type aliases for object return types?
6. What are common mistakes when returning multiple types?

---

## Summary

* Intermediate function return types include **union types, generics, arrays, objects, tuples, and async functions**
* Provides better **type safety, code readability, and reusability**
* Prepares for **expert-level TypeScript function design**
