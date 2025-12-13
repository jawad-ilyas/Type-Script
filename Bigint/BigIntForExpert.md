# TypeScript BigInt Data Type - Expert Examples

## 1. Expert Overview

**Definition:**

* `BigInt` is a primitive type for arbitrarily large integers beyond the safe limit of `number`.
* Expert-level use focuses on **performance, type safety, conversions, and precision in complex operations**.

**Advanced Features:**

* Using BigInt with generics, APIs, precise large number calculations.
* Handling BigInt in JSON and TypeScript type inference.

---

## 2. Advanced Examples

```ts
// Function accepting BigInt generically
function calculatePower<T extends bigint>(base: T, exponent: T): bigint {
    let result: bigint = 1n;
    for (let i = 0n; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(calculatePower(2n, 10n)); // 1024n

// BigInt in JSON (must convert to string)
let bigValue: bigint = 9007199254740991000n;
let jsonString = JSON.stringify({ value: bigValue.toString() });
console.log(jsonString); // {"value":"9007199254740991000"}

// Parsing back from string
let parsed = JSON.parse(jsonString);
let restoredBig: bigint = BigInt(parsed.value);
console.log(restoredBig); // 9007199254740991000n

// BigInt with large financial calculations
type AccountBalance = { accountId: string, balance: bigint };
let accounts: AccountBalance[] = [
    { accountId: 'A1', balance: 1000000000000000n },
    { accountId: 'A2', balance: 2000000000000000n }
];
let totalBalance: bigint = accounts.reduce((acc, accObj) => acc + accObj.balance, 0n);
console.log("Total balance:", totalBalance);

// Handling BigInt in generic classes
class BigIntContainer<T extends bigint> {
    constructor(public value: T) {}
    add(other: T): T {
        return (this.value + other) as T;
    }
}
let container = new BigIntContainer(1000n);
console.log(container.add(500n)); // 1500n
```

---

## 3. Expert Notes

* BigInt must be converted to string for **JSON serialization**.
* Mixing `number` and `BigInt` in arithmetic operations requires explicit conversion.
* BigInt is **ideal for precise calculations in finance, cryptography, and IDs**.
* TypeScript compiler target must be **ES2020** or higher.
* Supports **all standard comparison operators** (`<`, `>`, `<=`, `>=`, `===`, `!==`).

---

## 4. Expert-Level Interview Questions

1. How do you handle BigInt values in JSON serialization and deserialization?
2. Explain the difference between BigInt and number in terms of precision and performance.
3. How can generics be used with BigInt in TypeScript functions or classes?
4. Can BigInt be used with Math functions? If not, what are the alternatives?
5. Demonstrate a use case of BigInt for financial calculations.
6. How does TypeScript enforce type safety when mixing BigInt and number types?
7. Explain potential performance issues when using BigInt in large computations.
8. How do you handle BigInt in TypeScript when interacting with APIs that return numbers as strings?
9. Can BigInt be negative, zero, or positive? Give examples.
10. Describe a scenario where BigInt is preferred over number in a TypeScript application.
