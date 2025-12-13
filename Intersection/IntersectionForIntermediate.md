# TypeScript Intersection Types – Intermediate Guide

This guide covers **intermediate-level usage of intersection types in TypeScript**, including combining interfaces, advanced object composition, and real-world use cases.

---

## 1. Combining Interfaces with Intersection Types

```ts
interface Employee {
  name: string;
  age: number;
}
interface Manager {
  department: string;
  reports: number;
}

type TeamLead = Employee & Manager;

const lead: TeamLead = {
  name: "Jawad",
  age: 30,
  department: "IT",
  reports: 5
};
console.log(lead);
```

* Ensures the object satisfies **all interface contracts**

---

## 2. Intersection Types with Optional and Readonly Properties

```ts
interface Employee {
  name: string;
  age?: number;
}
interface Manager {
  readonly department: string;
}

type TeamLead = Employee & Manager;

const lead: TeamLead = { name: "Ali", department: "HR" };
// lead.department = "Finance"; // ❌ Error: readonly
```

* Combines flexibility (optional) and immutability (readonly)

---

## 3. Intersection in Function Types

```ts
type HasId = { id: number };
type HasName = { name: string };

type User = HasId & HasName;

function printUser(user: User) {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

printUser({ id: 101, name: "Jawad" });
```

* Ensures function **parameters meet multiple type requirements**

---

## 4. Real-World Example: API Data Composition

```ts
interface UserApi { name: string; email: string; }
interface Permissions { isAdmin: boolean; canEdit: boolean; }

type UserWithPermissions = UserApi & Permissions;

const user: UserWithPermissions = {
  name: "Jawad",
  email: "jawad@example.com",
  isAdmin: true,
  canEdit: false
};
```

* Useful for **merging API response with additional data**

---

## 5. Best Practices

1. Use intersections to **combine multiple interfaces or types**
2. Prefer **optional and readonly properties** to balance flexibility and immutability
3. Use intersections in **function parameters** for stricter type safety
4. Avoid overly complex intersections for readability

---

## 6. Intermediate Interview Questions

1. How do intersection types differ from union types at an intermediate level?
2. How can you combine multiple interfaces using intersection types?
3. Can intersection types include optional and readonly properties? Give an example.
4. How are intersection types useful in real-world API response composition?
5. Give an example of a function using an intersection type with multiple interfaces.

---

## Summary

* Intersection types at the intermediate level allow **combining multiple interfaces and types**
* Supports **optional, readonly, and function types**
* Prepares developers for **expert-level intersection type usage and large-scale applications**
