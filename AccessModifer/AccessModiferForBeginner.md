# TypeScript Access Modifiers – Beginner Guide

This guide covers **beginner-level understanding of access modifiers in TypeScript**, including public, private, and readonly properties, with examples and interview questions.

---

## 1. What are Access Modifiers?

* Access modifiers control **visibility of class properties and methods**
* TypeScript supports: `public`, `private`, and `readonly` at beginner level

---

## 2. Public Modifier

* Default access if no modifier is specified
* Accessible **anywhere** (inside and outside the class)

```ts
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Jawad");
console.log(p.name); // Jawad
```

---

## 3. Private Modifier

* Accessible **only inside the class**

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

const p = new Person(25);
p.showAge();        // 25
// console.log(p.age); // ❌ Error: age is private
```

---

## 4. Readonly Modifier

* Can be accessed but **cannot be changed after initialization**

```ts
class Employee {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const emp = new Employee(101);
console.log(emp.id); // 101
// emp.id = 102;      // ❌ Error: readonly property
```

---

## 5. Beginner Best Practices

1. Use `public` for properties that **should be freely accessible**
2. Use `private` for **internal class logic**
3. Use `readonly` for **immutable properties**
4. Start simple and gradually combine modifiers for complex classes

---

## 6. Beginner Interview Questions

1. What are access modifiers in TypeScript?
2. What is the default access modifier?
3. Explain `public`, `private`, and `readonly` with examples.
4. Can a `private` property be accessed outside the class?
5. How do you make a property immutable?

---

## Summary

* Access modifiers control **visibility and mutability** of class members
* `public` = accessible anywhere, `private` = inside class only, `readonly` = immutable
* Beginner-level understanding prepares for **intermediate and expert OOP concepts in TypeScript**
