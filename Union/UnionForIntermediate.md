# TypeScript Union Types – Intermediate Guide

This guide covers **intermediate-level usage of union types in TypeScript**, including advanced type narrowing, type guards, and combinations with other types.

---

## 1. Type Guards with Union Types

* Use **custom type guards** to narrow down union types

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
```

* Ensures **safe access to properties and methods**

---

## 2. Union Types with Generics

```ts
function wrapValue<T extends string | number>(value: T): T[] {
  return [value];
}

const stringArray = wrapValue("Hello"); // string[]
const numberArray = wrapValue(42);      // number[]
```

* **Generics** enhance union type usage for reusable functions

---

## 3. Union Types in Functions

* Accepting **multiple types in parameters and returning unions**

```ts
function processValue(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

console.log(processValue("hello")); // HELLO
console.log(processValue(10));      // 20
```

* TypeScript **enforces type checking** for all possible types

---

## 4. Combining Union Types with Other Types

```ts
type ID = string | number;
type Status = "active" | "inactive";

let userId: ID = 101;
let userStatus: Status = "active";

userId = "abc123";      // ✅ valid
userStatus = "inactive"; // ✅ valid
```

* Allows **flexible yet type-safe assignments**

---

## 5. Best Practices

1. Always **narrow the type** before using union values
2. Use **type guards** for custom objects
3. Combine **union types with generics** for reusable functions
4. Avoid unions with too many types, as it reduces readability
5. Consider **type aliases** for repeated union types

---

## 6. Intermediate Interview Questions

1. How do you use custom type guards with union types?
2. How can union types be combined with generics?
3. Explain type narrowing with union types.
4. Give an example of a function returning a union type.
5. How do you combine union types with other types like literals?
6. Why is it important to check all possible types in a union?

---

## Summary

* Intermediate union types focus on **type guards, generics, and flexible assignments**
* Provides **type safety while handling multiple possible types**
* Prepares developers for **expert-level union type usage and complex scenarios**
