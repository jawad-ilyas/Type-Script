# TypeScript User Input – Beginner Level Guide

This guide explains **how to take user input** in TypeScript at a **beginner level** using:

* Browser (`prompt`)
* Node.js (`process.stdin`)
* HTML Forms (input elements)

All examples are simple, safe, and interview-friendly.

---

## 1. User Input in Browser using `prompt`

### What is `prompt`?

* `prompt()` is a browser function
* It always returns a **string** or `null`

### Basic Example

```ts
const userName = prompt("Enter your name");

if (userName !== null) {
  console.log("Hello", userName);
}
```

### Why type checking is needed?

```ts
const ageInput = prompt("Enter your age");

if (ageInput !== null) {
  const age: number = Number(ageInput);
  console.log("Your age is", age);
}
```

📌 `prompt` **never returns number**, conversion is required.

---

## 2. User Input in Node.js using `process.stdin`

### What is `process.stdin`?

* Used to take input from terminal
* Works in Node.js environment

### Basic Example

```ts
process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  console.log("You entered:", input);
});
```

### Typed Example

```ts
process.stdin.on("data", (data: Buffer) => {
  const userInput: string = data.toString().trim();
  console.log("User input:", userInput);
});
```

---

## 3. User Input from HTML Form (Beginner)

### HTML Code

```html
<input type="text" id="username" />
<button id="btn">Submit</button>
```

### TypeScript Code

```ts
const inputEl = document.getElementById("username") as HTMLInputElement;
const button = document.getElementById("btn") as HTMLButtonElement;

button.addEventListener("click", () => {
  const value: string = inputEl.value;
  console.log("Input value:", value);
});
```

📌 `HTMLInputElement` is required to access `.value`

---

## 4. Handling Empty Input (Beginner Validation)

```ts
if (inputEl.value === "") {
  console.log("Input is empty");
} else {
  console.log("Valid input:", inputEl.value);
}
```

---

## 5. Common Beginner Mistakes

❌ Assuming input is a number

```ts
let age: number = prompt("Enter age"); // Error
```

✅ Correct way

```ts
const age = Number(prompt("Enter age"));
```

❌ Forgetting null check

```ts
prompt("Enter name").toUpperCase(); // Error
```

---

## 6. Best Practices (Beginner)

* Always assume input is **string**
* Convert before using (`Number`, `Boolean`)
* Validate empty or null values
* Use proper DOM casting

---

## 7. Beginner Interview Questions

1. What type does `prompt()` return?
2. Why do we convert input values to numbers?
3. How do you take user input in Node.js?
4. Why is `HTMLInputElement` used in TypeScript?
5. What happens if input is empty?
6. Can user input be trusted directly?
7. Difference between browser input and Node.js input?

---

## Summary

* Browser input → `prompt()`
* Node.js input → `process.stdin`
* Form input → `HTMLInputElement`
* Input is always **string first**

This is the **foundation** for form validation, APIs, and real applications.
