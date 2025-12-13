# TypeScript Generics — Intermediate Guide

This guide covers **intermediate usage of generics in TypeScript**, including **constraints, multiple generics, default types, and generic utility types**.

---

## 1. Generic Constraints

* Limit the types a generic can accept

```ts
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

console.log(getLength([1, 2, 3])); // 3
console.log(getLength("Hello"));    // 5
// getLength(123); // ❌ Error, number has no length
```

* Ensures **type safety for properties**

---

## 2. Multiple Generics

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Jawad" }, { age: 25 });
console.log(merged.name); // Jawad
console.log(merged.age);  // 25
```

* Allows **combining multiple types safely**
* Useful for **merging objects or combining data**

---

## 3. Generic Default Types

```ts
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const stringArray = createArray(3, "Hello"); // string[]
const numberArray = createArray<number>(3, 42); // number[]
```

* Default type helps **simplify generic usage**

---

## 4. Generic Utility Types

* **Partial<T>**: Make all properties optional
* **Readonly<T>**: Make all properties readonly
* **Pick<T, K>**: Pick specific properties
* **Record<K, T>**: Create object type with keys K and type T

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

const partialUser: Partial<User> = { name: "Jawad" };
const readonlyUser: Readonly<User> = { name: "Jawad", age: 25, email: "a@b.com" };
```

* TypeScript provides **built-in generic types** for common scenarios

---

## 5. Intermediate Interview Questions

1. What are generic constraints and why are they useful?
2. How can you use multiple generics in a function or class?
3. What are generic default types?
4. Explain built-in generic utility types like Partial, Readonly, Pick, Record.
5. Can generics improve code readability and maintainability? How?
6. How do generics differ from `any` in TypeScript?

---

## Summary

* Intermediate generics cover **constraints, multiple generics, default types, and utility types**
* Ensures **strong type safety with flexibility**
* Useful in **large applications for reusable functions, classes, and type transformations**
