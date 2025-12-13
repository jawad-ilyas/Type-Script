# TypeScript Inheritance – Intermediate Guide

This guide covers **intermediate-level inheritance in TypeScript**, including method overriding, multiple constructors, protected members, and practical examples.

---

## 1. Method Overriding

* Child classes can **override parent methods** to customize behavior

```ts
class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, public employeeId: number) {
    super(name);
  }

  // Overriding greet method
  greet() {
    console.log(`Hello, I am ${this.name} with ID ${this.employeeId}`);
  }
}

const emp = new Employee("Jawad", 101);
emp.greet(); // Hello, I am Jawad with ID 101
```

* Overriding allows **custom behavior while keeping base functionality**

---

## 2. Protected Members

* Accessible within parent and child classes, but not outside

```ts
class Person {
  protected role: string;
  constructor(role: string) {
    this.role = role;
  }
}

class Employee extends Person {
  showRole() {
    console.log(`Role: ${this.role}`); // accessible
  }
}

const emp = new Employee("Manager");
emp.showRole(); // Role: Manager
// console.log(emp.role); // ❌ Error: protected
```

---

## 3. Multiple Constructors with Optional Parameters

* TypeScript allows **single constructor**, but can simulate multiple by using optional parameters

```ts
class Employee extends Person {
  constructor(name: string, public employeeId?: number) {
    super(name);
  }
}

const emp1 = new Employee("Jawad");
const emp2 = new Employee("Ilyas", 102);
```

* Provides **flexibility for different initialization scenarios**

---

## 4. Calling Parent Methods

* You can call the parent method from child using `super.methodName()`

```ts
class Employee extends Person {
  greet() {
    super.greet(); // call parent greet
    console.log(`Employee ID: ${this.employeeId}`);
  }
}
```

---

## 5. Intermediate Best Practices

1. Use **method overriding** to customize child behavior
2. Use `protected` for properties needed in inheritance
3. Avoid unnecessary code duplication in child classes
4. Use optional parameters to simulate multiple constructors
5. Always call `super()` in child constructors

---

## 6. Intermediate Interview Questions

1. How do you override a parent method in TypeScript?
2. What is the difference between `private` and `protected` in inheritance?
3. How do you call a parent method from a child class?
4. Can you have multiple constructors in TypeScript classes? How to handle multiple initialization scenarios?
5. Explain practical use cases of inheritance in projects.

---

## Summary

* Intermediate inheritance includes **method overriding, protected members, optional parameters, and parent method calls**
* Allows **custom behavior while reusing base class logic**
* Prepares developers for **expert-level OO
