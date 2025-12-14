# TypeScript `Promise` — Expert Guide

This guide covers **expert-level usage of `Promise` in TypeScript**, focusing on **complex asynchronous patterns, typed chains, utility types, and real-world architecture considerations**.

---

## 1. Strongly Typed Promises

```ts
interface User {
  id: number;
  name: string;
}

function fetchUser(): Promise<User> {
  return Promise.resolve({ id: 1, name: 'Jawad' });
}

fetchUser().then(user => console.log(user.name)); // Jawad
```

* Expert-level ensures **full type safety** in promises, especially with objects and API responses.

---

## 2. Promise Chaining with Generics

```ts
type ApiResponse<T> = {
  data: T;
  status: number;
};

function fetchData(): Promise<ApiResponse<number>> {
  return Promise.resolve({ data: 100, status: 200 });
}

fetchData()
  .then(response => response.data)
  .then(data => console.log('Processed:', data)); // Processed: 100
```

* Generics **propagate type safety** through chains.

---

## 3. Handling Multiple Promise Patterns

```ts
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject('error');

Promise.allSettled([p1, p2, p3]).then(results => console.log(results));
/* Output:
[
  {status: 'fulfilled', value: 1},
  {status: 'fulfilled', value: 2},
  {status: 'rejected', reason: 'error'}
]
*/
```

* `allSettled` **captures both fulfilled and rejected promises**.
* Useful in **robust asynchronous applications**.

---

## 4. Async/Await with Error Propagation

```ts
async function fetchNumber(): Promise<number> {
  if (Math.random() > 0.5) throw new Error('Random failure');
  return 42;
}

async function processNumber() {
  try {
    const num = await fetchNumber();
    console.log('Number:', num);
  } catch (error) {
    console.error('Caught error:', error);
  }
}

processNumber();
```

* Expert usage **propagates errors safely** in async workflows.

---

## 5. Combining Promises and Generics for API Layers

```ts
async function getUserApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint);
  return response.json() as Promise<T>;
}

interface Post { id: number; title: string; }

async function main() {
  const posts = await getUserApi<Post[]>('https://jsonplaceholder.typicode.com/posts');
  console.log(posts[0].title);
}

main();
```

* Combines **fetch, async/await, and typed generics**.
* Ensures **type-safe data from APIs**.

---

## 6. Expert Interview Questions

1. How do you propagate types through promise chains?
2. Explain `Promise.allSettled` vs `Promise.all` vs `Promise.race`.
3. How can generics enhance promise return types?
4. How do you handle errors in async/await using TypeScript?
5. How do you type external API responses safely with promises?
6. What are best practices for large-scale asynchronous TypeScript applications?

---

## Summary

* Expert-level promises focus on **typed chains, generics, API integration, error handling, and advanced patterns**.
* Ensures **type safety and maintainability in complex asynchronous code**.
* Mastery of promises is crucial for **robust TypeScript applications**.
