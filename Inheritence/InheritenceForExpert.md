# TypeScript Inheritance – Expert Guide

This guide covers **expert-level inheritance in TypeScript**, including advanced patterns, abstract classes, multi-level inheritance, interfaces, and design considerations.

---

## 1. Multi-Level Inheritance

* Child classes can inherit from parent, and **grandchild classes can inherit from child**

```ts
class Person {
  constructor(public name: string) {}
  greet() { console.log(`Hello, my name is ${this.name}`); }
}

class Employee extends Person {
  constructor(name: string, public employeeId: number) {
    super(name);
  }
}

class Manager extends Employee {
  constructor(name: string, employeeId: number, public department: string) {
    super(name, employeeId);
  }
  showDepartment() {
    console.log(`Department: ${this.department}`);
  }
}

const mgr = new Manager("Jawad", 101, "IT");
mgr.greet(); // Hello, my name is Jawad
mgr.showDepartment(); // Department: IT
```

---

## 2. Abstract Classes

* Abstract classes **cannot be instantiated** and **enforce implementation of abstract methods**

```ts
abstract class Person {
  constructor(public name: string) {}
  abstract getDetails(): string;
}

class Employee extends Person {
  constructor(name: string, public employeeId: number) {
    super(name);
  }
  getDetails(): string {
    return `${this.name} has ID ${this.employeeId}`;
  }
}
```

---

## 3. Interfaces with Inheritance

* Classes can **implement interfaces** while also extending a class

```ts
interface Identifiable {
  id: number;
  getId(): number;
}

class Person {
  constructor(public name: string) {}
}

class Employee extends Person implements Identifiable {
  constructor(name: string, public id: number) {
    super(name);
  }
  getId(): number {
    return this.id;
  }
}
```

---

## 4. Using `super` in Methods

* You can call parent methods from child methods to **enhance or modify behavior**

```ts
class Employee extends Person {
  greet() {
    super.greet();
    console.log(`Employee ID: ${this.employeeId}`);
  }
}
```

---

## 5. Expert Best Practices

1. Use **multi-level inheritance** sparingly; prefer composition when possible
2. Use **abstract classes** to enforce implementation contracts
3. Combine **interfaces and inheritance** for flexible design
4. Use `super()` to reuse parent functionality without duplication
5. Follow **SOLID principles** and avoid deep inheritance chains

---

## 6. Expert Interview Questions

1. Explain multi-level inheritance with an example.
2. What are abstract classes and why are they used?
3. How do interfaces and inheritance work together?
4. How do you call parent methods in a child class?
5. What are best practices to avoid deep inheritance chains?

---

## Summary

* Expert inheritance covers **multi-level inheritance, abstract classes, interfaces, and method overriding**
* Enables **scalable, reusable, and maintainable OOP design**
* Prepares developers for **expert-level TypeScript architecture and interviews**
