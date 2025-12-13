# TypeScript Classes and Objects – Expert Guide

This guide covers **expert-level usage of classes and objects in TypeScript**, including abstract classes, interfaces with classes, generics, decorators, and advanced design patterns.

---

## 1. Abstract Classes

* Abstract classes cannot be instantiated directly; they are **used as base classes**

```ts
abstract class Person {
  constructor(public name: string) {}

  abstract getDetails(): string;

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, public salary: number) {
    super(name);
  }

  getDetails(): string {
    return `${this.name} earns ${this.salary}`;
  }
}

const emp = new Employee("Jawad", 50000);
console.log(emp.getDetails()); // Jawad earns 50000
emp.greet(); // Hello, my name is Jawad
```

* Enforces **method contracts in child classes**

---

## 2. Implementing Interfaces in Classes

* Classes can implement interfaces for **strict type contracts**

```ts
interface Identifiable {
  id: number;
  getId(): number;
}

class User implements Identifiable {
  constructor(public id: number) {}
  getId(): number {
    return this.id;
  }
}

const user = new User(101);
console.log(user.getId()); // 101
```

---

## 3. Generics in Classes

* Makes classes **reusable with multiple types**

```ts
class Repository<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Jawad" });
console.log(userRepo.getAll());
```

---

## 4. Decorators (Advanced Feature)

* Decorators are functions that **modify classes, properties, or methods**

```ts
function Log(target: any, propertyKey: string) {
  console.log(`${propertyKey} has been decorated`);
}

class Employee {
  @Log
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const emp = new Employee("Jawad");
```

* Enables **meta-programming and logging**

---

## 5. Expert Best Practices

1. Use abstract classes for **shared base logic** with mandatory overrides
2. Use interfaces to enforce **strict contracts**
3. Use generics for **reusable and type-safe classes**
4. Use decorators for **cross-cutting concerns** like logging or validation
5. Follow **SOLID principles** in OOP design

---

## 6. Expert Interview Questions

1. What are abstract classes and how do they differ from regular classes?
2. How do interfaces enhance class design?
3. Explain generics in classes with an example.
4. How do decorators work in TypeScript? Give an example.
5. What are advanced OOP patterns you use in TypeScript projects?
6. How do you enforce type safety in complex class hierarchies?

---

## Summary

* Expert classes involve **abstract classes, interfaces, generics, and decorators**
* Enables **scalable, reusable, and type-safe OOP design** in large projects
* Prepares developers for **expert-level TypeScript architecture and interviews**
