# TypeScript DOM Manipulation — Intermediate Guide

This guide covers **intermediate DOM manipulation techniques** in TypeScript including **dynamic elements, form handling, event delegation, and type-safe DOM updates**.

---

## 1. Query Selector and Multiple Elements

```ts
const buttons = document.querySelectorAll<HTMLButtonElement>(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log(`${button.textContent} clicked`);
  });
});
```

* `querySelectorAll<HTMLButtonElement>` ensures correct typing
* Iterates over **NodeListOf<HTMLButtonElement>** safely

---

## 2. Dynamic Element Creation with Attributes

```ts
const container = document.getElementById("container") as HTMLDivElement;
const newInput = document.createElement("input") as HTMLInputElement;
newInput.type = "text";
newInput.placeholder = "Enter name";
container.appendChild(newInput);
```

* Safely add **input elements with attributes** dynamically

---

## 3. Event Delegation

```ts
const list = document.getElementById("myList") as HTMLUListElement;
list.addEventListener("click", (event) => {
  const target = event.target as HTMLLIElement;
  if (target.tagName === "LI") {
    console.log(`Clicked item: ${target.textContent}`);
  }
});
```

* Useful for **dynamic lists**
* Reduces **number of event listeners**

---

## 4. Form Handling

```ts
const form = document.getElementById("userForm") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;

  console.log(`Name: ${nameInput.value}, Age: ${ageInput.value}`);
});
```

* TypeScript ensures **type safety** when accessing `.value`
* Prevents default form submission

---

## 5. Updating Classes and Styles Dynamically

```ts
const box = document.getElementById("box") as HTMLDivElement;
box.classList.add("active");
box.style.backgroundColor = "green";
```

* Safely manipulate **classes and styles**
* Intermediate usage includes **animations, conditional classes, theme switching**

---

## 6. Removing Elements

```ts
const removeBtn = document.getElementById("removeBtn") as HTMLButtonElement;
removeBtn.addEventListener("click", () => {
  const child = document.getElementById("child") as HTMLDivElement;
  child.remove();
});
```

* Dynamically remove elements safely

---

## 7. Intermediate Interview Questions

1. How do you select multiple elements and iterate over them safely in TypeScript?
2. Explain event delegation and its advantages.
3. How do you handle dynamic form inputs with TypeScript?
4. How do you safely modify classes and styles dynamically?
5. What are common mistakes when casting HTML elements?
6. How do you prevent runtime errors when DOM elements may not exist?
7. How do you append and remove elements dynamically?

---

## Summary

* TypeScript provides **type safety** for DOM operations
* Intermediate techniques include:

  * Query selectors with generics
  * Event delegation
  * Dynamic element creation and removal
  * Form handling
  * Style and class manipulation
* Focus on **preventing runtime errors** and **handling dynamic elements**
