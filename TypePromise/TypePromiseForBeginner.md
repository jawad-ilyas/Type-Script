# TypeScript `Promise` — Beginner Guide

This guide covers **beginner-level usage of `Promise` in TypeScript**, focusing on **basic promise creation, handling, and typing**.

---

## 1. What is a Promise?

* A `Promise` represents a **value that may be available now, in the future, or never**.
* Used for **asynchronous operations**.
* Has three states: `pending`, `fulfilled`, `rejected`.

---

## 2. Basic Promise Example

```ts
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data fetched successfully!');
  }, 2000);
});

promise.then((data) => {
  console.log(data); // Data fetched successfully!
});
```

* `Promise<string>` indicates that the promise **resolves with a string**.

---

## 3. Handling Rejection

```ts
const errorPromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Something went wrong!');
  }, 2000);
});

errorPromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error)); // Something went wrong!
```

* `.catch()` is used to **handle rejected promises**.

---

## 4. Async/Await with Promises

```ts
async function fetchData(): Promise<string> {
  return 'Fetched data using async/await';
}

async function main() {
  const data = await fetchData();
  console.log(data); // Fetched data using async/await
}

main();
```

* `async` functions **return a Promise** automatically.
* `await` pauses execution until the Promise resolves.

---

## 5. Beginner Interview Questions

1. What is a Promise in TypeScript?
2. What are the three states of a Promise?
3. How do you handle fulfilled and rejected Promises?
4. How does async/await work with Promises?
5. How do you type a Promise that resolves with a number, string, or object?

---

## Summary

* Promises handle **asynchronous operations** in TypeScript.
* Always **type your promises** for clarity.
* Use `.then/.catch` or `async/await` for handling asynchronous code.
* Beginner-friendly introduction to **typed async programming**.
