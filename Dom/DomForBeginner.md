# TypeScript DOM Manipulation — Beginner Guide

This guide covers **basic DOM operations** using TypeScript for beginners. You will learn how to **select, modify, and interact with HTML elements** safely.

---

## 1. Introduction

* DOM = Document Object Model
* TypeScript helps by **type checking** HTML elements
* Prevents runtime errors by specifying types

---

## 2. Selecting Elements

### Example: Selecting by ID

```ts
const button = document.getElementById("myButton") as HTMLButtonElement;
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```

* `as HTMLButtonElement` tells TypeScript the exact element type
* Without it, `button` is of type `HTMLElement | null`

### Example: Selecting Input Value

```ts
const input = document.getElementById("myInput") as HTMLInputElement;
const value = input.value;
console.log(value);
```

* Always type HTML input elements to **access `.value` safely**

---

## 3. Modifying Elements

```ts
const heading = document.getElementById("myHeading") as HTMLHeadingElement;
heading.textContent = "Hello TypeScript DOM!";
heading.style.color = "blue";
```

* TypeScript ensures `textContent` and `style` exist on `HTMLHeadingElement`

---

## 4. Creating and Appending Elements

```ts
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div";
document.body.appendChild(newDiv);
```

* Creates a new `div` dynamically
* Appends to the DOM safely

---

## 5. Event Handling

```ts
const inputField = document.getElementById("username") as HTMLInputElement;
inputField.addEventListener("input", (event) => {
  console.log((event.target as HTMLInputElement).value);
});
```

* Use `event.target as HTMLInputElement` to **type event target correctly**

---

## 6. Safety Tips (Beginner)

* Always check for `null` if element may not exist

```ts
const el = document.getElementById("maybeElement");
if (el) { el.textContent = "Safe!"; }
```

* Type casting with `as` helps TypeScript know the exact element type
* Use proper HTML element types: `HTMLButtonElement`, `HTMLInputElement`, `HTMLDivElement`, etc.

---

## 7. Beginner Interview Questions — DOM Manipulation

1. What is the DOM?
2. How do you select elements using TypeScript?
3. Why do we need to cast types in TypeScript DOM?
4. How do you handle events in TypeScript?
5. How can you create and append elements dynamically?
6. How do you safely access `.value` of an input?
7. What are some beginner mistakes in DOM manipulation with TypeScript?

---

## Summary

* TypeScript **enhances DOM safety** with type checking
* Beginners should focus on:

  * Selecting elements
  * Modifying elements
  * Handling events
  * Creating new elements
* Always use **type casting** and **null checks** for safety

---

✅ Next Steps:

* Intermediate DOM Manipulation
* Expert DOM Manipulation with dynamic updates, templates, and advanced event handling
