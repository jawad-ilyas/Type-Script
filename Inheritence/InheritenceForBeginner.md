# TypeScript Inheritance – Beginner Guide

This guide covers **beginner-level understanding of inheritance in TypeScript**, including basic class extension, method usage, and simple examples.

---

## 1. What is Inheritance?

* **Definition:** Inheritance is a feature of object-oriented programming where a class can **derive properties and methods** from another class.
* The **base class (parent)** shares its behavior with the **derived class (child)**.

---

## 2. Basic Example

```ts
// Parent class
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Child class inherits from Person
class Employee extends Person {
  employeeId: number;

  constructor(name: string, employeeId: number) {
    super(name); // calls parent constructor
    this.employeeId = employeeId;
  }

  showId() {
    console.log(`Employee ID: ${this.employeeId}`);
  }
}

const emp = new Employee("Jawad", 101);
emp.greet();     // Hello, my name is Jawad
emp.showId();    // Employee ID: 101
```

* `super()` calls the **parent class constructor**
* Child class can access **parent methods**

---

## 3. Simple Notes

1. A class can inherit only **one class** in TypeScript (single inheritance)
2. Methods and properties of the parent are **available to the child**
3. You can add **additional properties and methods** in the child class

---

## 4. Beginner Best Practices

1. Use inheritance to **avoid code duplication**
2. Keep the parent class **generic and reusable**
3. Child class should only **extend and enhance** behavior
4. Use `super()` correctly in constructors

---

## 5. Beginner Interview Questions

1. What is inheritance in TypeScript?
2. How do you create a child class from a parent class?
3. What is the purpose of `super()`?
4. Can a child class override parent methods?
5. Explain single inheritance with an example.

---

## Summary

* Inheritance allows **code reuse and hierarchical relationships** between classes
* Use `extends` to derive a child class and `super()` to call parent constructor
* Beginner understanding sets the foundation for **intermediate and expert OOP concepts**
