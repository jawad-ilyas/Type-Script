# TypeScript Intersection Types – Beginner Guide

This guide covers **beginner-level usage of intersection types in TypeScript**, including definitions, examples, and interview questions.

---

## 1. What is an Intersection Type?

* **Definition:** An intersection type combines multiple types into **one type** that has **all properties of the combined types**.
* Represented using `&` operator.

```ts
type Employee = { name: string };
type Manager = { department: string };

type TeamLead = Employee & Manager;

let lead: TeamLead = {
  name: "Jawad",
  department: "IT"
};

console.log(lead.name);       // Jawad
console.log(lead.department); // IT
```

* Useful when you want an object to **satisfy multiple type requirements**

---

## 2. Intersection with Optional Properties

```ts
type Employee = { name: string };
type Manager = { department?: string };

type TeamLead = Employee & Manager;

let lead: TeamLead = {
  name: "Ali"
}; // ✅ department is optional
```

* Allows flexibility while combining types

---

## 3. Intersection with Functions

```ts
type HasId = { id: number };
type HasName = { name: string };

type User = HasId & HasName;

function printUser(user: User) {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

printUser({ id: 101, name: "Jawad" });
```

* Ensures **all required properties exist** for function operations

---

## 4. Best Practices

1. Use intersections to **combine multiple types** for stricter type safety
2. Avoid overusing complex intersections; it can make the code **hard to read**
3. Combine intersections with **optional properties** if some data may not exist
4. Use intersection types in **function parameters and object composition**

---

## 5. Beginner Interview Questions

1. What is an intersection type in TypeScript?
2. How is an intersection type different from a union type?
3. How do you combine two types using `&`?
4. Can intersection types have optional properties?
5. Give an example of a function using an intersection type.

---

## Summary

* Intersection types combine multiple types into **one type** with all properties
* Useful for **object composition, function parameters, and stricter type safety**
* Beginner-level understanding prepares for **intermediate and expert intersection type usage**
