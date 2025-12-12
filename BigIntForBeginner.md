# TypeScript BigInt Data Type - Beginner Examples

## 1. BigInt Overview

**Definition:**

* `BigInt` is a built-in JavaScript type (available in TypeScript) for representing **very large integers** beyond the `Number.MAX_SAFE_INTEGER` limit.
* It allows for precise calculations with numbers that are too big for the normal `number` type.

**Key Points:**

* Use the suffix `n` at the end of the number to create a BigInt.
* Not compatible with `Math` functions directly.
* Can be used in arithmetic operations with other BigInts.

---

## 2. Basic Examples

```ts
// Creating BigInt
let bigNumber: bigint = 9007199254740991n; // MAX_SAFE_INTEGER
console.log("BigInt value:", bigNumber);

// Arithmetic with BigInt
let firstBig: bigint = 10000000000000000n;
let secondBig: bigint = 20000000000000000n;
let sumBig: bigint = firstBig + secondBig;
console.log("Sum of BigInts:", sumBig);

// Subtraction
let diffBig: bigint = secondBig - firstBig;
console.log("Difference of BigInts:", diffBig);

// Multiplication
let mulBig: bigint = firstBig * 2n;
console.log("Multiplication result:", mulBig);

// Division
let divBig: bigint = secondBig / 2n;
console.log("Division result:", divBig);
```

---

## 3. Important Notes

* **Cannot mix `BigInt` with `number` directly:**

```ts
let num: number = 10;
let big: bigint = 20n;
// let result = num + big; // ❌ Error
let result = BigInt(num) + big; // ✅ Correct way
console.log(result); // 30n
```

* BigInt is supported in **ES2020 or higher**, make sure `tsconfig.json` target is `ES2020` or later.

* BigInt is primarily used for **large integer calculations**, such as IDs, timestamps, or cryptography.

---

## 4. Beginner-Level Interview Questions

1. What is BigInt in TypeScript and why do we need it?
2. How do you declare a BigInt value?
3. What is the difference between `number` and `BigInt`?
4. Can you perform arithmetic operations between `number` and `BigInt`? Explain.
5. Why is BigInt useful when working with very large integers?
6. Which TypeScript target should be set in tsconfig.json to use BigInt?
7. Can BigInt be used with `Math` methods directly? Why or why not?
8. Give an example of adding, subtracting, multiplying, and dividing BigInts.
9. What is the suffix used to create a BigInt literal?
10. Can BigInt be negative or zero?
