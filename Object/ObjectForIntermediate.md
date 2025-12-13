# TypeScript Objects – Intermediate Guide

This guide covers **intermediate-level usage of objects in TypeScript**, including index signatures, readonly properties, nested objects, and type aliases.

---

## 1. Type Aliases for Objects

* Use **type aliases** to define reusable object types

```ts
type User = {
  name: string;
  age: number;
};

let user1: User = { name: "Jawad", age: 25 };
let user2: User = { name: "Ali", age: 30 };
```

---

## 2. Readonly Properties

* Use `readonly` to prevent modifications

```ts
type Product = {
  readonly id: number;
  name: string;
};

let product: Product = { id: 1, name: "Laptop" };
// product.id = 2; // ❌ Error
product.name = "Gaming Laptop"; // ✅ Allowed
```

---

## 3. Optional Properties and Default Values

```ts
type Employee = {
  name: string;
  age?: number;
  department?: string;
};

let emp: Employee = { name: "Ali" };
console.log(emp.age); // undefined
```

* Can combine with default values in functions

```ts
function printEmployee(emp: Employee) {
  const age = emp.age ?? 0;
  console.log(emp.name, age);
}
```

---

## 4. Index Signatures

* Useful when keys are dynamic

```ts
type Scores = {
  [subject: string]: number;
};

let studentScores: Scores = { math: 90, physics: 80 };
studentScores.chemistry = 85;
```

---

## 5. Nested Objects

```ts
type Address = {
  city: string;
  zip: number;
};

type Student = {
  name: string;
  address: Address;
};

let student: Student = {
  name: "Ilyas",
  address: { city: "Lahore", zip: 54000 }
};
console.log(student.address.city); // Lahore
```

---

## 6. Objects in Functions

* Use typed objects in function parameters and returns

```ts
function getUser(): User {
  return { name: "Jawad", age: 25 };
}

const user = getUser();
console.log(user.name, user.age);
```

---

## 7. Common Intermediate Mistakes

❌ Ignoring readonly properties
❌ Using `any` instead of type aliases
❌ Not handling optional properties safely
❌ Not typing dynamic keys properly

---

## 8. Best Practices

* Always use **type aliases** for reusable objects
* Use **readonly** where possible to prevent accidental changes
* Use **index signatures** for dynamic keys
* Handle **optional properties** with care using `??` or default values
* Structure nested objects clearly

---

## 9. Intermediate Interview Questions

1. What is a type alias for an object and why use it?
2. How do readonly properties work?
3. How do you define optional properties and provide defaults?
4. What are index signatures and when are they useful?
5. How do you type nested objects?
6. How do you pass objects as function parameters?
7. What are common mistakes when handling intermediate objects?
8. How do you ensure type safety with dynamic keys?

---

## Summary

* Intermediate objects include **type aliases, readonly and optional properties, index signatures, nested objects, and typed function parameters/returns**
* Improves **code maintainability, readability, and type safety**
* Prepares for **expert-level object features like mapped types, utility types, and advanced patterns**
