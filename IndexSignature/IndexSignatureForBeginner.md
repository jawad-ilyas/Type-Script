# Index Signature in TypeScript — Beginner Guide

This guide explains **Index Signatures in TypeScript** using **very simple language**, designed for **absolute beginners**.

---

## 1. What is an Index Signature?

An **Index Signature** allows an object to have **dynamic keys** when you **don’t know the property names in advance**.

In simple words:

> "I don’t know the key names, but I know the type of keys and values."

---

## 2. Why Do We Need Index Signatures?

Normally, TypeScript requires **exact property names**.

### ❌ Problem (Without Index Signature)

```ts
let user = {
  name: "Jawad",
  age: 25
};

user.city = "Lahore"; // ❌ Error
```

TypeScript does not allow **extra properties**.

---

## 3. Basic Index Signature Syntax

```ts
{
  [key: string]: valueType;
}
```

Example:

```ts
let data: { [key: string]: string };
```

* `key: string` → key must be string
* `string` → value must be string

---

## 4. Simple Beginner Example

```ts
let student: { [key: string]: string } = {
  name: "Jawad",
  city: "Lahore",
  course: "TypeScript"
};

console.log(student.name);
console.log(student.city);
```

✔ Any string key is allowed
✔ All values must be string

---

## 5. Index Signature with Number Values

```ts
let marks: { [subject: string]: number } = {
  math: 90,
  english: 85,
  science: 88
};

console.log(marks.math);
```

✔ Keys are subject names
✔ Values are marks

---

## 6. Mixing Known Properties + Index Signature

```ts
let employee: {
  name: string;
  age: number;
  [key: string]: string | number;
} = {
  name: "Jawad",
  age: 25,
  department: "IT",
  city: "Lahore"
};
```

✔ Fixed properties + dynamic properties

---

## 7. Index Signature with Number Keys

```ts
let scores: { [index: number]: number } = {
  0: 10,
  1: 20,
  2: 30
};

console.log(scores[1]);
```

✔ Common in array-like objects

---

## 8. Important Beginner Rules

1️⃣ Key type must be `string`, `number`, or `symbol`
2️⃣ Value type must be **same for all dynamic keys**
3️⃣ Known properties must match index signature value type

---

## 9. Common Beginner Mistakes ❌

```ts
let obj: { [key: string]: number } = {
  age: 25,
  name: "Jawad" // ❌ string not allowed
};
```

```ts
[key: boolean]: string // ❌ boolean not allowed
```

---

## 10. Real-Life Example (Beginner Friendly)

📚 **Dictionary / Settings Object**

```ts
let settings: { [key: string]: string } = {
  theme: "dark",
  language: "en",
  layout: "grid"
};
```

---

## 11. When Should Beginners Use Index Signature?

✅ Use when:

* Keys are dynamic
* Data comes from API
* Config or settings object

❌ Avoid when:

* Property names are fixed

---

## 12. Beginner Interview Questions

1. What is an index signature?
2. Why do we use index signatures?
3. What types are allowed for index keys?
4. Can we mix known properties with index signatures?
5. What happens if value type doesn’t match?

---

## 13. Summary

* Index signature allows **dynamic object keys**
* Keys → string | number | symbol
* Values → must follow one type
* Very useful for flexible data

---

✅ Beginner-friendly
✅ Interview-ready
✅ Easy to understand
