# TypeScript `static` Keyword — Beginner Guide

This guide explains the **`static` keyword in TypeScript** for beginners, focusing on its **basic usage, examples, and interview questions**.

---

## 1. What is the `static` keyword?

* The `static` keyword allows you to **define properties or methods that belong to the class itself**, not to instances of the class.
* Access them directly using the class name.

---

## 2. Static Property Example

```ts
class Circle {
  static pi: number = 3.14159;

  static calculateArea(radius: number): number {
    return Circle.pi * radius * radius;
  }
}

console.log(Circle.pi); // 3.14159
console.log(Circle.calculateArea(5)); // 78.53975
```

* `pi` and `calculateArea` are **shared by all instances**.
* No need to create an instance to access them.

---

## 3. Accessing Static Members

```ts
const circle = new Circle();
// console.log(circle.pi); // ❌ Error: cannot access static property from instance
console.log(Circle.pi); // ✅ Correct
```

* Static members **cannot be accessed through instances**.
* Only the class itself can access them.

---

## 4. Use Cases for `static`

1. **Utility methods** (e.g., calculations)
2. **Constant values** (shared across all instances)
3. **Factory methods** (create instances in a controlled way)

---

## 5. Beginner Interview Questions

1. What does the `static` keyword do in TypeScript?
2. How do you access a static property or method?
3. Can you access static members from instances?
4. Give an example of when to use a static method.
5. What is the difference between static and instance properties?

---

## Summary

* `static` properties and methods belong to the **class itself**.
* They **cannot be accessed through instances**.
* Useful for **constants, utilities, and shared behaviors**.
* Beginner-friendly way to understand **class-level behavior** in TypeScript.
