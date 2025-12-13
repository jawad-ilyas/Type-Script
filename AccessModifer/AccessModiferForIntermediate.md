# TypeScript Access Modifiers – Intermediate Guide

This guide covers **intermediate-level usage of access modifiers in TypeScript**, including `protected`, `private`, `public`, `readonly`, and their combination in inheritance and OOP patterns.

---

## 1. Public Modifier

* Accessible **anywhere**, inside or outside the class
* Can be inherited

```ts
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {}

const emp = new Employee("Jawad");
console.log(emp.name); // Jawad
```

---

## 2. Private Modifier

* Accessible **only inside the class**
* Not inherited by child classes

```ts
class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  showAge() {
    console.log(this.age);
  }
}

class Employee extends Person {
  // console.log(this.age); // ❌ Error: private property not accessible
}
```

---

## 3. Protected Modifier

* Accessible inside the class **and child classes**
* Not accessible outside the class hierarchy

```ts
class Person {
  protected role: string;

  constructor(role: string) {
    this.role = role;
  }
}

class Employee extends Person {
  showRole() {
    console.log(this.role); // Accessible here
  }
}

const emp = new Employee("Manager");
emp.showRole(); // Manager
// console.log(emp.role); // ❌ Error: protected property
```

---

## 4. Readonly Modifier

* Can be combined with **public, private, or protected**
* Ensures **property cannot be changed after initialization**

```ts
class Employee {
  readonly id: number;
  protected readonly department: string;

  constructor(id: number, department: string) {
    this.id = id;
    this.department = department;
  }
}
```

---

## 5. Combining Access Modifiers in Inheritance

```ts
class Person {
  public name: string;
  protected role: string;
  private salary: number;

  constructor(name: string, role: string, salary: number) {
    this.name = name;
    this.role = role;
    this.salary = salary;
  }
}

class Employee extends Person {
  showInfo() {
    console.log(this.name);  // public
    console.log(this.role);  // protected
    // console.log(this.salary); // ❌ private
  }
}
```

* Provides **encapsulation and controlled inheritance**

---

## 6. Intermediate Best Practices

1. Use `public` for widely accessible properties
2. Use `private` to **hide sensitive data**
3. Use `protected` for properties **needed in child classes**
4. Combine `readonly` for **immutability**
5. Keep class hierarchies simple and readable

---

## 7. Intermediate Interview Questions

1. What is the difference between `private` and `protected`?
2. Can a private property be inherited?
3. How does `readonly` work with access modifiers?
4. Explain the visibility of public, private, and protected members in inheritance.
5. Give an example where combining `protected` and `readonly` is useful.

---

## Summary

* Intermediate access modifiers cover **public, private, protected, and readonly** with inheritance usage
* Provides **controlled access, encapsulation, and immutability**
* Prepares developers for **expert-level OOP and TypeScript design patterns**
