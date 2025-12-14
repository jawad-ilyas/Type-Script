# TypeScript Interface with Class — Intermediate Guide

This guide explains **intermediate-level usage of interfaces with classes** in TypeScript, focusing on **advanced typing, multiple interfaces, inheritance, and real-world patterns**.

---

## 1. Multiple Interface Implementation

* A class can implement **more than one interface**.
* Useful to combine behaviors.

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

class Manager implements Person, Employee {
  name: string;
  age: number;
  employeeId: number;
  department: string;

  constructor(name: string, age: number, employeeId: number, department: string) {
    this.name = name;
    this.age = age;
    this.employeeId = employeeId;
    this.department = department;
  }
}

const manager = new Manager("Ali", 30, 101, "IT");
console.log(manager);
```

---

## 2. Extending Interfaces

* Interfaces can **extend other interfaces**.
* This allows creating reusable, modular contracts.

```ts
interface Contact {
  email: string;
  phone?: string;
}

interface Client extends Person, Contact {}

class VIPClient implements Client {
  name: string;
  age: number;
  email: string;
  phone?: string;

  constructor(name: string, age: number, email: string, phone?: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }
}
```

---

## 3. Readonly and Optional Properties

* Enforce immutability using `readonly`
* Optional properties can remain optional in the class

```ts
interface Vehicle {
  readonly vin: string;
  brand: string;
  model?: string;
}

class Car implements Vehicle {
  readonly vin: string;
  brand: string;
  model?: string;

  constructor(vin: string, brand: string, model?: string) {
    this.vin = vin;
    this.brand = brand;
    this.model = model;
  }
}

const car = new Car("123ABC", "Toyota");
// car.vin = "456DEF"; ❌ Error, readonly
```

---

## 4. Interface for Function Signatures in Classes

* Interfaces can enforce **method signatures**.

```ts
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

class SimpleCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

---

## 5. Interface with Index Signatures in Classes

* Allows dynamic properties in a class.

```ts
interface Dictionary {
  [key: string]: string | number;
}

class Config implements Dictionary {
  [key: string]: string | number;
  apiUrl: string = "http://example.com";
  timeout: number = 5000;
}
```

---

## 6. Intermediate Interview Questions

1. Can a class implement multiple interfaces? Show an example.
2. How does interface inheritance work?
3. What is the difference between optional and readonly properties?
4. How can interfaces enforce method signatures?
5. How can you use index signatures with interfaces in a class?
6. Why use interfaces instead of abstract classes?

---

## Summary

* Interfaces provide **contracts for class structures**.
* Intermediate usage covers **multiple interfaces, inheritance, readonly & optional properties, and method enforcement**.
* Provides **type safety and maintainable OOP design** i

