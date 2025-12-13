# TypeScript Enums — Intermediate Guide

This guide covers **intermediate usage of Enums in TypeScript**, including **custom values, computed values, const enums, and practical usage**.

---

## 1. Custom Numeric Values

```ts
enum Direction {
  Up = 10,
  Down = 20,
  Left = 30,
  Right = 40
}

console.log(Direction.Up);    // 10
console.log(Direction.Right); // 40
```

* Enums do not have to start at `0`.
* You can assign **custom numeric values** to any member.

---

## 2. Partially Initialized Enums

```ts
enum Status {
  Pending = 1,
  Active,   // 2 (auto-incremented)
  Inactive  // 3
}

console.log(Status.Active); // 2
```

* If some members are initialized, the rest **auto-increment** from the last value.

---

## 3. Computed and Constant Members

```ts
enum FileAccess {
  Read = 1 << 1,      // 2
  Write = 1 << 2,     // 4
  ReadWrite = Read | Write, // 6
  G = "123".length   // Computed value 3
}

console.log(FileAccess.ReadWrite); // 6
console.log(FileAccess.G);         // 3
```

* **Computed values** allow dynamic assignment
* Can use bitwise operations or expressions

---

## 4. Const Enums (Performance Optimization)

```ts
const enum Colors {
  Red,
  Green,
  Blue
}

let color: Colors = Colors.Green;
console.log(color); // Output: 1
```

* `const enum` **inlines the values** at compile time, reducing JS output size
* Cannot do reverse mapping with `const enum`

---

## 5. Practical Usage in Functions

```ts
enum Role {
  Admin,
  User,
  Guest
}

function checkAccess(role: Role) {
  if (role === Role.Admin) {
    console.log("Full access granted");
  } else {
    console.log("Limited access");
  }
}

checkAccess(Role.User); // Limited access
```

* TypeScript **enforces correct enum usage** in function parameters

---

## 6. Intermediate Interview Questions

1. What is the difference between numeric and string enums?
2. How can you assign custom numeric values in enums?
3. Explain computed enum members with an example.
4. What is a `const enum` and why is it used?
5. How can enums be used safely in functions?
6. What happens if you mix numeric and string members in an enum?
7. How does TypeScript handle auto-incremented enum members?

---

## Summary

* Intermediate enums allow **custom values, computed members, and const enums**
* Useful for **bitwise operations, flags, and role management**
* TypeScript ensures **type safety** when using enums in functions and comparisons
