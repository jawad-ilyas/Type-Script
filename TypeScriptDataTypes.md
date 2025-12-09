# TypeScript Data Types Guide

This document provides a **complete guide on TypeScript data types**, including definitions, examples, and interview questions.

---

## 1. Primitive Data Types

### **Definition:**

Primitive data types are the basic types in TypeScript that store **single values**.

### **Types:** number, string, boolean, undefined, null, symbol, bigint

### **Examples:**

```ts
// number
let age: number = 30;
console.log(age);

// string
let name: string = "Jawad";
console.log(name);

// boolean
let isStudent: boolean = true;
console.log(isStudent);

// undefined
let notAssigned: undefined = undefined;
console.log(notAssigned);

// null
let emptyValue: null = null;
console.log(emptyValue);

// symbol
let uniqueId: symbol = Symbol("id");
console.log(uniqueId);

// bigint
let bigNumber: bigint = 9007199254740991n;
console.log(bigNumber);
```

### **Notes:**

* `bigint` requires TS target >= ES2020
* `symbol` requires TS target >= ES2015

### **Interview Questions:**

* What are the primitive data types in TypeScript?
* Difference between `null` and `undefined`.
* Difference between `any` and `unknown`.
* How is `bigint` different from `number`?

---

## 2. Object Data Types

### **Definition:**

Objects can store **multiple values**, including arrays, tuples, and regular objects.

### **Examples:**

**Tuple:**

```ts
let employee: [string, number] = ["Jawad", 22];
console.log(employee[0]);
console.log(employee[1]);
```

**Array:**

```ts
let numbers: number[] = [1, 2, 3];
console.log(numbers);

let names: string[] = ["Jawad", "Ali"];
console.log(names);
```

**Object:**

```ts
let user: { name: string; age: number } = {
  name: "Jawad",
  age: 22
};
console.log(user.name);
console.log(user.age);
```

### **Notes:**

* Tuples have **fixed types and order**.
* Arrays can have **any number of elements of the same type**.
* Objects can have **optional** and **readonly** properties.

### **Interview Questions:**

* What is a tuple and how is it different from an array?
* How do you define optional properties in an object?
* Difference between `type` and `interface`.

---

## 3. Special Data Types

### **Void:**

* Represents **no return value** in functions.

```ts
function sayHello(): void {
  console.log("Hello!");
}
sayHello();
```

### **Never:**

* Represents a function that **never returns**.

```ts
function throwError(): never {
  throw new Error("This function never returns");
}
```

### **Any:**

* Can hold **any value**, disables type checking.

```ts
let value: any = 10;
value = "Jawad";
```

### **Unknown:**

* Must **check type** before using.

```ts
let data: unknown = "Hello";
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

### **Interview Questions:**

* Difference between `void` and `never`.
* Difference between `any` and `unknown`.
* Can you assign `undefined` or `null` to a variable of type `void`?

---

## 4. Advanced Types

### **Enum:**

```ts
enum City {
  Lahore,
  Karachi,
  Islamabad
}
let userCity: City = City.Lahore;
console.log(userCity);
```

### **Literal Types:**

```ts
let directions: "up" | "down";
directions = "up";
```

### **Union Types:**

```ts
let unionExample: string | number;
unionExample = "Jawad";
unionExample = 10;
```

### **Intersection Types:**

```ts
type Employee = { name: string };
type Manager = { department: string };
type TeamLead = Employee & Manager;
let lead: TeamLead = { name: "Jawad", department: "ITC" };
```

### **Type Alias:**

```ts
type Id = string | number;
let userId: Id = "121212";
```

### **Interview Questions:**

* What is an enum and when would you use it?
* Difference between union and intersection types.
* Can tuple elements be optional or readonly?
* How do literal types help in TypeScript?

---

## 5. Function Types

```ts
let sum: (x: number, y: number) => number;
sum = (x, y) => x + y;
console.log(sum(5, 10));
```

### **Interview Questions:**

* How do you define the type of a function?
* Difference between a function returning `void` and `never`.
* How do you type a function with multiple argument types?

---

This guide covers **primitive, object, special, and advanced types**, along with **examples and interview questions** for each.

You can use this file to **study, practice, and prepare for TypeScript interviews**.



# TypeScript Data Types Interview Questions

## 1. Primitive Data Types

* **Q1:** What are the primitive data types in TypeScript?
* **Q2:** What is the difference between `null` and `undefined` in TypeScript?
* **Q3:** Can you assign a number to a variable of type `string`?
* **Q4:** How is `bigint` different from `number`? When would you use it?
* **Q5:** What is `symbol`? Why is it used in TypeScript?
* **Q6:** Can you assign a void function to a variable? Explain with example.
* **Q7:** What is the difference between `any` and `unknown` types?

## 2. Object Data Types

* **Q8:** What is a tuple in TypeScript? Give an example.
* **Q9:** What is the difference between an array and a tuple in TypeScript?
* **Q10:** How do you define an object type in TypeScript? Give an example.
* **Q11:** Can object properties be optional? How do you define optional properties?
* **Q12:** What is the difference between interface and type alias for objects?

## 3. Special Data Types

* **Q13:** What is the `void` type used for in TypeScript?
* **Q14:** What is the `never` type? Give a scenario where it is used.
* **Q15:** How is `any` different from `unknown`? Which is safer to use?
* **Q16:** Can you assign `undefined` or `null` to a variable of type `void`?

## 4. Advanced Types

* **Q17:** What is an enum in TypeScript? Give an example.
* **Q18:** Can enum values be strings or numbers only?
* **Q19:** What is a literal type? Give an example of string literal type.
* **Q20:** What is a union type? Give an example combining string and number.
* **Q21:** What is an intersection type? Give an example combining two object types.
* **Q22:** How do you use type aliases to simplify complex types?
* **Q23:** Can you mix literal, union, and enum types in a single variable? Explain.

## 5. Function Related Types

* **Q24:** How do you define the type of a function in TypeScript?
* **Q25:** What is the difference between a function returning `void` and `never`?
* **Q26:** How do you type a function that takes multiple arguments of different types?

## 6. Bonus Conceptual Questions

* **Q27:** What happens if you try to assign a value of one type to a variable of another type?
* **Q28:** How does TypeScript enforce type safety at compile time?
* **Q29:** Why would you choose `unknown` over `any` in TypeScript?
* **Q30:** Can tuple elements be optional or readonly? Give an example.
