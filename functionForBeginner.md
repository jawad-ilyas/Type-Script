# TypeScript Function Return Types – Beginner Guide

This guide covers **beginner-level understanding of function return types in TypeScript**, including basic definitions, examples, and interview questions.

---

## 1. What is a Function Return Type?

* A **return type** specifies the type of value a function will return.
* Helps TypeScript **check type safety** when calling the function.

```ts
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(5, 10);
console.log(sum); // 15
```

* Here, `: number` specifies that `add` returns a number.

---

## 2. Function with `void` Return Type

* `void` means the function **does not return any value**

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

greet("Jawad"); // Hello, Jawad
```

* Useful for **functions that only perform actions**

---

## 3. Function with `any` Return Type

* `any` means the function **can return any type**

```ts
function randomValue(): any {
  if (Math.random() > 0.5) return 10;
  return "Hello";
}

console.log(randomValue());
```

* Not recommended in production due to **loss of type safety**

---

## 4. Function with `unknown` Return Type

* `unknown` is **safer than any**

```ts
function fetchData(): unknown {
  return { name: "Jawad", age: 25 };
}

const data = fetchData();
if (typeof data === "object" && data !== null && 'name' in data) {
  console.log((data as any).name); // Jawad
}
```

* Forces **type checking** before using the returned value

---

## 5. Function Returning an Object

```ts
function getUser(): { name: string; age: number } {
  return { name: "Ali", age: 30 };
}

const user = getUser();
console.log(user.name, user.age); // Ali 30
```

---

## 6. Function Returning a Tuple

```ts
function getTuple(): [string, number] {
  return ["Jawad", 25];
}

const tuple = getTuple();
console.log(tuple[0], tuple[1]); // Jawad 25
```

---

## 7. Best Practices

1. Always **explicitly define the return type** of a function
2. Use `void` for **functions with no return value**
3. Avoid `any` unless necessary
4. Use `unknown` when returning **dynamic data**
5. Use tuples or objects for **structured return values**

---

## 8. Beginner Interview Questions

1. What is a function return type in TypeScript?
2. How do you specify a return type for a function?
3. What does `void` mean in a function return type?
4. How is `any` different from `unknown` as a return type?
5. How do you return an object or tuple from a function?
6. Why is it important to specify the return type?

---

## Summary

* Function return types **ensure type safety** in TypeScript
* Beginners should understand **basic types, void, any, unknown, objects, and tuples**
* Provides foundation for **intermediate and expert function return type handling**
