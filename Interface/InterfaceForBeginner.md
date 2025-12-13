# TypeScript Interface – Beginner Guide

This guide covers **beginner-level usage of interfaces in TypeScript**, including definitions, examples, and interview questions.

---

## 1. What is an Interface?

* **Definition:** An interface defines the **structure of an object**.
* It specifies **property names, types, and optional properties**.

```ts
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "Jawad",
  age: 25
};

console.log(user.name); // Jawad
console.log(user.age);  // 25
```

* Interfaces are **not compiled to JavaScript**, they are used for **type checking**.

---

## 2. Optional Properties

* You can make some properties **optional** using `?`

```ts
interface User {
  name: string;
  age?: number; // optional
}

let user1: User = { name: "Ali" };   // ✅ valid
let user2: User = { name: "Ali", age: 30 }; // ✅ valid
```

* Useful when some data may not be available

---

## 3. Readonly Properties

* Properties can be **readonly** to prevent modification

```ts
interface User {
  readonly id: number;
  name: string;
}

let user: User = { id: 101, name: "Jawad" };
// user.id = 102; // ❌ Error: Cannot assign to 'id'
```

---

## 4. Functions in Interfaces

* Interfaces can define **function types**

```ts
interface MathOperation {
  (a: number, b: number): number;
}

let add: MathOperation = (x, y) => x + y;
console.log(add(5, 10)); // 15
```

---

## 5. Extending Interfaces

* You can **extend interfaces** to create new ones

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

let emp: Employee = { name: "Ali", employeeId: 101 };
console.log(emp);
```

---

## 6. Best Practices

1. Use interfaces to **define object structures**
2. Prefer **interfaces over type aliases** for objects when possible
3. Use **optional and readonly properties** for flexibility and safety
4. Combine interfaces with **functions and classes** for clean code

---

## 7. Beginner Interview Questions

1. What is an interface in TypeScript?
2. How do you define optional properties in an interface?
3. How do you make properties readonly?
4. Can interfaces contain functions?
5. How do you extend an interface?
6. What is the difference between a type alias and an interface?

---

## Summary

* Interfaces define **object structure and type safety**
* Optional and readonly properties add **flexibility and immutability**
* Beginner-level understanding prepares for **intermediate and expert interface usage**
