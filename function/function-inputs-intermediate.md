# TypeScript Function Inputs (Parameters) — Intermediate Level

This guide covers **intermediate-level concepts** for function inputs in TypeScript. It assumes you already know basic function syntax and typing.

---

## 1. Optional Parameters (`?`)

Optional parameters may or may not be provided when calling a function.

```ts
function greet(name: string, title?: string): string {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}

greet("Jawad");
greet("Jawad", "Mr.");
```

**Rules:**

* Optional parameters must come **after required parameters**.
* They are internally treated as `type | undefined`.

---

## 2. Default Parameters

Default values are used when no argument is passed.

```ts
function calculateDiscount(price: number, discount: number = 10): number {
  return price - (price * discount) / 100;
}

calculateDiscount(100);     // uses default discount
calculateDiscount(100, 20);
```

**Difference from optional:**

* Optional may be `undefined`
* Default parameters always have a value

---

## 3. Union Types as Inputs

Union types allow multiple possible input types.

```ts
function printId(id: number | string): void {
  console.log("Your ID:", id);
}

printId(101);
printId("A101");
```

Type narrowing is required when using type-specific methods.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

---

## 4. Object as Function Input

Typing objects improves safety and readability.

```ts
function createUser(user: { name: string; age: number }): void {
  console.log(user.name, user.age);
}

createUser({ name: "Jawad", age: 22 });
```

### Using Type Alias

```ts
type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

function registerUser(user: User): void {
  console.log(user);
}
```

---

## 5. Array as Function Input

```ts
function calculateTotal(prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

calculateTotal([10, 20, 30]);
```

Readonly arrays prevent modification.

```ts
function logValues(values: readonly string[]): void {
  console.log(values);
}
```

---

## 6. Tuple as Function Input

Tuples enforce fixed length and order.

```ts
function printUserInfo(user: [string, number]): void {
  const [name, age] = user;
  console.log(name, age);
}

printUserInfo(["Jawad", 22]);
```

---

## 7. Rest Parameters

Used when number of inputs is unknown.

```ts
function sumAll(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sumAll(1, 2, 3, 4);
```

---

## 8. Function Type as Input (Callback)

Functions can be passed as parameters.

```ts
function processData(value: number, callback: (n: number) => number): number {
  return callback(value);
}

processData(10, (n) => n * 2);
```

---

## 9. Using `unknown` as Input

For safer dynamic inputs.

```ts
function handleInput(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

---

## 10. Common Mistakes (Intermediate)

❌ Using `any` instead of proper types
❌ Not narrowing union types
❌ Modifying readonly parameters
❌ Incorrect order of optional parameters

---

## Interview Questions (Intermediate Level)

1. What is the difference between optional and default parameters?
2. Why must optional parameters come after required ones?
3. How do union types affect function inputs?
4. How do you type a function that accepts an object?
5. What is the benefit of using type aliases for function parameters?
6. When should you use rest parameters?
7. How are tuples different from arrays in function inputs?
8. Why is `unknown` safer than `any` for inputs?
9. How do callback functions work as parameters?
10. What problems do readonly parameters solve?

---

## Summary

At the intermediate level, function inputs focus on:

* Flexibility (optional, default, rest)
* Safety (union, unknown, readonly)
* Structure (objects, tuples, callbacks)

Mastering these concepts prepares you for **advanced patterns like generics and function overloading**.
