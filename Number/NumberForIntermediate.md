# 🔢 TypeScript `number` Data Type — Intermediate-Level Guide + Interview Questions

This guide covers deeper concepts about the **`number`** type in TypeScript, including internal behavior, advanced conversions, type narrowing, numeric enums, pitfalls, Math utilities, and real-world use cases.

---

# 1. How Numbers Work Internally (Important for Intermediate Devs)

TypeScript numbers follow **IEEE 754 double-precision (64-bit floating point)**.

This creates special behaviors:

### ✔ Precision issue  
```ts
console.log(0.1 + 0.2); 
// 0.30000000000000004
```

### Why?  
Because some decimal values cannot be represented exactly in binary.

### ✔ Fix using `toFixed` or rounding:
```ts
Number((0.1 + 0.2).toFixed(2)); // 0.30
```

---

# 2. Strict Typing With `number`

### ✔ Union Types
```ts
let value: number | null = 10;
value = null;
```

### ✔ Literal Types (Intermediate Concept)
```ts
let speed: 10 | 20 | 30;
speed = 20; 
```

### ✔ Type Narrowing
```ts
function square(value: number | string) {
    if (typeof value === "number") {
        return value * value;
    }
    return Number(value) ** 2;
}
```

---

# 3. Advanced Number Conversion

### ✔ `Number()`  
Converts everything into a number:
```ts
Number(true);   // 1
Number(false);  // 0
Number("");     // 0
Number("hello") // NaN
```

### ✔ `parseInt()` vs `Number()`
```ts
parseInt("20px"); // 20
Number("20px");   // NaN
```

### ✔ Convert number → boolean
```ts
Boolean(0); // false
Boolean(10); // true
```

### ✔ Convert number → string
```ts
let x = 100;
x.toString(); // "100"
```

---

# 4. Working With Large Numbers

### ✔ Not safe beyond this limit:
```ts
console.log(Number.MAX_SAFE_INTEGER); 
// 9007199254740991
```

### ✔ Beyond that, accuracy is lost:
```ts
console.log(9007199254740992 === 9007199254740993);
// true 😱
```

### ✔ Use `bigint` for huge values (NOT number)
```ts
let big: bigint = 9007199254740993n;
```

---

# 5. Numeric Enums (Intermediate-Level OOP Concept)

```ts
enum Status {
    SUCCESS = 1,
    FAILED = 0,
    PENDING = 3
}

let s: Status = Status.SUCCESS;
```

### ✔ Reverse Mapping
```ts
console.log(Status[1]); // "SUCCESS"
```

This only works with **numeric enums**, not string enums.

---

# 6. Math Utilities You Should Know

### ✔ Random number  
```ts
Math.random(); 
```

### ✔ Round / Floor / Ceil
```ts
Math.round(4.6); // 5
Math.floor(4.6); // 4
Math.ceil(4.6);  // 5
```

### ✔ Power  
```ts
Math.pow(2, 3); // 8
// OR
2 ** 3; // 8
```

---

# 7. Handling NaN Properly (Very Common Mistake)

### NaN is never equal to itself:
```ts
console.log(NaN === NaN); // false
```

### Correct check:
```ts
Number.isNaN(NaN); // true
```

### Wrong approach:
```ts
isNaN("hello"); // true ❌ (because it converts string → number)
```

### Correct approach:
```ts
Number.isNaN("hello"); // false ✔ (no automatic conversion)
```

---

# 8. Working With Optional Number Values

```ts
function calculate(price?: number) {
    if (price !== undefined) {
        return price * 2;
    }
    return 0;
}
```

---

# 9. Real-World Example  
## Currency Calculation (Avoid Floating-Point Errors)

❌ Wrong:
```ts
let total = 19.99 + 19.99;
// 39.98? Not always!
```

✔ Correct (use integer cents):
```ts
let priceInCents = 1999 + 1999; 
let finalPrice = priceInCents / 100; 
```

---

# 10. Intermediate Interview Questions

### **Q1: Why does TypeScript have only one `number` type?**
Because TypeScript follows JavaScript, where all numbers follow IEEE 754 floating-point format.

---

### **Q2: What is the difference between `Number()` and `parseInt()`?**
| Feature | `Number()` | `parseInt()` |
|---------|------------|--------------|
| Converts whole string | No | Yes |
| Converts partial string | No | Yes |
| Returns NaN for invalid | Yes | Sometimes |
| Decimal supported | Yes | No (drops decimals) |

---

### **Q3: Why does `0.1 + 0.2` give `0.30000000004`?**
Floating-point precision issue because binary cannot represent 0.1 or 0.2 exactly.

---

### **Q4: What is `Number.MAX_SAFE_INTEGER`?**
The largest integer TypeScript can safely represent without losing precision.

---

### **Q5: What is the difference between `isNaN()` and `Number.isNaN()`?**

| Function | Behavior |
|----------|----------|
| `isNaN(x)` | Converts input → number, then checks NaN (unsafe) |
| `Number.isNaN(x)` | Checks only if value is actually NaN (safe) |

---

### **Q6: Can you use a number as an enum key?**
Yes, numeric enums support reverse mapping.

---

### **Q7: How do you safely handle numeric input from user forms?**
- Validate using `Number.isNaN()`
- Convert with `Number(value)`
- Narrow type with `typeof`
- Handle empty or undefined values

---

# 11. Summary

✔ You learned advanced concepts like:  
- Precision errors  
- Type narrowing  
- Numeric enums  
- Conversions  
- NaN handling  
- Large number safety  
- Math utilities  
- Real-world reliable numeric patterns  

---

If you want, I can now generate:

✅ **Expert-Level TypeScript Number MD**  
✅ **TypeScript String Data Type (Beginner–Expert)**  
✅ **Complete TypeScript Beginner-to-Advanced Roadmap MD**  

Just tell me!
