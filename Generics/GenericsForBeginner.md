# TypeScript Generics — Beginner Guide

This guide covers **basic usage of generics in TypeScript** for beginners.

---

## 1. What are Generics?

* Generics allow you to **write flexible, reusable functions and classes**.
* They help maintain **type safety** while working with multiple types.

```ts
function identity<T>(value: T): T {
  return value;
}

const numberResult = identity<number>(5);
const stringResult = identity<string>("Hello");

console.log(numberResult); // 5
console.log(stringResult); // Hello
```

* `T` is a **placeholder for a type**
* Generics make the function work with **any type safely**

---

## 2. Generic Arrays

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const nums = [1, 2, 3];
const firstNum = getFirstElement(nums); // 1

const words = ["a", "b", "c"];
const firstWord = getFirstElement(words); // "a"
```

* Works with **arrays of any type**
* TypeScript infers the type automatically

---

## 3. Generic Interfaces

```ts
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair1: Pair<number, string> = { first: 1, second: "one" };
const pair2: Pair<string, string> = { first: "a", second: "alpha" };

console.log(pair1, pair2);
```

* Interfaces can **use generics for properties**
* Provides **type safety across multiple data types**

---

## 4. Generic Classes

```ts
class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");
console.log(numberBox.getContents()); // 123
console.log(stringBox.getContents()); // Hello
```

* Classes can **store generic types safely**
* Reusable for **different types without losing type safety**

---

## 5. Beginner Interview Questions

1. What is a generic in TypeScript?
2. How do generics help maintain type safety?
3. Can you give an example of a generic function?
4. How are generics used in interfaces?
5. How are generics used in classes?
6. What is the difference between a generic and `any`?

---

## Summary

* Generics allow **flexible and type-safe code**
* Can be used in **functions, interfaces, and classes**
* Provides **reusability without sacrificing type safety**
