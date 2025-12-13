# TypeScript Any and Unknown – Intermediate Guide

This guide covers **intermediate-level usage of `any` and `unknown` types in TypeScript**, including type assertions, safer handling, and practical scenarios.

---

## 1. Type Assertions with `unknown`

* You can use **type assertions** to tell TypeScript the type of an `unknown` variable

```ts
let unknownVar: unknown = "Hello World";

// Type assertion
let strLength: number = (unknownVar as string).length;
console.log(strLength); // 11
```

* Useful when you are **sure about the type at runtime**

---

## 2. Safely Handling `unknown`

* Always **check the type** before performing operations

```ts
function processUnknown(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log("Unsupported type");
  }
}

processUnknown("hello"); // HELLO
processUnknown(10);      // 20
processUnknown(true);    // Unsupported type
```

---

## 3. `any` vs `unknown` in Functions

```ts
function printAny(val: any) {
  console.log(val.toString()); // ✅ Allowed
}

function printUnknown(val: unknown) {
  if (typeof val === "string" || typeof val === "number") {
    console.log(val.toString()); // ✅ Works after type check
  }
}
```

* `any` bypasses type safety, `unknown` forces checks

---

## 4. Practical Intermediate Scenarios

### 4.1 Accepting JSON Data

```ts
function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const data = parseJson('{"name":"Jawad","age":25}');
if (typeof data === "object" && data !== null && 'name' in data) {
  console.log((data as any).name); // Jawad
}
```

### 4.2 API Responses

```ts
type ApiResponse = unknown;
function handleResponse(response: ApiResponse) {
  if (typeof response === "object" && response !== null) {
    console.log(response);
  }
}
```

---

## 5. Best Practices

1. Prefer `unknown` over `any` for **dynamic data**
2. Always perform **type checks** before using `unknown`
3. Use **type assertions** only when you are sure about the type
4. Avoid overusing `any` to maintain **type safety**

---

## 6. Intermediate Interview Questions

1. How is `unknown` safer than `any`?
2. When should you use `type assertions` with `unknown`?
3. Give an example of handling `unknown` data from JSON.
4. How do you perform operations on `unknown` values?
5. Why is `any` considered unsafe at intermediate level?
6. How can `unknown` improve API response handling?

---

## Summary

* Intermediate usage focuses on **type assertions, safe handling, and practical scenarios**
* `any` allows any operation but bypasses type safety
* `unknown` requires **type checking or assertions**, improving **safety for dynamic and external data**
