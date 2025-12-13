# TypeScript User Input from HTML Form – Intermediate Level Guide

This guide focuses on **handling HTML form input in TypeScript** at an **intermediate level**. It builds on beginner concepts and introduces:

* Strong typing
* Form validation
* Event handling
* Type narrowing
* Reusable patterns
  n

---

## 1. HTML Form Structure (Realistic Example)

```html
<form id="userForm">
  <input type="text" id="name" placeholder="Enter name" />
  <input type="number" id="age" placeholder="Enter age" />
  <select id="role">
    <option value="">Select role</option>
    <option value="admin">Admin</option>
    <option value="user">User</option>
  </select>
  <button type="submit">Submit</button>
</form>
```

---

## 2. Accessing Form Elements Safely in TypeScript

```ts
const form = document.getElementById("userForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const roleSelect = document.getElementById("role") as HTMLSelectElement;
```

📌 Type casting ensures access to `.value`, `.checked`, etc.

---

## 3. Handling Form Submit Event

```ts
form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const name: string = nameInput.value.trim();
  const age: number = Number(ageInput.value);
  const role: string = roleSelect.value;

  console.log({ name, age, role });
});
```

---

## 4. Intermediate Input Validation

```ts
if (!name) {
  console.error("Name is required");
  return;
}

if (isNaN(age) || age <= 0) {
  console.error("Age must be a valid number");
  return;
}

if (!role) {
  console.error("Role must be selected");
  return;
}
```

---

## 5. Using Interface for Form Data

```ts
interface UserFormData {
  name: string;
  age: number;
  role: "admin" | "user";
}
```

```ts
const formData: UserFormData = {
  name,
  age,
  role: role as "admin" | "user",
};

console.log(formData);
```

---

## 6. Reusable Input Helper Function

```ts
function getInputValue(id: string): string {
  const el = document.getElementById(id) as HTMLInputElement | null;
  if (!el) throw new Error(`Input ${id} not found`);
  return el.value.trim();
}
```

```ts
const username = getInputValue("name");
```

---

## 7. Common Intermediate Mistakes

❌ Not preventing form submission

```ts
form.addEventListener("submit", () => {
  console.log("Reload happens");
});
```

❌ Trusting input without validation

❌ Using `any` instead of proper types

---

## 8. Best Practices (Intermediate)

* Always use `event.preventDefault()`
* Use interfaces for form data
* Trim and validate user input
* Narrow types before use
* Avoid `any`

---

## 9. Interview Questions (Intermediate)

1. Why do we use `event.preventDefault()` in forms?
2. Difference between `HTMLInputElement` and `HTMLFormElement`?
3. How do you type a submit event in TypeScript?
4. Why should form values be validated?
5. How do interfaces help in form handling?
6. What problems occur if input is not trimmed?
7. How do you safely access DOM elements in TypeScript?

---

## Summary

* HTML form input is always **string-based initially**
* TypeScript enforces safety through casting and interfaces
* Intermediate handling includes validation and reusable logic

This level prepares you for **real-world forms and frontend interviews**.
