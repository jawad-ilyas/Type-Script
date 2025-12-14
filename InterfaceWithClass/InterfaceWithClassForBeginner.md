# TypeScript Interface with Class — Beginner Guide

This guide explains how **interfaces work with classes** in TypeScript, designed for **beginners**.

---

## 1. What is an Interface?

* An interface **defines a contract** for objects or classes.
* It specifies **what properties and methods an object must have**.
* Interfaces do **not contain implementation**.

```ts
interface Person {
  name: string;
  age: number;
  greet(): void;
}
```

---

## 2. Implementing Interface in a Class

* Use the `implements` keyword.
* The class must provide all **properties and methods** defined in the interface.

```ts
class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const student1 = new Student("Jawad", 22);
student1.greet(); // Hello, my name is Jawad
```

---

## 3. Key Points for Beginners

1. Interface only defines **structure**, no implementation.
2. Class must **implement all properties and methods**.
3. Constructor can be used to initialize properties.
4. Interfaces help in **type safety and autocomplete**.

---

## 4. Interface with Optional Properties

* Some properties can be optional using `?`

```ts
interface Employee {
  id: number;
  name: string;
  department?: string; // optional
}

class Worker implements Employee {
  id: number;
  name: string;
  department?: string;

  constructor(id: number, name: string, department?: string) {
    this.id = id;
    this.name = name;
    this.department = department;
  }
}

const emp = new Worker(1, "Ali");
console.log(emp);
```

---

## 5. Interface with Methods Only

* Interfaces can also define **methods only**, useful for behavior contracts.

```ts
interface Logger {
  log(message: string): void;
  error(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log("LOG:", message);
  }

  error(message: string): void {
    console.error("ERROR:", message);
  }
}

const logger = new ConsoleLogger();
logger.log("System started");
logger.error("Something went wrong");
```

---

## 6. Beginner Interview Questions

1. What is an interface in TypeScript?
2. How do classes implement interfaces?
3. Can an interface have optional properties?
4. Can an interface have methods only?
5. What happens if a class does not implement all interface members?

---

## Summary

* Interfaces define **contracts** for classes.
* Classes must **implement all interface members**.
* Helps with **type safety, autocomplete, and clean code**.
* Beginner-friendly way to understand **OOP in TypeScript**.
