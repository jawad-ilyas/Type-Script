# TypeScript API Calls – Expert Guide

This guide covers **expert-level API calls in TypeScript**, focusing on architecture, Axios, interceptors, cancellation, retries, environment handling, and production-grade best practices.

---

## 1. API Architecture (Service Layer Pattern)

At expert level, API logic is **separated from UI/business logic**.

```ts
// apiClient.ts
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});
```

---

## 2. Axios with Typed Responses

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  const response = await apiClient.get<User[]>("/users");
  return response.data;
}
```

* Axios automatically parses JSON
* `response.data` is **fully typed**

---

## 3. Axios Interceptors (Auth & Logging)

```ts
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response?.status);
    return Promise.reject(error);
  }
);
```

* Centralized authentication
* Centralized error handling

---

## 4. Error Handling with Custom Error Types

```ts
class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export async function safeRequest<T>(url: string): Promise<T> {
  try {
    const res = await apiClient.get<T>(url);
    return res.data;
  } catch (error: any) {
    throw new ApiError(error.response.status, error.message);
  }
}
```

---

## 5. Request Cancellation (AbortController)

```ts
const controller = new AbortController();

apiClient.get("/users", {
  signal: controller.signal,
});

// Cancel request
controller.abort();
```

* Useful in search, auto-complete, component unmounts

---

## 6. Retry Logic (Resilient APIs)

```ts
async function retryRequest<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    return retryRequest(fn, retries - 1);
  }
}

retryRequest(() => getUsers());
```

---

## 7. Environment-Based API URLs

```ts
const BASE_URL = import.meta.env.VITE_API_URL;

export const apiClient = axios.create({
  baseURL: BASE_URL,
});
```

* Different APIs for dev, staging, production

---

## 8. Security Best Practices

1. Never store tokens in plain JS variables
2. Prefer **HttpOnly cookies** for auth
3. Validate API responses
4. Centralize error handling
5. Use HTTPS always

---

## 9. Expert Best Practices

1. Use **service layer pattern**
2. Strongly type all API inputs/outputs
3. Centralize Axios config and interceptors
4. Implement retries and cancellation
5. Log errors with monitoring tools

---

## 10. Expert Interview Questions

1. Why is Axios preferred over fetch in large projects?
2. What are interceptors and why are they useful?
3. How do you cancel API requests in TypeScript?
4. Explain service-layer architecture for APIs
5. How do you handle retries and network failures?
6. How do you secure API calls in frontend apps?

---

## Summary

* Expert API calls focus on **architecture, scalability, and resilience**
* Axios + interceptors + service layer = production-ready APIs
* This level matches **real-world enterprise TypeScript applications**
