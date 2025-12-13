# TypeScript Generics — Expert Guide

This guide covers **expert-level generics in TypeScript**, focusing on **advanced type manipulation, conditional types, infer, mapped types, and real-world architecture patterns** used in large-scale applications.

---

## 1. Expert Mindset for Generics

At expert level, generics are used to:

* Build **reusable abstractions**
* Create **type-safe libraries**
* Model complex business logic
* Reduce duplication without losing safety

Generics operate not just at runtime abstraction, but at **compile-time type computation**.

---

## 2. Conditional Types with Generics

```ts
type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>; // true
type B = IsArray<number>;   // false
```

* Enables **type-level decision making**
* Foundation of advanced utility types

---

## 3. `infer` Keyword (Advanced Inference)

```ts
type ReturnTypeCustom<T> = T extends (...args: any[]) => infer R ? R : never;

function add(a: number, b: number) {
  return a + b;
}

type Result = ReturnTypeCustom<typeof add>; // number
```

* Extracts types dynamically
* Used internally by `ReturnType`, `Parameters`

---

## 4. Generics with `keyof`

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Jawad", age: 25 };
getValue(user, "name"); // string
```

* Enables **safe dynamic property access**
* Common in forms, tables, APIs

---

## 5. Mapped Types (Advanced)

```ts
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface User {
  id: number;
  name: string;
}

type NullableUser = Nullable<User>;
```

* Used to transform entire object structures
* Backbone of state-management typing

---

## 6. Deep Generic Types (Recursive)

```ts
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
```

* Prevents mutation at all nesting levels
* Used in Redux, immutable architectures

---

## 7. Generic Constraints (Strict)

```ts
function save<T extends { id: number }>(item: T): void {
  console.log(item.id);
}
```

* Prevents misuse of generics
* Ensures required structure

---

## 8. Generic Classes (Repository Pattern)

```ts
class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find(i => i.id === id);
  }
}
```

* Used in services, ORM layers
* Strongly typed data access

---

## 9. Variadic Tuple Generics

```ts
function logAll<T extends unknown[]>(...args: T): T {
  return args;
}

logAll(1, "a", true);
```

* Enables flexible yet safe APIs
* Used in hooks, middleware

---

## 10. Generics in API Responses

```ts
interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}

function handleResponse<T>(res: ApiResponse<T>): T {
  return res.data;
}
```

* Prevents duplication
* Strongly typed backend/frontend contracts

---

## 11. Common Expert Mistakes

❌ Over-abstracting generics
❌ Missing constraints (`extends`)
❌ Using `any` instead of generics
❌ Writing unreadable type logic

---

## 12. Expert Best Practices

1. Prefer inference over explicit generics
2. Add constraints for safety
3. Combine with `keyof`, `infer`, mapped types
4. Avoid unnecessary complexity
5. Document complex generic logic

---

## 13. Expert Interview Questions

1. What is the purpose of `infer`?
2. How do conditional types work?
3. Difference between `keyof T` and `T[K]`?
4. How are utility types implemented internally?
5. When should generics be avoided?
6. Explain deep readonly and its use cases

---

## Summary

* Expert generics enable **powerful type computation**
* Core to large-scale TypeScript systems
* Mastery of generics = mastery of TypeScript
