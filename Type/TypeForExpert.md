# TypeScript `type` Keyword — Expert Guide

This guide covers **expert-level usage of the `type` keyword in TypeScript**, focusing on **advanced type composition, conditional types, type inference, utility types, and complex real-world patterns**.

---

## 1. Conditional Types with Type Aliases

```ts
type IsString<T> = T extends string ? 'Yes' : 'No';

type A = IsString<string>; // 'Yes'
type B = IsString<number>; // 'No'
```

* Conditional types allow **dynamic evaluation of types**.
* Used for **type-level logic and validation**.

---

## 2. Type Aliases with Generics and Constraints

```ts
type ApiResponse<T extends object> = {
  data: T;
  status: number;
  error?: string;
};

const response: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: 'Jawad' },
  status: 200
};
```

* Generics with constraints **ensure type safety**.
* Supports **strongly typed API contracts**.

---

## 3. Advanced Mapped Types

```ts
type Person = {
  name: string;
  age: number;
};

type OptionalPerson = {
  [K in keyof Person]?: Person[K];
};

const p: OptionalPerson = { name: 'Jawad' }; // age is optional
```

* Mapped types allow **transforming properties dynamically**.
* Core concept for **utility types like Partial, Readonly, Record**.

---

## 4. Union, Intersection, and Literal Types

```ts
type Admin = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };
type ElevatedEmployee = Admin & Employee;

type Direction = 'up' | 'down' | 'left' | 'right';
```

* Combine **union, intersection, and literal types** for advanced patterns.
* Used in **complex business logic and strict type constraints**.

---

## 5. Type Inference with Aliases

```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function add(a: number, b: number) { return a + b; }
type Result = ReturnType<typeof add>; // number
```

* `infer` allows **extracting types dynamically**.
* Integral in **utility types and advanced generics**.

---

## 6. Expert Interview Questions

1. How do conditional types work with `type` aliases?
2. Explain how to combine union and intersection types.
3. What is `infer` and how is it used in type aliases?
4. How are mapped types implemented internally?
5. When should you choose `type` over `interface` in complex scenarios?
6. How do generics and constraints enhance type aliases for large-scale projects?

---

## Summary

* Expert `type` usage covers **conditional types, generics, mapped types, inference, and complex combinations**.
* Essential for **type-safe, maintainable, and scalable TypeScript code**.
* Mastery of `type` aliases = mastery of **advanced type-level programming**.
