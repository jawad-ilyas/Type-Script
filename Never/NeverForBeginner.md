# TypeScript Never Type – Beginner Guide

This guide covers **beginner-level usage of the `never` data type in TypeScript**, including definitions, examples, and interview questions.

---

## 1. What is the `never` Type?

* **Definition:** The `never` type represents **values that never occur**.
* **Usage:** Used for functions that **never return** or always **throw an error**.

```ts
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("This is an error!"); // ❌ Will terminate the program
```

* `never` is **different from `void`**: `void` returns nothing, `never` **never returns**.

---

## 2. Functions that Never Return

* Infinite loops or always throwing errors can use `never` type

```ts
function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}

// infiniteLoop(); // ❌ Will run indefinitely
```

---

## 3. Using `never` in Type Narrowing

* `never` helps TypeScript **catch unreachable code**

```ts
type Shape = "circle" | "square";

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
      // _exhaustiveCheck ensures all cases are handled
      break;
  }
}
```

* This technique **prevents missing cases** in unions

---

## 4. Best Practices

1. Use `never` for functions that **always throw errors**
2. Use `never` for **unreachable code checks**
3. Avoid assigning `never` to regular variables
4. Combine with **type narrowing** for better code safety

---

## 5. Beginner Interview Questions

1. What is the `never` type in TypeScript?
2. How is `never` different from `void`?
3. Give an example of a function returning `never`.
4. How can `never` be used in type narrowing?
5. Why is `never` useful in handling union types?

---

## Summary

* `never` represents **values that never occur**
* Functions that **throw errors or run infinitely** use `never`
* Helps **TypeScript detect unreachable code and missing cases**
* Beginner-level understanding prepares for **intermediate and expert handling of the `never` type**
