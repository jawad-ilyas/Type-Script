# TypeScript API Calls – Intermediate Guide

This guide covers **intermediate-level API calls in TypeScript**, focusing on typed responses, reusable API functions, error handling, and request configuration.

---

## 1. Why Type APIs in TypeScript?

* TypeScript helps **prevent runtime errors** by typing API responses
* Improves **code readability, IntelliSense, and safety**

---

## 2. Typing API Response using Interface

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

getUsers().then(users => console.log(users));
```

---

## 3. Reusable API Utility Function

```ts
async function apiRequest<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return response.json();
}

// Usage
apiRequest<User[]>("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data));
```

* Uses **generics** to support any response type

---

## 4. POST Request with Typed Body

```ts
interface CreateUser {
  name: string;
  email: string;
}

async function createUser(user: CreateUser): Promise<User> {
  return apiRequest<User>("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

createUser({ name: "Jawad", email: "jawad@test.com" })
  .then(res => console.log(res));
```

---

## 5. Handling Errors Properly

```ts
async function safeGetUsers() {
  try {
    const users = await getUsers();
    console.log(users);
  } catch (error) {
    console.error("API Error:", error);
  }
}

safeGetUsers();
```

---

## 6. Using Headers and Query Params

```ts
const url = "https://jsonplaceholder.typicode.com/users?_limit=5";
apiRequest<User[]>(url, {
  headers: {
    Authorization: "Bearer token_here",
  },
}).then(data => console.log(data));
```

---

## 7. Intermediate Best Practices

1. Always **type API responses**
2. Use **generic API helper functions**
3. Check `response.ok` before parsing JSON
4. Separate API logic from UI logic
5. Handle errors gracefully

---

## 8. Intermediate Interview Questions

1. Why should API responses be typed in TypeScript?
2. What is `RequestInit` in fetch?
3. How do generics improve API utility functions?
4. How do you handle API errors properly?
5. Difference between runtime and compile-time errors?

---

## Summary

* Intermediate API calls focus on **typing, reusability, and safety**
* Generics and interfaces make APIs **scalable and maintainable**
* This level prepares you for **expert-level API architecture**
