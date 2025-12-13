# TypeScript Tuples – Beginner Guide

This guide covers **beginner-level usage of tuples in TypeScript**, including definitions, examples, and interview questions.

---

## 1. What is a Tuple?

* A **tuple** is a fixed-length array where **each element can have a different type**.
* Tuples are useful when you know the number of elements and their types.

```ts
let employee: [string, number];
employee = ["Jawad", 25];
console.log(employee[0]); // Jawad
console.log(employee[1]); // 25
```

---

## 2. Tuples with More Elements

```ts
let employeeDetails: [string, number, boolean];
employeeDetails = ["Ali", 30, true];
console.log(employeeDetails[0]); // Ali
console.log(employeeDetails[1]); // 30
console.log(employeeDetails[2]); // true
```

---

## 3. Optional Tuple Elements

* You can make some tuple elements **optional**

```ts
let optionalTuple: [string, number?];
optionalTuple = ["Jawad"];
optionalTuple = ["Jawad", 25];
```

---

## 4. Accessing Tuple Elements

```ts
let info: [string, number] = ["Ilyas", 22];
let name = info[0];
let age = info[1];
console.log(name, age); // Ilyas 22
```

---

## 5. Common Beginner Mistakes

❌ Wrong type assignment

```ts
let tuple: [string, number];
tuple = [25, "Jawad"]; // Error
```

❌ Exceeding the tuple length

```ts
let tuple: [string, number];
tuple = ["Jawad", 25, true]; // Error
```

---

## 6. Tuples vs Arrays

* **Tuple**: fixed length, different types per element
* **Array**: dynamic length, same type for all elements

```ts
let array: number[] = [1, 2, 3];
let tuple: [number, string] = [1, "one"];
```

---

## 7. Best Practices

* Always declare the **type and order** of elements
* Use tuples when the number of elements is **fixed and known**
* Avoid using `any` in tuples

---

## 8. Beginner Interview Questions

1. What is a tuple in TypeScript?
2. How is a tuple different from an array?
3. How do you define optional tuple elements?
4. Can tuples have elements of different types?
5. What happens if you assign the wrong type to a tuple?
6. How do you access tuple elements?

---

## Summary

* Tuples are **fixed-length arrays with multiple types**
* Good for **representing structured data** like coordinates, key-value pairs, or employee info
* Beginner understanding prepares you for **intermediate tuple usage with rest elements and union types**.
