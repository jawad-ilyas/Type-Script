# TypeScript Null and Undefined - Detailed Examples (Intermediate Level)

## 1. undefined

**Definition:**

* 'undefined' means a variable has been declared but has not been assigned a value yet.
* It's the default value of uninitialized variables.
* In TypeScript strict mode, accessing a variable before assignment can cause an error.

**Example 1: explicitly undefined**

```ts
let undefinedVariable: undefined = undefined;
console.log("Explicit undefined:", undefinedVariable); // Output: undefined
```

**Example 2: declared but not initialized**

```ts
let unassignedVar: string; // variable is declared but not assigned
// console.log(unassignedVar); // ❌ Error in strict mode
unassignedVar = "Now I have a value!";
console.log("Assigned later:", unassignedVar); // Output: Now I have a value!
```

**Notes:**

* undefined indicates **absence of value** due to variable not being initialized.
* Useful for **checking if a variable has been assigned**.
* You can use union types to allow undefined along with other types:

```ts
let userScore: number | undefined;
userScore = undefined; // valid
userScore = 50;        // valid
```

---

## 2. null

**Definition:**

* 'null' represents an **intentional absence of value**.
* It is used when you want to explicitly say that a variable is empty.
* Can be used with union types to allow empty or absent values.

**Example 1: simple null assignment**

```ts
let nullVariable: null = null;
console.log("Simple null:", nullVariable); // Output: null
```

**Example 2: using union type**

```ts
let userName: string | null = null;
console.log("userName initially:", userName); // Output: null

userName = "Jawad";
console.log("userName after assignment:", userName); // Output: Jawad
```

**Notes:**

* null is **intentional emptiness**, unlike undefined which is unintentional.
* In strict mode, you need a union type to assign null to variables of other types.

```ts
let age: number | null = null; // ✅ Allowed
age = 25;                       // ✅ Allowed
```

---

## 3. Key Differences between null and undefined

| Feature       | undefined                             | null                                      |
| ------------- | ------------------------------------- | ----------------------------------------- |
| Meaning       | Not assigned yet                      | Intentionally empty                       |
| Default value | Yes, for uninitialized variables      | No                                        |
| Type          | undefined                             | null                                      |
| Usage         | Indicates variable is missing a value | Indicates variable is intentionally empty |
| Example       | let x: undefined;                     | let y: null;                              |

---

## 4. Best Practices

1. Use undefined for variables that are declared but not yet assigned.
2. Use null when you want to explicitly reset or clear a variable.
3. In strict mode, combine with union types if you want a variable to accept null or undefined:

```ts
let value: string | null | undefined;
```

---

## 5. Intermediate Level Interview Questions

1. What is the difference between `null` and `undefined` in TypeScript?
2. How does TypeScript strict mode affect null and undefined assignment?
3. Can you assign `undefined` to a variable of type `string` without using a union type? Why or why not?
4. When would you use a union type like `string | null | undefined`?
5. How can you safely access properties of a variable that might be `null` or `undefined`?
6. Explain the behavior of `==` vs `===` when comparing null and undefined.
7. Give an example of using `null` and `undefined` in a function parameter with default values.
8. How does TypeScript help prevent runtime errors when working with null and undefined?
9. Can you assign `null` to a variable of type `undefined`? Explain.
10. How would you handle optional object properties that can be null or undefined?
