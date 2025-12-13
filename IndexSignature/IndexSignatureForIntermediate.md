# TypeScript Index Signature — Intermediate Guide

This guide covers **intermediate-level Index Signatures** in TypeScript, focusing on **real-world patterns, constraints, unions, and safer design practices**.

---

## 1. Recap: What is an Index Signature?

Index signatures allow objects to accept **dynamic keys** when property names are not known in advance.

```ts
{
  [key: string]: valueType;
}
```

At intermediate level, the focus shifts from *syntax* to *design safety*.

---

## 2. String vs Number Index Signatures

```ts
interface StringMap {
  [key: string]: string;
}

interface NumberMap {
  [index: number]: string;
}
```

⚠️ Important Rule:

> A **number index** must be a subtype of the **string index**.

```ts
interface Invalid {
  [key: string]: number;
  // [index: number]: string; ❌ Error
}
```

---

## 3. Combining Known Properties + Index Signature

```ts
interface UserProfile {
  id: number;
  name: string;
  [key: string]: string | number;
}

const user: UserProfile = {
  id: 1,
  name: "Jawad",
  city: "Lahore",
  age: 25,
};
```

📌 Rule:
All known properties **must match** the index signature value type.

---

## 4. Index Signature with Union Types

```ts
interface ApiResponse {
  [key: string]: string | number | boolean | null;
}

const response: ApiResponse = {
  status: 200,
  success: true,
  message: "OK",
};
```

Useful when working with:

* API payloads
* Dynamic JSON objects

---

## 5. Restricting Keys Using Literal Unions (Safer Alternative)

Instead of open index signatures:

```ts
interface LooseConfig {
  [key: string]: string;
}
```

Use **mapped types** for safety:

```ts
type ConfigKeys = "host" | "port" | "env";

type SafeConfig = {
  [K in ConfigKeys]: string;
};
```

✅ Prevents accidental keys

---

## 6. Index Signatures vs `Record`

```ts
type Scores = Record<string, number>;

const marks: Scores = {
  math: 90,
  english: 85,
};
```

📌 `Record<K, T>` is often preferred for readability and intent clarity.

---

## 7. Optional Properties with Index Signature

```ts
interface Settings {
  theme?: string;
  [key: string]: string | undefined;
}
```

Allows optional known properties while still supporting dynamic keys.

---

## 8. Common Intermediate Mistakes

❌ Making index signature too broad
❌ Forgetting known properties must conform
❌ Overusing index signatures instead of proper typing
❌ Using `any` instead of unions

---

## 9. Real-World Use Cases

* API response objects
* Form data with dynamic fields
* Localization dictionaries
* Feature flags
* Configuration systems

---

## 10. Intermediate Interview Questions

1. Why must number index signatures be subtypes of string index signatures?
2. Difference between index signature and Record?
3. When should index signatures be avoided?
4. How do index signatures affect known properties?
5. How can you restrict keys more safely?

---

## Summary

* Index signatures enable dynamic object typing
* Intermediate usage focuses on **safety and constraints**
* Prefer `Record` or mapped types when possible
* Avoid overly permissive designs

Next:
➡️ **Index Signature — Expert Guide**
