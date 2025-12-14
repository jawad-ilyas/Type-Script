# TypeScript `keyof` — Beginner Guide

This guide explains the **`keyof` operator in TypeScript** for beginners, focusing on its **basic usage, examples, and simple interview questions**.

---

## 1. What is `keyof`?

* `keyof` is an operator in TypeScript.
* It **extracts the keys of a type** as a union of string literal types.
* Helps in **type-safe property access**.

```ts
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'
```

* `PersonKeys` can only be `'name'` or `'age'`

---

## 2. Using `keyof` in Functions

* Use `keyof` to ensure **valid property access**.

```ts
function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

const person: Person = { name: "Jawad", age: 22 };
console.log(getProperty(person, "name")); // Jawad
console.log(getProperty(person, "age"));  // 22
// console.log(getProperty(person, "email")); // ❌ Error
```

* TypeScript prevents accessing properties that **don’t exist**.

---

## 3. Dynamic Key Access with `keyof`

```ts
const key: keyof Person = "name";
console.log(person[key]); // Jawad
```

* Only allows **valid keys of the type**.
* Enhances **type safety** when using dynamic keys.

---

## 4. `keyof` with Optional Properties

```ts
interface Employee {
  id: number;
  name: string;
  department?: string;
}

type EmployeeKeys = keyof Employee; // 'id' | 'name' | 'department'
```

* Optional properties are included in the union type.

---

## 5. Beginner Interview Questions

1. What does `keyof` do in TypeScript?
2. How does `keyof` improve type safety?
3. Can `keyof` be used with optional properties?
4. Show an example of using `keyof` in a function.
5. What type is returned when using `keyof` on an interface?

---

## Summary

* `keyof` extracts **all keys of a type** as a union.
* It **prevents invalid property access**.
* Very useful for **dynamic property access in functions**.
* Beginner-friendly way to make TypeScript **more type-safe**.
