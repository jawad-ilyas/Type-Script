# 🧠 TypeScript `number` Data Type — Expert-Level Guide + Interview Questions

This expert guide covers how TypeScript numbers work at a deep level — including  
precision, floating-point internals, safe math, branding types, discriminated unions,  
performance, design patterns, numeric modeling, and high-level interview questions.

---

# 1. How TypeScript Stores Numbers Internally (Deep Dive)

TypeScript numbers are **IEEE 754 double-precision floating point (64-bit)**:

| Bits | Meaning |
|------|---------|
| 1 bit | Sign |
| 11 bits | Exponent |
| 52 bits | Fraction (mantissa) |

### ✔ Equivalent to JavaScript Number  
TypeScript **does NOT add a new numeric type**, it simply adds static type-checking on top of JS behavior.

---

# 2. The Expert Problem: Floating-Point Errors

Many decimal values cannot be exactly stored in binary.

Example:
```ts
console.log(0.1 + 0.2 === 0.3); // false
```

Why?  
Actual binary result:
```
0.30000000000000004441
```

### ✔ Correcting Floating-Point Problems
```ts
function preciseAdd(a: number, b: number, decimal: number = 2) {
    return Number((a + b).toFixed(decimal));
}
```

### ✔ Use integer math for financial apps  
```ts
let totalCents = 1999 + 1999;
let total = totalCents / 100;
```

---

# 3. Advanced Number Type Modeling (Expert Practice)

## 3.1 Branding Types (Safer Numbers)
To prevent mixing units:

```ts
type Brand<K, T> = K & { __brand: T };

type USD = Brand<number, "USD">;
type PKR = Brand<number, "PKR">;

let price: USD = 25 as USD;
let salary: PKR = 100000 as PKR;

// salary = price; // ❌ prevented by TypeScript
```

This is critical in fintech, airline, medical, and scientific systems.

---

# 4. Range-Limited Numbers

Example: Allow numbers only between 1–100.

```ts
type Range1To100 = number & { __min: 1; __max: 100 };
```

Or using template literal types:

```ts
type Percentage = `${number}%`;
```

---

# 5. Numeric Discriminated Unions

```ts
type LoadingState =
  | { state: "idle" }
  | { state: "loading"; progress: number }
  | { state: "error"; code: number };
```

---

# 6. Exact Type Narrowing for Numbers

### ✔ Using `typeof`
```ts
function processInput(data: number | string) {
    if (typeof data === "number") return data * 2;
    return parseFloat(data);
}
```

### ✔ Using `Number.isFinite()`
```ts
if (Number.isFinite(value)) { ... }
```

---

# 7. BigInt vs Number Interoperability (Expert Concept)

`number` and `bigint` **cannot be mixed**:

```ts
10 + 10n; // ❌ TypeError
```

### ✔ Correct:
```ts
BigInt(10) + 10n;
```

### ✔ When to prefer BigInt?
- Crypto applications  
- Blockchain  
- High precision calculations  
- Large counters / timestamps  

---

# 8. Advanced Number Formatting

### ✔ `Intl.NumberFormat`
```ts
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}).format(1999.25);
```

### ✔ Formatting with commas
```ts
console.log((1000000).toLocaleString());
```

---

# 9. Performance Considerations

### ✔ Use integers when possible  
Floating-point operations are slightly slower.

### ✔ Avoid unnecessary conversions  
```ts
Number(value)  
parseInt(value)
```

### ✔ Prefer `Math.imul` for integer multiplication
```ts
Math.imul(2, 4); // faster on some engines
```

---

# 10. Handling Unsafe Integer Ranges

### Maximum integer before precision issues:
```ts
Number.MAX_SAFE_INTEGER; 
```

### Safe check:
```ts
Number.isSafeInteger(100000000000);
```

---

# 11. Advanced Math Techniques

### ✔ Clamp value
```ts
const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);
```

### ✔ Random between range
```ts
const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;
```

### ✔ Degrees ↔ Radians
```ts
const toRad = (deg: number) => deg * (Math.PI / 180);
const toDeg = (rad: number) => rad * (180 / Math.PI);
```

---

# 12. Expert-Level Mistakes & Pitfalls

### ❌ Comparing floats directly
```ts
a === b; // dangerous
```

### ✔ Correct approach
```ts
Math.abs(a - b) < Number.EPSILON
```

### ❌ Using `parseInt` without radix
```ts
parseInt("010"); // → 10 or 8 depending on browser (unsafe)
```

### ✔ Correct
```ts
parseInt("010", 10);
```

---

# 13. Expert-Level Real-World Example  
## Financial System Handling (Banking Example)

Incorrect (unsafe):
```ts
let balance = 199.99 + 50.05;
```

Correct (scaled integers):
```ts
let balance = 19999 + 5005;
balance = balance / 100;
```

---

# 14. Expert-Level Interview Questions

### **Q1: Why does JavaScript use 64-bit floating point for all numbers?**
Because JS originally prioritized simplicity over performance and memory.

---

### **Q2: How does IEEE 754 floating point store decimal numbers?**
Using:
- Sign bit  
- Exponent  
- Mantissa  
This causes precision issues for decimal fractions.

---

### **Q3: What is `Number.EPSILON` used for?**
To compare floating numbers safely:
```ts
Math.abs(a - b) < Number.EPSILON
```

---

### **Q4: How do you design a type-safe numeric system (like PKR vs USD)?**
Use branding types:
```ts
type USD = number & { __brand: "USD" };
```

---

### **Q5: When should you use BigInt instead of number?**
- Extremely large integers  
- Cryptographic applications  
- Blockchain systems  
- Precise integer math  

---

### **Q6: Why does `parseInt("08")` sometimes give `0`?**
Because some JS engines interpret leading zero as octal.  
Always specify the radix.

---

### **Q7: How to ensure numeric input validation?**
- Use `Number.isFinite()`  
- Range validation  
- Branding types  
- Custom type guards

---

### **Q8: What is NaN boxing? (Expert-level)**  
A technique used internally by JS engines to store multiple data types inside 64-bit values — numbers, pointers, and small objects.

---

# 15. Summary for Expert Developers

You now understand:

✔ Internal number memory structure  
✔ Floating-point computation issues  
✔ Type branding and safe numeric models  
✔ BigInt interoperability  
✔ High-performance numeric operations  
✔ Advanced narrowing & algorithms  
✔ International formatting  
✔ Expert pitfalls & real-world fixes  

---

If you want, I can also generate:

- 🔥 **Complete TypeScript Data Types (Expert Level)**  
- 🧠 **TypeScript Interview Questions (Junior → Senior)**  
- 📘 **PDF version of all TypeScript notes**  
- ⚡ **Expert-Level TypeScript String / Boolean / Array MD files**

Just tell me!
