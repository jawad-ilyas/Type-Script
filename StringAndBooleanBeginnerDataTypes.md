# 🔤 TypeScript `string` & `boolean` Data Types — Beginner Guide + Interview Questions

This file explains the basics of **string** and **boolean** data types in TypeScript with examples, conversions, best practices, and beginner interview questions.

---

# 1. `string` Data Type in TypeScript

A **string** represents text.  
In TypeScript, you can define strings using:

### ✔ Single Quotes
```ts
let userName: string = 'Jawad Ilyas';
```

### ✔ Double Quotes
```ts
let city: string = "Lahore";
```

### ✔ Template Literals (Recommended)
Useful for dynamic values:
```ts
let age: number = 30;
let message: string = `My age is ${age}`;
```

---

# 2. Converting Values to Strings (Beginner Must-Know)

### ✔ 1. Template Literals (Best Way)
```ts
let age: number = 30;
let info: string = `${age}`;
```

### ✔ 2. `.toString()`
```ts
let info: string = age.toString();
```

### ✔ 3. String Concatenation
```ts
let info: string = "" + age;
```

### Check the type:
```ts
console.log(typeof info); // "string"
```

---

# 3. `boolean` Data Type in TypeScript

Boolean only accepts two values:

### ✔ true  
### ✔ false

Example:
```ts
let isLoggedIn: boolean = true;
isLoggedIn = false;
```

---

# 4. Boolean Declaration Rules

### ⚠ Incorrect (because 0 and 1 are not booleans)
```ts
// let isActive: boolean = 0;   // ❌ Error
// let isActive: boolean = 1;   // ❌ Error
```

### ✔ Correct
```ts
let isActive: boolean = true;
let isOnline: boolean = false;
```

---

# 5. Type Inference vs Type Annotation

### ✔ Type Annotation
```ts
let ready: boolean = true;
```

### ✔ Type Inference (Recommended)
```ts
let ready = true; // TypeScript infers boolean type automatically
```

### ⚠ Wrong
```ts
let flag; 
flag = true;   
flag = "hello"; // ❌ becomes `any` — unsafe
```

---

# 6. Beginner Mistakes to Avoid

### ❌ Using `Boolean` with a capital B
```ts
let active: Boolean = true;  // Avoid
```

✔ Always use lowercase:
```ts
let active: boolean = true;
```

---

# 7. Practical Example (String + Boolean)

```ts
let age: number = 30;
let userName: string = "Jawad Ilyas";

// Convert number → string
let info: string = "" + age;
console.log(typeof info); // "string"

// Boolean
let boolData: boolean = true;
console.log(boolData);

boolData = false;
console.log(boolData);
```

---

# 8. Beginner Interview Questions

### **Q1: What are the valid ways to declare a string in TypeScript?**
Single quotes, double quotes, and template literals.

---

### **Q2: How do you convert a number to a string in TypeScript?**
- `num.toString()`
- `"" + num`
- `` `${num}` ``

---

### **Q3: What values can a boolean type store?**
Only `true` and `false`.

---

### **Q4: Why should you avoid using `Boolean` instead of `boolean`?**
`Boolean` creates an object wrapper — not recommended.

---

### **Q5: What is type inference?**
TypeScript automatically detects the type based on assigned value.

---

### **Q6: Why is `let flag = true;` safer than `let flag;`?**
Because without an initial value, `flag` becomes `any`, which removes type safety.

---

# 9. Summary for Beginners

You now understand:

✔ How to create strings  
✔ How to convert any value to a string  
✔ How to create booleans  
✔ Type inference rules  
✔ Common beginner mistakes  
✔ Simple interview questions  

---

If you want, I can also generate:

- ⭐ Intermediate String & Boolean Guide  
- ⭐ Expert-Level String & Boolean Guide  
- 📘 Combined TypeScript Data Types PDF  
- 🧪 Practice Questions & Exercises  

Just tell me!
