# TypeScript `keyof` — Intermediate Guide

This guide explains **intermediate-level usage of the `keyof` operator in TypeScript**, focusing on **advanced property access, dynamic keys, and practical use cases**.

---

## 1. `keyof` with Generic Functions

* Combine `keyof` with generics for **type-safe dynamic property access**.

```ts
interface Person {
  name: string;
  age: number;
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Jawad", age: 22 };
console.log(getValue(person, "name")); // Jawad
console.log(getValue(person, "age"));  // 22
// console.log(getValue(person, "email")); // ❌ Error
```

* Ensures that only **existing keys** of the object type are allowed.

---

## 2. `keyof` with Union Types

* Extract keys from **multiple possible types** using unions.

```ts
interface Employee {
  id: number;
  name: string;
}
interface Manager {
  id: number;
  department: string;
}

type Entity = Employee | Manager;
type EntityKeys = keyof Entity; // 'id' | 'name' | 'department'
```

* Useful in **generic utilities and dynamic forms**.

---

## 3. `keyof` with Mapped Types

* Create new types dynamically using `keyof`.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserReadonly = {
  readonly [K in keyof User]: User[K];
};

const user: UserReadonly = { id: 1, name: "Jawad", email: "jawad@example.com" };
// user.id = 2; ❌ Error, readonly
```

* Makes all properties **readonly** dynamically.

---

## 4. `keyof` with Function Signatures

* Define type-safe **object access for function parameters**.

```ts
interface Config {
  apiUrl: string;
  timeout: number;
}

function updateConfig<K extends keyof Config>(key: K, value: Config[K]) {
  console.log(`${key} updated to ${value}`);
}

updateConfig("apiUrl", "http://newapi.com");
updateConfig("timeout", 5000);
// updateConfig("unknownKey", 123); ❌ Error
```

* Ensures **correct type** for both key and value.

---

## 5. Intermediate Interview Questions

1. How can `keyof` be combined with generics for dynamic property access?
2. What is the difference between `keyof` on a single type vs a union type?
3. How can `keyof` be used with mapped types?
4. Show an example of type-safe property update using `keyof`.
5. Why is `keyof` useful for dynamic forms or utility functions?

---

## Summary

* `keyof` extracts **keys from a type** and can be combined with **generics and mapped types**.
* Enhances **type safety for dynamic property access**.
* Useful in **intermediate-level TypeScript patterns**, including **utilities, forms, and dynamic updates**.
