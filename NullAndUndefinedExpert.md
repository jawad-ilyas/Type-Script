# TypeScript Null and Undefined - Detailed Examples (Expert Level)

## 1. undefined

**Definition:**

* 'undefined' is a primitive type that indicates a variable has been declared but not assigned a value.
* In TypeScript, strict null checks (`strictNullChecks`) affect how undefined can be assigned and accessed.
* Undefined can be used in union types for more complex scenarios.

**Advanced Examples:**

```ts
// Using undefined in union types
let score: number | undefined;
score = undefined;  // ✅ valid
score = 100;        // ✅ valid

// Optional function parameter
function logScore(score?: number) {
    console.log(score);
}
logScore();   // undefined
logScore(50); // 50

// Optional chaining with undefined
let user: { profile?: { age?: number } } = {};
console.log(user.profile?.age); // undefined
```

**Notes:**

* `undefined` is useful in **optional properties**, **parameters**, and **lazy initialization**.
* Helps prevent runtime errors when combined with **optional chaining** and **nullish coalescing**.

---

## 2. null

**Definition:**

* `null` represents an intentional absence of any object value.
* Can be combined with other types in union types for advanced type safety.

**Advanced Examples:**

```ts
// Union types with null
let username: string | null = null;
username = "Jawad"; // valid

// Function returning null
function findUser(id: number): { name: string } | null {
    return id === 0 ? null : { name: "Jawad" };
}
console.log(findUser(0)); // null
console.log(findUser(1)); // { name: "Jawad" }

// Nullish coalescing operator
let input: string | null = null;
let result = input ?? "Default Value";
console.log(result); // "Default Value"
```

**Notes:**

* `null` is explicit; always intentional.
* Combined with **optional chaining** and **nullish coalescing**, it provides robust runtime safety.

---

## 3. Key Differences (Expert Perspective)

| Feature                | undefined                            | null                                  |           |        |              |      |
| ---------------------- | ------------------------------------ | ------------------------------------- | --------- | ------ | ------------ | ---- |
| Meaning                | Variable not assigned                | Variable explicitly empty             |           |        |              |      |
| Type                   | undefined                            | null                                  |           |        |              |      |
| Default value          | Yes, for uninitialized variables     | No                                    |           |        |              |      |
| Usage                  | Optional properties, function params | Intentional empty value, object reset |           |        |              |      |
| Union with other types | number                               | undefined, string                     | undefined | string | null, number | null |
| Nullish coalescing     | Can be used to provide defaults      | Can be used to provide defaults       |           |        |              |      |

---

## 4. Expert-Level Interview Questions

1. Explain the difference between `null` and `undefined` in TypeScript and how `strictNullChecks` changes their behavior.
2. How can optional chaining prevent runtime errors when accessing potentially null or undefined properties?
3. Describe the nullish coalescing operator (`??`) and its use with null and undefined.
4. Can a function parameter be both optional and explicitly null? Provide an example.
5. How does TypeScript type inference handle variables initialized with undefined?
6. Explain the difference between `== null` and `=== null` in TypeScript, and when each should be used.
7. Demonstrate using union types with null and undefined in a complex object.
8. How do strict compiler options (`strict`, `strictNullChecks`) enforce better handling of null and undefined?
9. Provide an example of safe access to nested properties that may be null or undefined.
10. How would you design a TypeScript API that returns either a valid object or null safely?
