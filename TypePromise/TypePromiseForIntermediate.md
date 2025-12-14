# TypeScript `Promise` — Intermediate Guide

This guide covers **intermediate-level usage of `Promise` in TypeScript**, focusing on **typed promises, chaining, error handling, and combining multiple promises**.

---

## 1. Typed Promises

```ts
const numberPromise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 1000);
});

numberPromise.then(num => console.log('Number:', num)); // Number: 42
```

* Typing ensures **type safety for the resolved value**.

---

## 2. Promise Chaining

```ts
function fetchNumber(): Promise<number> {
  return Promise.resolve(10);
}

function doubleNumber(num: number): Promise<number> {
  return Promise.resolve(num * 2);
}

fetchNumber()
  .then(doubleNumber)
  .then(result => console.log(result)); // 20
```

* Chain promises for **sequential asynchronous operations**.
* Each `.then()` receives the **resolved value from the previous promise**.

---

## 3. Error Handling with `catch`

```ts
function failPromise(): Promise<string> {
  return Promise.reject('Failed!');
}

failPromise()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error)); // Error: Failed!
```

* `.catch()` **catches any rejection in the chain**.

---

## 4. `finally` for Cleanup

```ts
const p = new Promise<number>((resolve, reject) => resolve(100));

p.then(value => console.log(value))
 .catch(err => console.error(err))
 .finally(() => console.log('Cleanup done')); // 100, Cleanup done
```

* `.finally()` executes **regardless of resolved or rejected state**.

---

## 5. Multiple Promises

```ts
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(values => console.log(values)); // [1,2,3]

Promise.race([p1, p2, p3]).then(value => console.log(value)); // 1
```

* `Promise.all` waits for **all promises to resolve**.
* `Promise.race` resolves/rejects **as soon as one promise settles**.

---

## 6. Async/Await with Try/Catch

```ts
async function asyncFetch(): Promise<number> {
  return 50;
}

async function main() {
  try {
    const value = await asyncFetch();
    console.log(value); // 50
  } catch (error) {
    console.error(error);
  }
}

main();
```

* Try/Catch **handles promise rejections in async/await style**.

---

## 7. Intermediate Interview Questions

1. How do you type a promise that resolves with an object?
2. What is promise chaining and why is it useful?
3. Explain `Promise.all` vs `Promise.race`.
4. How do you handle errors in a chain of promises?
5. How does async/await work with typed promises?

---

## Summary

* Intermediate promises include **typed promises, chaining, error handling, and multiple promises**.
* Provides **safe and sequential asynchronous operations**.
* Using types ensures **compile-time type safety** in asynchronous code.
