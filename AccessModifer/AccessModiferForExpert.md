# TypeScript Access Modifiers – Expert Guide

This guide covers **expert-level usage of access modifiers in TypeScript**, including advanced patterns, private/protected fields with `#`, accessors, encapsulation in large-scale projects, and best practices.

---

## 1. Private Fields using `#`

* TypeScript supports **true private fields** using `#`
* Not accessible outside the class or in subclasses

```ts
class Employee {
  #salary: number;

  constructor(salary: number) {
    this.#salary = salary;
  }

  getSalary(): number {
    return this.#salary;
  }
}

const emp = new Employee(50000);
console.log(emp.getSalary()); // 50000
// console.log(emp.#salary); // ❌ Error: truly private
```

* Provides **strong encapsulation** compared to `private`

---

## 2. Protected and Private in Complex Hierarchies

```ts
class Person {
  protected role: string;
  private id: number;

  constructor(role: string, id: number) {
    this.role = role;
    this.id = id;
  }
}

class Manager extends Person {
  showRole() {
    console.log(this.role); // ✅ accessible
    // console.log(this.id); // ❌ Error: private not accessible
  }
}
```

* Use **protected** for hierarchical access, **private** for internal-only

---

## 3. Accessors with Validation

* Use **getters and setters** to control access

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
    if (value < 0) throw new Error("Salary cannot be negative");
    this._salary = value;
  }
}

const emp = new Employee(50000);
emp.salary = 60000; // ✅
// emp.salary = -100; // ❌ Error
```

* Combines **encapsulation, validation, and immutability**

---

## 4. Combining `readonly` with Access Modifiers

* Ensure properties **cannot be changed after initialization** even in subclasses

```ts
class Employee {
  protected readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Manager extends Employee {
  constructor(id: number) {
    super(id);
    // this.id = 101; // ❌ Error: readonly
  }
}
```

---

## 5. Expert Best Practices

1. Prefer `#` for **true private encapsulation** in complex apps
2. Use `protected` for **hierarchical access**
3. Combine `readonly` and `protected` for **safe inheritance**
4. Use accessors (`get`/`set`) to **validate and control access**
5. Follow **SOLID principles** for large-scale OOP design

---

## 6. Expert Interview Questions

1. What is the difference between `private` and `#private` fields?
2. How can you enforce encapsulation in complex class hierarchies?
3. Explain the use of getters and setters with access modifiers.
4. How does `readonly` interact with inheritance and protected/private members?
5. What are best practices for access control in large TypeScript projects?

---

## Summary

* Expert access modifiers include **true private fields, protected fields, accessors, and readonly properties**
* Enables **strong encapsulation, validation, and safe inheritance**
* Prepares developers for **expert-level TypeScript OOP and large-scale project design**
