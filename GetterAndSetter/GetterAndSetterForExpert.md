# Getter and Setter in TypeScript — Expert Guide

This guide covers **expert-level usage of Getter and Setter in TypeScript**, focusing on **architecture, performance, inheritance, abstraction, immutability, and real-world enterprise patterns**.

---

## 1. Expert Perspective on Getter & Setter

At expert level, getter and setter are used to:

* Enforce **business invariants**
* Protect **domain models**
* Create **immutable or controlled mutable state**
* Hide internal implementation details
* Design **clean APIs** for classes and libraries

Getter/Setter are no longer just syntax — they are **design tools**.

---

## 2. Encapsulation & Domain Integrity

```ts
class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = value;
  }
}
```

✔ Protects domain rules
✔ Prevents invalid state

---

## 3. Getter & Setter with Inheritance

```ts
class Employee {
  protected _salary: number = 0;

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error("Invalid salary");
    this._salary = value;
  }
}

class Manager extends Employee {
  set salary(value: number) {
    if (value < 50000) {
      throw new Error("Manager salary too low");
    }
    super.salary = value;
  }
}
```

✔ Business rules refined in subclasses
✔ Open–Closed Principle

---

## 4. Abstract Classes with Getter & Setter

```ts
abstract class Shape {
  abstract get area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  get area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

✔ Enforces contract
✔ Common in frameworks and libraries

---

## 5. Immutability Pattern (No Setter)

```ts
class Config {
  constructor(private readonly _env: string) {}

  get env(): string {
    return this._env;
  }
}
```

✔ Immutable after construction
✔ Thread-safe, predictable

---

## 6. Lazy Evaluation with Getter

```ts
class HeavyCalculation {
  private _result?: number;

  get result(): number {
    if (this._result === undefined) {
      console.log("Calculating...");
      this._result = Math.random() * 1000;
    }
    return this._result;
  }
}
```

✔ Performance optimization
✔ Compute only when needed

---

## 7. Side Effects: What NOT to Do

❌ Avoid state mutation inside getters

```ts
get value(): number {
  this._count++; // ❌ bad practice
  return this._count;
}
```

✔ Getters should be **pure and predictable**

---

## 8. Getter/Setter vs Public Fields (Expert Decision)

| Scenario          | Use             |
| ----------------- | --------------- |
| Plain data        | Public field    |
| Validation needed | Setter          |
| Derived value     | Getter          |
| Immutable data    | Getter only     |
| Domain rules      | Getter + Setter |

---

## 9. Performance Considerations

* Getter is executed **every time accessed**
* Avoid heavy computation in getters
* Cache results if needed

---

## 10. Getter & Setter in Frameworks

* Angular → component state
* ORM entities → field validation
* Domain-driven design (DDD)
* API response models

---

## 11. Common Expert Mistakes ❌

❌ Overusing getters for everything
❌ Adding business logic inside getters
❌ Breaking encapsulation via public fields
❌ Ignoring immutability when required

---

## 12. Expert Interview Questions

1. When should you avoid getters and setters?
2. How do getters affect performance?
3. Explain lazy evaluation with getters
4. Difference between readonly and getter-only
5. How do getters work with inheritance?
6. Can getters break immutability?
7. Real-world use cases in large applications

---

## 13. Summary

* Expert getter/setter enforce **design & correctness**
* Used for domain modeling, security, and performance
* Poor usage leads to hidden bugs
* Correct usage leads to clean architecture

---

✅ Enterprise-ready
✅ Interview-strong
✅ Architecture-focused
