# TypeScript Never Type – Intermediate Guide

This guide covers **intermediate-level usage of the `never` type in TypeScript**, including advanced scenarios, type narrowing, and exhaustive checks.

---

## 1. Advanced Type Narrowing with `never`

* Using `never` to **enforce exhaustive checks** in union types

```ts
type Shape = "circle" | "square" | "triangle";

function checkShape(shape: Shape) {
  switch (shape) {
    case "circle":
      console.log("Circle");
      break;
    case "square":
      console.log("Square");
      break;
    default:
      const _exhaustiveCheck: never = shape;
      console.log(_exhaustiveCheck); // ❌ TypeScript will error if a case is missing
      break;
  }
}
```

* Ensures **all possible cases are handled**

---

## 2. Using `never` in Functions

* Functions that **always throw errors** or **never return normally**

```ts
function throwCustomError(message: string): never {
  throw new Error(message);
}

function fail(): never {
  return throwCustomError("This always fails");
}
```

* Can be combined with other functions for **safe error handling**

---

## 3. TypeScript `never` with Conditional Types

* `never` can be used in **conditional types** for filtering types

```ts
type NonString<T> = T extends string ? never : T;

type Result = NonString<string | number | boolean>; // number | boolean
```

* Useful in **generic programming** to exclude unwanted types

---

## 4. Best Practices

1. Use `never` for **exhaustive type checks**
2. Use `never` in **functions that always throw or never return**
3. Combine `never` with **conditional types** for filtering types
4. Always ensure **all cases of a union type are handled**

---

## 5. Intermediate Interview Questions

1. How is `never` different from `void`?
2. How can `never` enforce exhaustive checks in union types?
3. Give an example of a function that returns `never`.
4. How can `never` be used in conditional types?
5. Why is `never` useful in intermediate-level TypeScript development?

---

## Summary

* Intermediate usage of `never` focuses on **type safety, exhaustive checks, and conditional types**
* Helps **prevent runtime errors and missing cases in union types**
* Prepares developers for **expert-level TypeScript scenarios**
