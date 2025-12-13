# TypeScript Enums — Expert Guide

This guide covers **expert-level usage of Enums in TypeScript**, focusing on **dynamic enums, hybrid enums, advanced patterns, and enterprise use cases**.

---

## 1. Heterogeneous Enums (Mixing String and Number)

```ts
enum Mixed {
  No = 0,
  Yes = "YES",
}

console.log(Mixed.No);  // 0
console.log(Mixed.Yes); // YES
```

* Heterogeneous enums are **rare but possible**
* Useful when mapping to external API values

---

## 2. Dynamic Enum Simulation (Object as Enum)

```ts
const Roles = {
  Admin: "ADMIN",
  User: "USER",
  Guest: "GUEST",
} as const;

type RolesType = typeof Roles[keyof typeof Roles];

function checkRole(role: RolesType) {
  console.log(`Role is ${role}`);
}

checkRole(Roles.Admin); // Role is ADMIN
```

* TypeScript **does not allow truly dynamic enums at runtime**
* `as const` + `keyof typeof` achieves **type-safe dynamic enums**

---

## 3. Reverse Mapping in Numeric Enums

```ts
enum Status {
  Pending = 1,
  Active,
  Completed
}

console.log(Status[2]); // Active
```

* Numeric enums **support reverse mapping**
* Not available for string enums

---

## 4. Enum Namespaces for Advanced Patterns

```ts
enum Colors {
  Red,
  Green,
  Blue
}

namespace Colors {
  export function isPrimary(color: Colors) {
    return color === Colors.Red || color === Colors.Green || color === Colors.Blue;
  }
}

console.log(Colors.isPrimary(Colors.Green)); // true
```

* Use namespaces to **extend enums with helper methods**
* Avoids polluting global scope

---

## 5. Enums in Enterprise Applications

* Use enums for **roles, permissions, status codes, API constants**
* Combine with **TypeScript generics and type-safe APIs**
* Prevent **magic strings/numbers** across large codebases

---

## 6. Expert Interview Questions

1. What are heterogeneous enums and when would you use them?
2. How can you simulate dynamic enums in TypeScript?
3. Explain reverse mapping in numeric enums.
4. How do enum namespaces work and why are they useful?
5. How would you design enums for enterprise-scale applications?
6. Can you mix string and numeric members in a single enum? Pros/cons?
7. How can TypeScript enums improve type safety in API responses?

---

## Summary

* Expert enums cover **heterogeneous enums, dynamic simulations, reverse mapping, and namespaces**
* Useful for **large-scale, maintainable applications**
* TypeScript ensures **type safety and prevents ma
