# TypeScript Interface – Expert Guide

This guide covers **expert-level usage of interfaces in TypeScript**, including advanced patterns, conditional types, mapped types, and complex class integrations.

---

## 1. Conditional Types with Interfaces

* Use conditional types to create interfaces that **depend on other types**

```ts
type Response<T> = T extends { error: any } ? { error: string } : { data: T };

interface ApiResponse<T> extends Response<T> {}

const successResponse: ApiResponse<{ name: string }> = { data: { name: "Jawad" } };
const errorResponse: ApiResponse<{ error: number }> = { error: "Failed" };
```

* Provides **dynamic typing based on conditions**

---

## 2. Mapped Types and Interfaces

* Combine interfaces with **mapped types** for flexible object structures

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

interface Features {
  darkMode: () => void;
  autoSave: () => void;
}

type FeatureFlags = OptionsFlags<Features>;

const flags: FeatureFlags = { darkMode: true, autoSave: false };
console.log(flags);
```

* Useful for **feature toggles, configuration objects**

---

## 3. Interfaces with Advanced Class Patterns

* Enforcing **complex contracts on classes** with generics and inheritance

```ts
interface Repository<T> {
  getById(id: number): T;
  getAll(): T[];
}

class UserRepository implements Repository<User> {
  private users: User[] = [];

  getById(id: number): User {
    return this.users.find(u => u.id === id)!;
  }

  getAll(): User[] {
    return this.users;
  }
}
```

* Ensures **type-safe access to data structures**

---

## 4. Hybrid and Callable Interfaces at Expert Level

* Interfaces can describe **objects that are callable and have properties**

```ts
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function createCounter(): Counter {
  let counter = <Counter>function (start: number) { return `Start: ${start}`; };
  counter.interval = 123;
  counter.reset = () => console.log('Reset!');
  return counter;
}

let c = createCounter();
c(10);
c.reset();
```

* Combines **advanced flexibility with strong typing**

---

## 5. Best Practices for Expert Interfaces

1. Use **conditional and mapped types** for dynamic object structures
2. Combine interfaces with **generics** for reusable components
3. Use **hybrid interfaces** for advanced callable objects
4. Ensure all classes implement **full interface contracts**
5. Prefer interfaces over `any` for large-scale projects

---

## 6. Expert Interview Questions

1. How do conditional types enhance interfaces?
2. How can mapped types be combined with interfaces?
3. Explain hybrid interfaces and provide an example.
4. How do interfaces enforce contracts in generic classes?
5. What advanced patterns do you use in large TypeScript projects with interfaces?
6. How do you ensure type safety in complex interface hierarchies?

---

## Summary

* Expert interface usage includes **conditional types, mapped types, generics, hybrid interfaces, and class integration**
* Ensures **flexibility and strong type safety** in complex applications
* Prepares developers for **expert-level TypeScript projects and interviews**
