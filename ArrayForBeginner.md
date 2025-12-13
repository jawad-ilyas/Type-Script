# TypeScript Arrays – Beginner Guide

This guide covers **beginner-level usage of arrays in TypeScript**. It includes definitions, examples, and interview questions.

---

## 1. What is an Array?

* An **array** is a collection of values stored in a single variable.
* Arrays can hold **multiple values of the same type**.

```ts
let numbers: number[] = [1, 2, 3, 4];
console.log(numbers); // [1, 2, 3, 4]

let names: string[] = ["Jawad", "Ali", "Ilyas"];
console.log(names); // ["Jawad", "Ali", "Ilyas"]
```

---

## 2. Accessing Array Elements

```ts
let fruits: string[] = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange
```

---

## 3. Adding Elements

```ts
let colors: string[] = ["Red", "Green"];
colors.push("Blue");
console.log(colors); // ["Red", "Green", "Blue"]
```

---

## 4. Removing Elements

```ts
let animals: string[] = ["Cat", "Dog", "Elephant"];
animals.pop(); // Removes last element
console.log(animals); // ["Cat", "Dog"]

animals.shift(); // Removes first element
console.log(animals); // ["Dog"]
```

---

## 5. Looping Through Arrays

```ts
let numbers: number[] = [1, 2, 3, 4];

// Using for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using for-of loop
for (let num of numbers) {
  console.log(num);
}
```

---

## 6. Array of Mixed Types (Beginner Note)

```ts
let mixedArray: (number | string)[] = [1, "Two", 3, "Four"];
console.log(mixedArray);
```

---

## 7. Common Beginner Mistakes

❌ Assigning wrong type

```ts
let nums: number[] = [1, 2, "3"]; // Error
```

❌ Accessing out-of-bound index

```ts
console.log(numbers[10]); // undefined
```

---

## 8. Best Practices

* Always define the **type of the array**
* Use loops or array methods for iteration
* Avoid using `any` unless necessary
* Prefer **consistent data types** in arrays

---

## 9. Beginner Interview Questions

1. What is an array in TypeScript?
2. How do you define the type of an array?
3. How do you access elements in an array?
4. How do you add and remove elements?
5. How do you loop through arrays?
6. What is the difference between `push` and `pop`?
7. Can arrays store multiple types of values?
8. What happens if you access an index that does not exist?

---

## Summary

* Arrays are **collections of values of the same type**
* You can access, add, remove, and loop through elements
* TypeScript enforces type safety to prevent errors

This is the **foundation** for intermediate and advanced array operations like map, filter, reduce, and tuples.
