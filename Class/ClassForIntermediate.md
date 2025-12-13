# TypeScript Classes and Objects – Intermediate Guide

This guide covers **intermediate-level usage of classes and objects in TypeScript**, including inheritance, method overriding, getters/setters, and property modifiers.

---

## 1. Class Inheritance

* A class can **extend another class** to inherit its properties and methods

```ts
class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, age: number, public salary: number) {
    super(name, age);
  }

  greet() {
    console.log(`Hello, I am ${this.name}, and my salary is ${this.salary}`);
  }
}

const emp = new Employee("Jawad", 28, 50000);
emp.greet(); // Hello, I am Jawad, and my salary is 50000
```

* `super()` calls the parent class constructor
* Method overriding allows **custom behavior in child classes**

---

## 2. Getters and Setters

* Used to **control access** to class properties

```ts
class Employee {
  private _salary: number;

  constructor(salary: number) {
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._salary = value;
  }
}

const emp = new Employee(50000);
console.log(emp.salary); // 50000
emp.salary = 60000;
console.log(emp.salary); // 60000
```

* Provides **encapsulation and validation**

---

## 3. Access Modifiers and Readonly

* Intermediate usage includes **protected** and **readonly**

```ts
class Person {
  protected role: string;
  readonly id: number;

  constructor(role: string, id: number) {
    this.role = role;
    this.id = id;
  }
}

class Employee extends Person {
  constructor(role: string, id: number, public name: string) {
    super(role, id);
  }

  showRole() {
    console.log(this.role); // accessible via protected
  }
}
```

* `protected` allows child classes to access, but not outside classes
* `readonly` prevents modification after initialization

---

## 4. Static Properties and Methods

* Properties/methods that belong to the class itself, not instances

```ts
class Employee {
  static company = "TechCorp";

  static showCompany() {
    console.log(`Company: ${Employee.company}`);
  }
}

Employee.showCompany(); // Company: TechCorp
```

---

## 5. Intermediate Best Practices

1. Use inheritance for **shared properties/methods**
2. Use getters/setters for **encapsulation and validation**
3. Use `protected` for **child class access**
4. Use `static` for **class-level properties/methods**
5. Keep methods small and **reusable**

---

## 6. Intermediate Interview Questions

1. How does inheritance work in TypeScript classes?
2. What is method overriding and how is it used?
3. Explain getters and setters with an example.
4. Difference between `private`, `protected`, and `public` modifiers.
5. How are static properties and methods different from instance properties/methods?

---

## Summary

* Intermediate classes include **inheritance, method overriding, getters/setters, protected, readonly, and static members**
* Provides **encapsulation, reusability, and structured object-oriented design**
* Prepares developers for **expert-level OOP and TypeScript design patterns**
