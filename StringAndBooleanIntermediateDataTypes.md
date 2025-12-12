
# 🔤 TypeScript `string` & `boolean` Data Types — Intermediate & Expert Guide + Interview Questions

This guide covers intermediate and expert-level concepts for **string** and **boolean** data types in TypeScript, including:

- Template literals  
- String methods  
- Union & literal types  
- Type conversions  
- Truthy/falsy behavior  
- Combined string & boolean examples  
- Best practices and common mistakes  
- Interview questions  

---

## 1. STRING DATA TYPE

### 1.1 Template Literals with Expressions
```ts
let firstName: string = "Jawad";
let age: number = 25;

let message: string = `Hello ${firstName}, you are ${age} years old.`;
console.log(message); // Hello Jawad, you are 25 years old.
```

### 1.2 Multi-line Strings
```ts
let multiLine: string = `This is
a string
spanning multiple
lines.`;
console.log(multiLine);
```

### 1.3 String Union Types (Restricting Values)
```ts
let direction: "left" | "right" | "up" | "down";
direction = "left"; // ✔ valid
// direction = "forward"; // ❌ Error
```

### 1.4 String Literal Types (Fixed Allowed Values)
```ts
let status: "success" | "error" | "loading";
status = "success"; // ✔ valid
// status = "failed";  // ❌ Error
```

### 1.5 Common String Methods
```ts
let fullName: string = "Jawad Mughal";
console.log(fullName.toUpperCase());       // "JAWAD MUGHAL"
console.log(fullName.toLowerCase());       // "jawad mughal"
console.log(fullName.includes("Mughal"));  // true
console.log(fullName.startsWith("Jawad")); // true
console.log(fullName.endsWith("Mughal"));  // true
console.log(fullName.slice(0, 5));         // "Jawad"
console.log(fullName.replace("Jawad", "Ali")); // "Ali Mughal"
```

### 1.6 Type Inference with Strings
```ts
let city = "Lahore";           // inferred as string
let city2: string | null = null;
city2 = "Islamabad";           // ✔ valid
```

### 1.7 Best Practices and Common Mistakes
```ts
// ✔ Use template literals
let greeting = `Hello ${firstName}`;
// ❌ Avoid complex concatenation
let badGreeting = "Hello " + firstName;
```

---

## 2. BOOLEAN DATA TYPE

### 2.1 Declaration
```ts
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
console.log(isLoggedIn, isAdmin); // true false
```

### 2.2 Boolean Expressions
```ts
let isAdult: boolean = age >= 18;
console.log(isAdult); // true
```

### 2.3 Truthy and Falsy Values
```ts
let value: any;
value = "";      console.log(!!value); // false
value = "Hello"; console.log(!!value); // true
value = 0;       console.log(!!value); // false
value = 42;      console.log(!!value); // true
```

### 2.4 Common Mistakes
```ts
// ❌ Avoid Boolean object
let active: Boolean = true; // Avoid
// ✔ Use lowercase 'boolean'
let activeFlag: boolean = true;
```

---

## 3. COMBINED STRING & BOOLEAN EXAMPLES

### Example 1: User Login Message
```ts
let username: string = "Jawad";
let loggedIn: boolean = true;
let loginMessage = loggedIn ? `Welcome, ${username}!` : `Please log in.`;
console.log(loginMessage);
```

### Example 2: Conditional Status
```ts
let operationStatus: "success" | "error" = "success";
let showMessage: boolean = operationStatus === "success";
if(showMessage){
    console.log(`Operation ${operationStatus}`); // Operation success
}
```

---

## 4. TYPE CONVERSIONS

### Number → String
```ts
let num: number = 123;
let str1: string = `${num}`;
let str2: string = num.toString();
let str3: string = "" + num;
console.log(str1, str2, str3); // "123" "123" "123"
```

### Boolean → String
```ts
let flag: boolean = true;
let strFlag: string = flag.toString();
console.log(strFlag); // "true"
```

---

## 5. INTERVIEW QUESTIONS

### Beginner
- **Q:** How do you declare a string?  
  **A:** Single quotes, double quotes, or template literals

- **Q:** What values can a boolean store?  
  **A:** Only `true` or `false`

### Intermediate
- **Q:** What is a string union type?  
  **A:** Restricts a string variable to a fixed set of string values

- **Q:** How do you check truthy/falsy values?  
  **A:** Using double negation `!!value`

- **Q:** Difference between `boolean` and `Boolean`?  
  **A:** `boolean` is primitive; `Boolean` is object wrapper (avoid using)

### Expert
- **Q:** How do template literals help with multi-line and dynamic strings?  
  **A:** They allow embedding expressions `${...}` and support multi-line strings

- **Q:** How do string literal types improve type safety?  
  **A:** Restrict variable to allowed string values at compile time

- **Q:** Can you use strings as booleans in TypeScript?  
  **A:** No, TS is strictly typed; use `!!value` but type must be boolean

---

## 6. SUMMARY

### String
- `""` or `''` or `` template literals  
- Methods: `toUpperCase`, `toLowerCase`, `includes`, `startsWith`, `slice`, `replace`  
- Union and literal types improve type safety  
- Use template literals for dynamic strings  

### Boolean
- Only `true` or `false`  
- Supports logical operations  
- Avoid `Boolean` object wrapper; use lowercase `boolean`  
- `!!value` to check truthy/falsy
