# TypeScript Index Signature — Expert Guide

This guide covers **expert-level understanding of Index Signatures**, focusing on **type safety pitfalls, advanced patterns, mapped-type alternatives, conditional logic, and real-world architecture decisions**.

---

## 1. Expert Perspective on Index Signatures

At expert level, index signatures are **used sparingly**.

They are powerful but **dangerous** if misused because they:

* Weaken type guarantees
* Hide mistakes
* Can override explicit property types

Experts know **when NOT to use them**.

---

## 2. Core Rule (Critical)

```ts
interface Example {
  [key: string]: string;
  name: string; // ✅ OK
  age: number;  // ❌ Error
}
```

### Why?

* **All properties must match the index signature type**
* `age: number` violates `[key: string]: string`

👉 This rule is the **#1 interview trap**.

---

## 3. Index Signature vs Explicit Properties

### Unsafe Design

```ts
interface UserMap {
  [key: string]: any;
}
```

❌ Loses all safety

### Safer Design

```ts
interface UserMap {
  [key: string]: string | number | boolean;
}
```

Still flexible, but constrained.

---

## 4. String vs Number Index Signatures

```ts
interface NumericMap {
  [index: number]: string;
}
```

### Important Rule

* Number index is **subtype of string index**

```ts
interface Mixed {
  [key: string]: string;
  [index: number]: string; // ✅ Must match
}
```

---

## 5. Index Signatures with `keyof`

```ts
type Dynamic<T> = {
  [K in keyof T]: T[K];
};
```

This is a **mapped type** — often a **better alternative** than index signatures.

---

## 6. Index Signature vs `Record` (Expert Choice)

```ts
type UserRoles = Record<string, "admin" | "user">;
```

### Why Record is better

* Clear intent
* Stronger inference
* Safer refactoring

👉 Experts prefer `Record` over raw index signatures.

---

## 7. Conditional Index Signatures (Advanced Pattern)

```ts
type ApiPayload<T> = {
  [key: string]: T extends string ? string : number;
};
```

Used in **generic libraries** and SDKs.

---

## 8. Index Signatures with Readonly

```ts
interface ReadonlyMap {
  readonly [key: string]: number;
}
```

* Prevents reassignment
* Used for **configuration objects**

---

## 9. Real-World Use Cases (Expert)

### 1️⃣ Feature Flags

```ts
interface FeatureFlags {
  [featureName: string]: boolean;
}
```

### 2️⃣ Localization Dictionaries

```ts
interface Translations {
  [key: string]: string;
}
```

### 3️⃣ Environment Variables

```ts
interface Env {
  [key: string]: string | undefined;
}
```

---

## 10. When NOT to Use Index Signatures

❌ Modeling known object structures
❌ Domain models (User, Order, Product)
❌ Database entities

✅ Use interfaces or mapped types instead.

---

## 11. Expert-Level Pitfalls

1. Overusing `any`
2. Hiding typos (`obj.nmae` passes silently)
3. Breaking property contracts
4. Losing autocomplete support

---

## 12. Expert Best Practices

1. Prefer `Record<K, T>`
2. Use mapped types for known keys
3. Add union constraints
4. Avoid index signatures in core domain models
5. Document intent clearly

---

## 13. Expert Interview Questions

1. Why must all properties match an index signature?
2. Difference between index signature and mapped type?
3. Why is `Record` safer?
4. When does a number index become a string index?
5. How can index signatures hide bugs?
6. Give a real-world case where index signatures are justified

---

## Summary

* Index signatures are **powerful but risky**
* Experts use them **only when structure is truly dynamic**
* Prefer safer abstractions when possible

Mastering this topic shows **senior-level TypeScript understanding**.
