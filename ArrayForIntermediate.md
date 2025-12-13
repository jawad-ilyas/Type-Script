# TypeScript Arrays – Intermediate Guide

This guide covers **intermediate-level usage of arrays in TypeScript**, including advanced operations, type safety, and common patterns.

---

## 1. Typed Arrays

```ts
let numbers: number[] = [10, 20, 30];
let names: string[] = ["Jawad", "Ali", "Ilyas"];
```

* Always define type for **safety**.
* Mixed types require union:

```ts
let mixed: (string | number)[] = [1, "Two", 3, "Four"];
```

---

## 2. Array Methods

### a. map()

```ts
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

### b. filter()

```ts
let ages = [12, 20, 25, 15];
let adults = ages.filter(a => a >= 18);
console.log(adults); // [20, 25]
```

### c. reduce()

```ts
let total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
console.log(total); // 60
```

---

## 3. Tuples vs Arrays

* Tuples have **fixed length and type per position**
* Arrays have **dynamic length and same type**

```ts
let tuple: [string, number] = ["Jawad", 22];
let array: number[] = [1, 2, 3];
```

---

## 4. Multi-dimensional Arrays

```ts
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];
console.log(matrix[0][1]); // 2
```

---

## 5. Readonly Arrays

Prevent modification of array elements

```ts
const readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // ❌ Error
```

---

## 6. Spread and Destructuring

```ts
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

let [first, ...rest] = combined;
console.log(first, rest); // 1, [2, 3, 4]
```

---

## 7. Array Type Aliases

```ts
type NumArray = number[];
let values: NumArray = [10, 20, 30];
```

* Makes code **readable and reusable**

---

## 8. Common Intermediate Mistakes

❌ Ignoring type consistency
❌ Using `any` unnecessarily
❌ Modifying `readonly` arrays
❌ Nested arrays without typing

---

## 9. Best Practices

* Always type arrays explicitly
* Prefer `readonly` for immutable arrays
* Use map, filter, reduce instead of loops when possible
* Avoid `any` unless necessary

---

## 10. Intermediate Interview Questions

1. Difference between array and tuple in TypeScript?
2. How does `map` differ from `forEach`?
3. How to create readonly arrays and why?
4. How do you type multi-dimensional arrays?
5. Explain union types in arrays.
6. How do you destructure arrays?
7. Why prefer type aliases for arrays?
8. Explain common mistakes when handling arrays.

---

## Summary

Intermediate arrays cover:

* Array methods: map, filter, reduce
* Tuples vs arrays
* Readonly and multi-dimensional arrays
* Type aliases and best practices

This prepares you for **expert-level array manipulation** and complex data structures in TypeScript.
