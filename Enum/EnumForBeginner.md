# TypeScript Enums — Beginner Guide

This guide covers **basic usage of Enums in TypeScript** for beginners.

---

## 1. What is an Enum?

* An **Enum** (short for *enumeration*) is a way to define a set of **named constants**.
* Enums help to **give names to numbers or strings**, making the code more readable and maintainable.

```ts
// Numeric Enum
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

* By default, the first value starts at `0` and increments by 1.

---

## 2. String Enums

```ts
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

let currentStatus: Status = Status.Active;
console.log(currentStatus); // Output: ACTIVE
```

* String enums are **more readable** and do not auto-increment.

---

## 3. Accessing Enum Values

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction.Up); // 1
console.log(Direction[2]); // Down
```

* Numeric enums allow **reverse mapping**
* `Direction[2]` returns the name corresponding to the value `2`

---

## 4. Use Cases for Enums

* Represent **fixed set of values** (like directions, status, roles)
* Improve **code readability**
* Prevent using **magic numbers or strings**

---

## 5. Beginner Interview Questions

1. What is an Enum in TypeScript?
2. What is the difference between numeric and string enums?
3. How do you access an enum value by its name and by its number?
4. Why are enums useful in TypeScript?
5. Can enum values be mixed types?

---

## Summary

* Enums help **group related constants**
* Numeric enums can **auto-increment** and support reverse mapping
* String enums are **explicit and readable**
* Enums prevent **hardcoding values** and reduce errors
