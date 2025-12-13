# TypeScript Objects – Beginner Guide

This guide covers **beginner-level usage of objects in TypeScript**, including definitions, examples, and interview questions.

---

## 1. What is an Object?

* An **object** is a collection of **key-value pairs**.
* Keys are usually strings (or symbols), and values can be any type.

```ts
let user: { name: string, age: number } = {
  name: "Jawad",
  age: 25
};

console.log(user.name); // Jawad
console.log(user.age);  // 25
```

---

## 2. Optional Properties

* You can make object properties **optional** using `?`

```ts
let employee: { name: string, age?: number } = { name: "Ali" };
console.log(employee.name); // Ali
console.log(employee.age);  // undefined
```

---

## 3. Adding and Modifying Properties

```ts
let product: { id: number, name: string } = { id: 1, name: "Laptop" };
product.name = "Gaming Laptop"; // modify
product.id = 2;                  // modify
console.log(product);
```

---

## 4. Accessing Object Properties

```ts
let car: { brand: string, model: string } = { brand: "Toyota", model: "Corolla" };
console.log(car.brand);  // Toyota
console.log(car['model']); // Corolla
```

---

## 5. Nested Objects

```ts
let student: {
  name: string,
  address: { city: string, zip: number }
} = {
  name: "Ilyas",
  address: { city: "Lahore", zip: 54000 }
};

console.log(student.address.city); // Lahore
```

---

## 6. Common Beginner Mistakes

❌ Missing required properties

```ts
let user: { name: string, age: number } = { name: "Ali" }; // Error
```

❌ Assigning wrong type

```ts
let user: { name: string, age: number } = { name: "Ali", age: "25" }; // Error
```

---

## 7. Best Practices

* Always define object types explicitly
* Use optional properties when needed
* Avoid using `any` for object values
* Use nested objects for structured data

---

## 8. Beginner Interview Questions

1. What is an object in TypeScript?
2. How do you define the type of an object?
3. How do you access object properties?
4. How do you add or modify properties?
5. What are optional properties and how do you define them?
6. How do you define nested objects?
7. What happens if you assign the wrong type to an object property?

---

## Summary

* Objects are **key-value structures** useful for storing related data
* Beginner-level objects focus on **defining types, optional properties, nested objects, and accessing values**
* Prepares the foundation for **intermediate and expert object features like index signatures, type aliases, and advanced patterns**
