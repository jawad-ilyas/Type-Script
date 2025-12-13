# TypeScript Function Inputs (Parameters) – Beginner Guide

## 1. What is Function Input?

In TypeScript, **function input** means the **parameters** that a function receives.
TypeScript allows us to **define the type of each input**, which helps prevent bugs.

---

## 2. Basic Function Input Example

```ts
function greet(name: string) {
    console.log("Hello", name);
}

greet("Jawad"); // ✅ Correct
greet(10);       // ❌ Error: number is not assignable to string
```

---

## 3. Function with Multiple Inputs

```ts
function add(a: number, b: number) {
    return a + b;
}

console.log(add(5, 10)); // 15
// add("5", 10); ❌ Error
```

---

## 4. Optional Function Inputs

Optional inputs are marked using `?`.

```ts
function printName(firstName: string, lastName?: string) {
    console.log(firstName, lastName);
}

printName("Jawad");           // Jawad undefined
printName("Jawad", "Ali");   // Jawad Ali
```

---

## 5. Default Parameter Values

If no value is passed, the default value is used.

```ts
function greetUser(name: string = "Guest") {
    console.log("Hello", name);
}

greetUser();        // Hello Guest
greetUser("Jawad"); // Hello Jawad
```

---

## 6. Union Types as Inputs

Function inputs can accept **more than one type** using union types.

```ts
function printId(id: string | number) {
    console.log("Your ID is", id);
}

printId(101);
printId("A101");
```

---

## 7. Object as Function Input

```ts
function printUser(user: { name: string; age: number }) {
    console.log(user.name, user.age);
}

printUser({ name: "Jawad", age: 22 });
```

---

## 8. Array as Function Input

```ts
function printNumbers(numbers: number[]) {
    console.log(numbers);
}

printNumbers([1, 2, 3, 4]);
```

---

## 9. Function Input with Type Alias

```ts
type User = {
    name: string;
    age: number;
};

function showUser(user: User) {
    console.log(user.name, user.age);
}

showUser({ name: "Jawad", age: 25 });
```

---

## 10. Beginner Interview Questions

1. What are function parameters in TypeScript?
2. Why should we define types for function inputs?
3. What is an optional parameter and how do you define it?
4. What is the difference between optional parameters and default parameters?
5. How do union types help in function inputs?
6. Can a function accept an object as input? Give an example.
7. What happens if you pass the wrong type to a function?
8. How do arrays work as function inputs?
9. Why is TypeScript safer than JavaScript for function inputs?
10. Explain function input typing in simple words.
