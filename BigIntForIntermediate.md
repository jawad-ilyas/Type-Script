# TypeScript BigInt Data Type - Intermediate Examples

## 1. Overview

**Definition:**

* `BigInt` is a primitive type in TypeScript for representing integers **larger than Number.MAX_SAFE_INTEGER**.
* Useful in situations requiring precise calculations with very large numbers.
* Must ensure `tsconfig.json` target is `ES2020` or higher.

**Intermediate Focus:**

* Using BigInt with functions, conversions, comparisons, and type safety.

---

## 2. Examples

```ts
// Converting number to BigInt
let normalNumber: number = 123456789;
let bigFromNumber: bigint = BigInt(normalNumber);
console.log("Converted BigInt:", bigFromNumber);

// Comparing BigInt values
let bigA: bigint = 10000000000000000n;
let bigB: bigint = 20000000000000000n;
console.log("bigA < bigB:", bigA < bigB); // true
console.log("bigA === bigB:", bigA === bigB); // false

// Using BigInt in functions
function multiplyBig(a: bigint, b: bigint): bigint {
    return a * b;
}
console.log(multiplyBig(1000000000000000n, 2000000000000000n));

// Using BigInt with array of values
let bigNumbers: bigint[] = [10n, 20n, 30n];
let total: bigint = bigNumbers.reduce((acc, val) => acc + val, 0n);
console.log("Sum of BigInt array:", total);

// Type safety: mixing number and BigInt
let num: number = 50;
let bigNum: bigint = 100n;
// let sum = num + bigNum; // ❌ Error
let correctSum = BigInt(num) + bigNum; // ✅ Correct
console.log("Sum after conversion:", correctSum);
```

---

## 3. Notes

* Always convert `number` to `BigInt` before operations.
* Avoid using `Math` functions directly with BigInt.
* BigInt comparison operators (`<`, `>`, `===`) work the same as numbers.
* Ideal for **cryptography, large ID handling, and high-precision calculations**.

---

## 4. Intermediate-Level Interview Questions

1. How do you convert a number to a BigInt and vice versa?
2. What are some practical use cases for BigInt in TypeScript?
3. Can you mix BigInt and number in arithmetic operations? Explain.
4. How does TypeScript enforce type safety with BigInt?
5. Give an example of using BigInt in an array and performing calculations.
6. Why can’t you use Math functions directly with BigInt? How can you work around it?
7. How do comparison operators work with BigInt?
8. What TypeScript compiler target is required to use BigInt?
9. Explain why BigInt is safer than number for very large integers.
10. Can BigInt values be negative? Give an example.
