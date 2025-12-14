# TypeScript `type` Keyword — Intermediate Guide

This guide covers **intermediate-level usage of the `type` keyword in TypeScript**, focusing on **combining types, generics, utility types, and reusable patterns**.

---

## 1. Combining Types with Union and Intersection

```ts
type Admin = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };

type ElevatedEmployee = Admin & Employee;

const emp: ElevatedEmployee = {
  name: 'Jawad',
  privileges: ['create-server'],
  startDate: new Date()
};
console.log(emp);
```

* `&` is used for **intersection types** to combine multiple object structures.
* Makes complex type definitions reusable.

---

## 2. Using Type Aliases with Generics

```ts
type ApiResponse<T> = {
  data: T;
  status: number;
  error?: string;
};

const response: ApiResponse<string> = {
  data: 'Success',
  status: 200
};
console.log(response);
```

* Generic type aliases **allow reuse for different data types**.
* Provides **strong typing for API responses**.

---

## 3. Mapped Types with Type Aliases

```ts
type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

const p: ReadonlyPerson = { name: 'Jawad', age: 22 };
// p.age = 23; // ❌ Error: readonly
```

* Type aliases can **map over existing types**.
* Useful for **readonly or optional transformations**.

---

## 4. Type Aliases with Union Literals

```ts
type Direction = 'up' | 'down' | 'left' | 'right';

let move: Direction;
move = 'up'; // ✅
// move = 'forward'; // ❌ Error: not assignable
```

* Combines literal types with aliases.
* Ensures **strict value constraints**.

---

## 5. Intermediate Interview Questions

1. How do you combine multiple types using `type`?
2. Explain the use of generic type aliases.
3. How can mapped types be defined using type aliases?
4. What are literal types and how can they be combined with type aliases?
5. What is the difference between `interface` and `type` for intermediate use cases?

---

## Summary

* Intermediate `type` usage covers **intersection, union, generics, mapped types, and literal types**.
* Helps **reuse complex structures** and **enhance type safety**.
* Provides **flexible and maintainable type abstractions** in TypeScript.
