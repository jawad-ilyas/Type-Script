# TypeScript API Calls – Beginner Guide

This guide explains **API calls in TypeScript for beginners**, focusing on what an API is, how to call an API using `fetch`, and how to handle simple responses.

---

## 1. What is an API?

* **API (Application Programming Interface)** allows two applications to communicate.
* In frontend/backend apps, APIs are used to **get or send data** to a server.
* Common API actions:

  * Get data (GET)
  * Send data (POST)

---

## 2. What is an API Call?

* An API call is a **request sent to a server**.
* The server sends back a **response**, usually in JSON format.

---

## 3. Making an API Call using `fetch` (GET Request)

```ts
// Simple GET request example
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("Users data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

### Explanation:

* `fetch()` sends a request to the API
* `.then()` handles the response
* `.json()` converts response into JavaScript object
* `.catch()` handles errors

---

## 4. Using Async / Await (Beginner Friendly)

```ts
async function getUsers(): Promise<void> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUsers();
```

### Why async/await?

* Code looks **cleaner and easier to read**
* Avoids nested `.then()` calls

---

## 5. Simple POST Request Example

```ts
async function createUser() {
  const user = {
    name: "Jawad",
    email: "jawad@example.com",
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log("Created user:", data);
}

createUser();
```

---

## 6. Beginner Best Practices

1. Always handle errors using `try/catch`
2. Convert response using `.json()`
3. Use async/await for better readability
4. Start with GET requests before POST/PUT/DELETE

---

## 7. Beginner Interview Questions

1. What is an API?
2. What is an API call?
3. What does `fetch()` do?
4. What is the difference between GET and POST requests?
5. Why do we use `async/await`?

---

## Summary

* APIs allow apps to communicate with servers
* `fetch()` is commonly used for API calls
* Async/await makes API calls easier to understand
* Beginner knowledge is enough to work with real APIs
