# TypeScript Classes and Objects – Beginner Guide

This guide covers **beginner-level usage of classes and objects in TypeScript**, including definitions, basic examples, and interview questions.

---

## 1. What is a Class?

* **Definition:** A class is a blueprint for creating objects. It defines properties and methods that objects created from it will have.
* Classes are part of **Object-Oriented Programming (OOP)** in TypeScript.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an object
const person1 = new Person("Jawad", 25);
person1.greet(); // Output: Hello, my name is Jawad and I am 25 years old.
```

* The `constructor` initializes object properties
* Methods define **behaviors** for the objects

---

## 2. Object Creation

```ts
// Creating objects from class
const person2 = new Person("Ali", 30);
console.log(person2.name); // Ali
console.log(person2.age);  // 30
person2.greet();            // Hello, my name is Ali and I am 30 years old.
```

* Objects are **instances of classes**

---

## 3. Public, Private, and Readonly Properties

```ts
class Employee {
  public name: string;
  private salary: number;
  readonly id: number;

  constructor(name: string, salary: number, id: number) {
    this.name = name;
    this.salary = salary;
    this.id = id;
  }

  showSalary() {
    console.log(`Salary: ${this.salary}`);
  }
}

const emp = new Employee("Jawad", 50000, 1);
console.log(emp.name); // Jawad
// console.log(emp.salary); // ❌ Error: private
console.log(emp.id); // 1
emp.showSalary(); // Salary: 50000
```

* `public` is accessible anywhere, `private` is only inside the class, `readonly` cannot be changed after initialization

---

## 4. Beginner Best Practices

1. Use classes to **organize related properties and methods**
2. Use **constructor** to initialize properties
3. Use **access modifiers** (`public`, `private`, `readonly`) for encapsulation
4. Keep methods simple and reusable

---

## 5. Beginner Interview Questions

1. What is a class in TypeScript?
2. How do you create an object from a class?
3. What is the purpose of a constructor?
4. Explain `public`, `private`, and `readonly` properties with examples.
5. How do you call a method of an object?

---

## Summary

* Classes provide a **blueprint** to create objects in TypeScript
* Access modifiers (`public`, `private`, `readonly`) help manage **data encapsulation**
* Constructors initialize object properties and methods define behaviors
* Beginner understanding prepares for **intermediate and expert OOP usage in TypeScript**
