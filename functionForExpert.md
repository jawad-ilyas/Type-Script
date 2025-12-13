# TypeScript Function Return Types – Expert Guide

This guide covers **expert-level usage of function return types in TypeScript**, including advanced generics, conditional types, function overloads, and complex async patterns.

---

## 1. Advanced Generics

* Use generics for **type-safe, reusable functions**

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray("Hello"); // string[]
const numberArray = wrapInArray(42);      // number[]
```

---

## 2. Function Overloads

* Define multiple signatures for a single function

```ts
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(2, 3));       // 5
console.log(combine("Hi", "!")); // Hi!
```

* Allows **different input types with type-safe return**

---

## 3. Conditional Return Types

* Use **conditional types** for dynamic return types

```ts
type ReturnType<T> = T extends string ? number : boolean;

function checkValue<T>(value: T): ReturnType<T> {
  if (typeof value === "string") {
    return value.length as ReturnType<T>;
  } else {
    return true as ReturnType<T>;
  }
}

console.log(checkValue("Hello")); // 5
console.log(checkValue(10));        // true
```

---

## 4. Asynchronous Functions with Generics

```ts
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json() as Promise<T>;
}

interface User { name: string; age: number; }

fetchData<User>("/api/user").then(user => {
  console.log(user.name, user.age);
});
```

* Ensures **type safety for API responses**

---

## 5. Functions Returning Tuples and Complex Objects

```ts
function getUserInfo(): [string, number, { role: string }] {
  return ["Jawad", 25, { role: "Admin" }];
}

const [name, age, details] = getUserInfo();
console.log(name, age, details.role);
```

---

## 6. Best Practices

1. Use **generics** for reusable and type-safe functions
2. Leverage **function overloads** for multiple input types
3. Use **conditional types** to adapt return types dynamically
4. Always define **Promise<T>** for async functions
5. Combine **tuples, objects, and type aliases** for complex returns
6. Avoid `any`; use precise types for maintainability

---

## 7. Expert Interview Questions

1. How do function overloads improve type safety?
2. Explain conditional return types with an example.
3. How do generics enhance return type flexibility?
4. How do you type asynchronous functions with complex responses?
5. How can tuples and nested objects be combined in return types?
6. What are the advantages of avoiding `any` in expert-level functions?
7. How do you handle different return types based on input parameters?

---

## Summary

* Expert-level function return types include **advanced generics, conditional types, overloads, async patterns, and complex objects/tuples**
* Focuses on **type safety, flexibility, and maintainability**
* Prepares developers for **senior-level TypeScript projects and expert interviews**
