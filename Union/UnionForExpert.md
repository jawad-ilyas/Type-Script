# TypeScript Union Types – Expert Guide

This guide covers **expert-level usage of union types in TypeScript**, including advanced techniques, discriminated unions, exhaustive checks, and integration with generics and conditional types.

---

## 1. Discriminated Unions

* Use **discriminant property** to safely narrow union types

```ts
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Triangle = { kind: "triangle"; base: number; height: number };

type Shape = Circle | Square | Triangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

* Ensures **all possible types are handled** and prevents missing cases

---

## 2. Union Types with Generics and Conditional Types

```ts
type MaybeArray<T> = T | T[];

function wrapInArray<T>(value: MaybeArray<T>): T[] {
  return Array.isArray(value) ? value : [value];
}

console.log(wrapInArray(5));       // [5]
console.log(wrapInArray([1, 2]));  // [1, 2]
```

* Combines **flexibility and type safety** using generics

---

## 3. Advanced Function Usage

* Functions with **union return types and narrowing**

```ts
function parseInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.trim();
  } else {
    return input * 2;
  }
}
```

* Expert usage ensures **safe operations on all types**

---

## 4. Union Types with Mapped and Conditional Types

```ts
type Response<T> = {
  status: "success" | "error";
  data: T;
};

type User = { name: string; age: number };

type ApiResponse = Response<User> | Response<string>;

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log(response.data);
  } else {
    console.error(response.data);
  }
}
```

* Handles **complex API responses** safely with union types

---

## 5. Best Practices

1. Use **discriminated unions** for complex object types
2. Combine **union types with generics** for reusable functions
3. Leverage **conditional types** to filter or transform unions
4. Always handle **all cases** to ensure exhaustive checks
5. Avoid using `any` in expert scenarios; rely on precise union types

---

## 6. Expert Interview Questions

1. How do discriminated unions work in TypeScript?
2. How can union types be combined with generics and conditional types?
3. Explain exhaustive checks with union types.
4. How would you type a complex API response using union types?
5. What are the benefits of using union types in large-scale TypeScript projects?
6. Give an example of a function returning a union type with type narrowing.

---

## Summary

* Expert union types involve **discriminated unions, generics, conditional types, and exhaustive checks**
* Ensures **robust type safety and flexibility** in complex applications
* Prepares developers for **expert-level TypeScript scenarios and interviews**
