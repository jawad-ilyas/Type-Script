# TypeScript Objects – Expert Guide

This guide covers **expert-level usage of objects in TypeScript**, including mapped types, utility types, advanced patterns, immutability, and best practices.

---

## 1. Mapped Types

* Mapped types allow **creating new types based on existing types**

```ts
type User = { name: string; age: number };
type ReadonlyUser = { readonly [K in keyof User]: User[K] };

let user: ReadonlyUser = { name: "Jawad", age: 25 };
// user.age = 30; // ❌ Error
```

* Useful for transforming types and enforcing constraints

---

## 2. Utility Types

* TypeScript provides built-in **utility types**

```ts
type PartialUser = Partial<User>; // all properties optional
let user1: PartialUser = { name: "Ali" };

type RequiredUser = Required<User>; // all properties required

type PickUser = Pick<User, "name">; // pick specific properties

type RecordUser = Record<string, User>; // object with string keys and User values
```

---

## 3. Readonly & Immutable Objects

```ts
const user: Readonly<User> = { name: "Jawad", age: 25 };
// user.age = 30; // ❌ Error
```

* Combine `readonly` with nested objects to enforce immutability

```ts
type NestedUser = { readonly name: string; readonly details: { readonly age: number } };
```

---

## 4. Index Signatures & Dynamic Objects

```ts
type Scores = { [subject: string]: number };
const studentScores: Scores = { math: 90, physics: 85 };
studentScores.chemistry = 80;
```

* Useful for objects with **dynamic keys**

---

## 5. Nested & Complex Objects

```ts
type Address = { city: string; zip: number };
type Student = { name: string; address: Address; scores: Record<string, number> };

const student: Student = {
  name: "Ali",
  address: { city: "Lahore", zip: 54000 },
  scores: { math: 90, physics: 85 }
};
```

---

## 6. Objects in Functions

* Functions with typed objects as parameters and returns

```ts
function updateUser(user: User, newData: Partial<User>): User {
  return { ...user, ...newData };
}

const updatedUser = updateUser({ name: "Jawad", age: 25 }, { age: 30 });
console.log(updatedUser);
```

---

## 7. Expert-Level Best Practices

1. Use **mapped types** and **utility types** for reusable patterns
2. Combine **readonly** with nested objects for immutability
3. Use **index signatures** for dynamic keys
4. Use **type aliases** for maintainability
5. Always define object types for function parameters and returns
6. Document complex object structures for readability

---

## 8. Expert Interview Questions

1. How do mapped types work and why use them?
2. Explain Partial, Required, Pick, and Record utility types with examples.
3. How do you enforce immutability in nested objects?
4. When would you use index signatures in objects?
5. How can complex objects be structured for scalability?
6. How do you type objects in function parameters and returns?
7. Difference between intermediate and expert-level object patterns?
8. How do utility types improve type safety and maintainability?

---

## Summary

* Expert objects include **mapped types, utility types, readonly/immutable objects, index signatures, nested/complex structures, and typed functions**
* Useful for **large-scale applications and senior-level TypeScript development**
* Prepares for **expert-level interviews and best practices in object management**
