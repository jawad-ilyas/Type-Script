# TypeScript Interface – Intermediate Guide

This guide covers **intermediate-level usage of interfaces in TypeScript**, including advanced features, implementation in classes, and combination with other types.

---

## 1. Implementing Interfaces in Classes

* Interfaces can enforce a **contract for classes**

```ts
interface Employee {
  name: string;
  employeeId: number;
  getDetails(): string;
}

class Manager implements Employee {
  constructor(public name: string, public employeeId: number) {}

  getDetails(): string {
    return `${this.name} - ${this.employeeId}`;
  }
}

const mgr = new Manager("Ali", 101);
console.log(mgr.getDetails()); // Ali - 101
```

* Ensures classes **follow the defined structure**

---

## 2. Extending Multiple Interfaces

* An interface can extend **multiple interfaces**

```ts
interface Person { name: string; }
interface Contact { email: string; }

interface Employee extends Person, Contact {
  employeeId: number;
}

const emp: Employee = { name: "Jawad", email: "jawad@example.com", employeeId: 102 };
console.log(emp);
```

* Useful for **composing complex object types**

---

## 3. Hybrid Types

* Interfaces can describe **objects with properties and functions**

```ts
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { return `Start: ${start}`; };
  counter.interval = 123;
  counter.reset = function() { console.log('Reset!'); };
  return counter;
}

let c = getCounter();
c(10);         // Start: 10
c.reset();     // Reset!
```

* Combines **callable objects and properties**

---

## 4. Interfaces with Generics

* Interfaces can use **generic types** for flexibility

```ts
interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  status: "success",
  data: { name: "Jawad" }
};
console.log(userResponse);
```

* Makes interfaces **reusable for different types**

---

## 5. Best Practices

1. Use interfaces to **define contracts for classes and objects**
2. Prefer **interface extension** over duplicating structures
3. Use **hybrid and generic interfaces** for advanced use cases
4. Always implement **all required properties and methods**

---

## 6. Intermediate Interview Questions

1. How do you implement an interface in a class?
2. How can an interface extend multiple interfaces?
3. What are hybrid interfaces?
4. How do you use generics with interfaces?
5. Why would you choose an interface over a type alias for complex objects?
6. Give an example of a class implementing a generic interface.

---

## Summary

* Intermediate interface usage focuses on **classes, extension, hybrid types, and generics**
* Provides **structure and flexibility** in larger TypeScript applications
* Prepares developers for **expert-level interface design and usage**
