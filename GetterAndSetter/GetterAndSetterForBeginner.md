# Getter and Setter in TypeScript — Beginner Guide

This guide explains **Getter and Setter in TypeScript** in **very simple wording**, designed for **absolute beginners**.

---

## 1. What are Getter and Setter?

In TypeScript, **getter** and **setter** are special methods used inside a **class** to:

* **Getter (`get`)** → read a value
* **Setter (`set`)** → update a value

They help us **control access** to class properties.

---

## 2. Why Do We Need Getter and Setter?

Without getter and setter, anyone can change class data **directly**, which may cause problems.

### Problem Example (No Getter/Setter)

```ts
class User {
  name: string = "";
}

const u1 = new User();
u1.name = ""; // ❌ invalid but allowed
```

👉 Anyone can assign wrong values.

---

## 3. Basic Getter and Setter Example

```ts
class User {
  private _name: string = "";

  // setter
  set name(value: string) {
    if (value.length === 0) {
      console.log("Name cannot be empty");
    } else {
      this._name = value;
    }
  }

  // getter
  get name(): string {
    return this._name;
  }
}

const user1 = new User();
user1.name = "Jawad";   // setter called
console.log(user1.name); // getter called
```

---

## 4. Why Use `private` Property?

```ts
private _name: string;
```

* `private` means **cannot be accessed directly**
* Forces users to use **getter and setter**

---

## 5. Important Beginner Rules

### ✔ Getter Rules

* No parameters
* Must return a value

```ts
get name(): string {
  return this._name;
}
```

### ✔ Setter Rules

* Only **one parameter**
* No return type

```ts
set name(value: string) {
  this._name = value;
}
```

---

## 6. Using Getter & Setter Like a Property

```ts
user1.name = "Ali";      // setter
console.log(user1.name); // getter
```

❗ No `()` brackets

---

## 7. Another Simple Example (Age Validation)

```ts
class Person {
  private _age: number = 0;

  set age(value: number) {
    if (value < 0) {
      console.log("Age cannot be negative");
    } else {
      this._age = value;
    }
  }

  get age(): number {
    return this._age;
  }
}

const p1 = new Person();
p1.age = 25;
console.log(p1.age);
```

---

## 8. Read-Only Property (Getter Only)

```ts
class Product {
  private _price: number = 100;

  get price(): number {
    return this._price;
  }
}

const product = new Product();
console.log(product.price);
// product.price = 200; ❌ Error (no setter)
```

---

## 9. Real-Life Example (Easy)

🏦 **Bank Account**

* Getter → check balance
* Setter → deposit money with rules

You cannot access the bank vault directly.

---

## 10. Common Beginner Mistakes ❌

```ts
set value(a: number, b: number) {} // ❌ setter takes only one parameter
```

```ts
get value(x: number) {} // ❌ getter cannot take parameters
```

```ts
user1.name(); // ❌ getter is not a function
```

---

## 11. Beginner Interview Questions

1. What is a getter?
2. What is a setter?
3. Why do we use getter and setter?
4. Can a getter take parameters?
5. Can a setter take multiple parameters?
6. Why do we use `private` with getter/setter?
7. How do you create a read-only property?

---

## 12. Summary

* Getter → read data
* Setter → update data
* Used inside classes
* Improves data safety
* Important OOP concept

---

✅ **Beginner-friendly**
✅ **Interview-ready**
✅ **Copy-paste safe**
