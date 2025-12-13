# TypeScript Null and Undefined - Detailed Examples

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
// To safely use, assign later
unassignedVar = "Now I have a value!";
console.log("Assigned later:", unassignedVar); // Output: Now I have a value!
```

**Notes:**

* undefined indicates **absence of value** due to variable not being initialized.
* Useful for **checking if a variable has been assigned**.

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
let userName: string | null = null; // can hold string or null
console.log("userName initially:", userName); // Output: null

// Assign a value later
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
