# TypeScript Any and Unknown – Expert Guide

This guide covers **expert-level usage of `any` and `unknown` types in TypeScript**, including advanced type narrowing, generics, type guards, and best practices.

---

## 1. Advanced Type Narrowing

* Use **custom type guards** to handle unknown values safely

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

let data: unknown = "Hello Expert";
if (isString(data)) {
  console.log(data.toUpperCase()); // HELLO EXPERT
}
```

* Enables **precise control over type safety**

---

## 2. Combining `unknown` with Generics

* Use generics to safely propagate types

```ts
function identity<T>(value: unknown): T {
  return value as T;
}

const str: string = identity<string>("Hello");
const num: number = identity<number>(42);
```

* Useful for **flexible, type-safe functions**

---

## 3. Handling Complex Data Structures

* Safely work with nested unknown objects

```ts
type ApiResponse = unknown;

function handleApiResponse(response: ApiResponse) {
  if (typeof response === "object" && response !== null) {
    if ('data' in response) {
      const data = (response as any).data;
      console.log(data);
    }
  }
}
```

* Combine **type assertions, checks, and optional chaining**

---

## 4. `any` for Dynamic Prototyping

* Use `any` **temporarily** for rapid prototyping

```ts
let dynamicVar: any = 10;
dynamicVar = "Now a string";
dynamicVar = [1, 2, 3];
```

* Replace `any` with stricter types in production

---

## 5. Best Practices for Experts

1. Prefer `unknown` over `any` whenever possible
2. Use **custom type guards** to narrow unknown types safely
3. Use **generics** with unknown to propagate types in reusable functions
4. Use `any` only temporarily for rapid prototyping
5. Combine **type assertions and runtime checks** for dynamic data
6. Always aim to **replace `any` with specific or union types** in production

---

## 6. Expert Interview Questions

1. How do custom type guards improve handling of unknown types?
2. Explain combining `unknown` with generics.
3. When is using `any` acceptable for expert developers?
4. How do you safely work with nested unknown objects?
5. What strategies prevent runtime errors when using unknown?
6. Explain the difference between `any` and `unknown` in large-scale applications.
7. How can type assertions be safely used with unknown values?

---

## Summary

* Expert handling of `any` and `unknown` includes **type guards, generics, type assertions, and runtime checks**
* Focuses on **safety, maintainability, and flexibility** in large-scale TypeScript applications
* Prepares developers for **senior-level TypeScript development and expert interview questions**
