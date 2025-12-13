# 🔢 TypeScript `number` Data Type — Beginner-Friendly Guide + Interview Questions

TypeScript uses **only one number type** (unlike some languages that have int, float, double).  
All numbers in TypeScript are stored as **64-bit floating point values** — the same as JavaScript.

---

# 1. Declaring Numbers in TypeScript

You can declare a number using:

### ✔ Explicit Type Annotation
```ts
let age: number = 25;
```

### ✔ Type Inference
```ts
let salary = 50000; // TypeScript automatically sets this as number
```

---

# 2. Valid Number Formats in TypeScript

### ✔ Integer
```ts
let count: number = 10;
```

### ✔ Floating Number
```ts
let price: number = 99.99;
```

### ✔ Negative Number
```ts
let temperature: number = -5;
```

### ✔ Hexadecimal
```ts
let hexValue: number = 0x1a;
```

### ✔ Binary
```ts
let binaryValue: number = 0b1010;  // 10 in decimal
```

### ✔ Octal
```ts
let octalValue: number = 0o744;
```

### ✔ Big Numbers (but still `number`, NOT bigint)
```ts
let largeNumber: number = 1_000_000;
```

---

# 3. Special Number Values

TypeScript also supports:

### ✔ Infinity
```ts
let value: number = Infinity;
```

### ✔ -Infinity
```ts
let negativeValue: number = -Infinity;
```

### ✔ NaN (Not a Number)
Occurs when mathematical operations fail:

```ts
let result: number = Number("Hello"); // NaN
```

You can check:
```ts
console.log(isNaN(result)); // true
```

---

# 4. Converting Strings to Numbers (Beginner Must-Know)

### ✔ 1. `Number()`
```ts
Number("20"); // 20
```

### ✔ 2. Unary Plus `+`
```ts
+"20"; // 20
```

### ✔ 3. `parseInt()` / `parseFloat()`
```ts
parseInt("20.5");   // 20
parseFloat("20.5"); // 20.5
```

### Example:
```ts
let a = 10;
let b = "20";

console.log(a + +b); // 30
```

---

# 5. Common `number` Errors Beginners Face

### ❌ Redeclaring Same Variable
```ts
let num = 10;
let num = 20;   // ❌ Error
```

### ❌ Adding Number + String
```ts
console.log(10 + "5"); // "105" — wrong!
```

✔ Fix:
```ts
console.log(10 + Number("5")); // 15
```

---

# 6. Useful Built-in Math Operations

### ✔ Add
```ts
let sum = 5 + 8;
```

### ✔ Subtract
```ts
let diff = 10 - 3;
```

### ✔ Multiply
```ts
let product = 4 * 6;
```

### ✔ Divide
```ts
let division = 20 / 4;
```

### ✔ Power
```ts
let result = 2 ** 3; // 8
```

### ✔ Modulus
```ts
let rem = 10 % 3; // 1
```

---

# 7. TypeScript Number Utility Methods

### ✔ `toFixed()`
Rounds to n decimal places:

```ts
let price = 19.456;
console.log(price.toFixed(2)); // "19.46"
```

### ✔ `toString()`
Converts number → string:

```ts
(100).toString(); // "100"
```

### ✔ `valueOf()`
Returns primitive number:

```ts
let numObj = new Number(50);
console.log(numObj.valueOf()); // 50
```

---

# 8. Interview Questions (Beginner Level)

### **Q1: What is the number type in TypeScript?**
TypeScript has only one numeric type — a 64-bit floating point, used for all numbers.

---

### **Q2: What is the difference between `number` and `bigint`?**
| number | bigint |
|--------|---------|
| 64-bit floating point | Can represent very large integers |
| Supports decimals | No decimals |
| Example: `10` | Example: `10n` |

---

### **Q3: How do you convert a string into a number in TypeScript?**
- `Number("20")`
- `+"20"`
- `parseInt()`, `parseFloat()`

---

### **Q4: What is NaN?**
NaN means **Not a Number**.  
Occurs when a mathematical operation cannot produce a valid number.

---

### **Q5: How does TypeScript infer number type automatically?**
Example:
```ts
let age = 20;
```
TypeScript assigns `number` because the value is numeric.

---

### **Q6: What will be the output of `"10" + 10`? Why?**
Output:
```
"1010"
```
Because JavaScript converts number → string and performs concatenation.

---

### **Q7: What is the purpose of `toFixed()`?**
Used to format decimals to a fixed number of places.

---

# 9. Final Beginner Tips for Mastering Numbers

- Avoid using `any` type.
- Always convert strings before doing math.
- Use underscores for readability in large numbers:
  ```ts
  let population = 220_000_000;
  ```
- Practice strict typing:
  ```ts
  let score: number = 100;
  ```
- Learn `bigint` when working with extremely large values.

---

If you want, I can also generate:

✅ Intermediate TypeScript Number MD  
✅ Expert TypeScript Number MD  
✅ Complete TypeScript Data Types MD  
✅ TypeScript Interview Questions PDF  

Just tell me!
