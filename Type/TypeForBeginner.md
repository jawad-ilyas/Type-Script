# TypeScript `type` Keyword — Beginner Guide

This guide covers **beginner-level usage of the `type` keyword in TypeScript**, focusing on **basic type aliasing and simple examples**.

---

## 1. What is the `type` keyword?

* The `type` keyword allows you to **create a new name for a type**.
* Makes code more readable and reusable.

```ts
// Basic type alias
type Age = number;
let myAge: Age = 25;
console.log(myAge); // 25
```

* `Age` is now an alias for `number`.

---

## 2. Combining Types (Union)

```ts
type ID = string | number;
let userId: ID;
userId = 'abc123'; // ✅
userId = 123;      // ✅
// userId = true;  // ❌ Error: not assignable
```

* Aliases can include **multiple types** using unions.

---

## 3. Aliasing Object Types

```ts
type User = {
  name: string;
  age: number;
};

let user1: User = { name: 'Jawad', age: 22 };
console.log(user1.name, user1.age);
```

* Simplifies object type declaration.
* Makes code **more readable**.

---

## 4. Aliasing Arrays

```ts
type NameArray = string[];
let names: NameArray = ['Jawad', 'Ali', 'Ilyas'];
console.log(names);
```

* Type aliases can be **used for arrays or collections**.

---

## 5. Beginner Interview Questions

1. What is the `type` keyword used for in TypeScript?
2. How do you create a type alias for a primitive type?
3. Can you combine multiple types using a type alias?
4. How do you alias an object type?
5. Why is using type aliases helpful?

---

## Summary

* `type` keyword creates **aliases for types**.
* Can alias **primitives, objects, arrays, and unions**.
* Helps make TypeScript code **more readable and maintainable**.
* Beginner-friendly introduction to **custom type naming**.
