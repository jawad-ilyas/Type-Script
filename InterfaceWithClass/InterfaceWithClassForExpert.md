# TypeScript Interface with Class — Expert Guide

This guide covers **expert-level use of interfaces with classes** in TypeScript, focusing on **advanced patterns, architectural best practices, generics, conditional types, and real-world use cases**.

---

## 1. Using Generics with Interfaces in Classes

```ts
interface Repository<T> {
  add(item: T): void;
  get(id: string): T | undefined;
}

class MemoryRepository<T> implements Repository<T & { id: string }> {
  private items: T[] = [];

  add(item: T & { id: string }): void {
    this.items.push(item);
  }

  get(id: string): T | undefined {
    return this.items.find(item => item.id === id);
  }
}
```

* Allows type-safe generic repositories
* Combines interfaces and classes for reusable architecture

---

## 2. Conditional Types in Interfaces

```ts
type Logger<T extends boolean> = T extends true
  ? { log(message: string): void }
  : {};

class ConditionalLogger implements Logger<true> {
  log(message: string): void {
    console.log("LOG:", message);
  }
}
```

* Provides **conditional behaviors** at compile-time
* Useful in library and SDK development

---

## 3. Interface Inheritance with Classes

```ts
interface Contact {
  email: string;
}
interface Address {
  city: string;
}
interface Customer extends Contact, Address {
  id: string;
}

class VIPCustomer implements Customer {
  id: string;
  email: string;
  city: string;

  constructor(id: string, email: string, city: string) {
    this.id = id;
    this.email = email;
    this.city = city;
  }
}
```

* Combines multiple contracts for complex domain models
* Enhances **modular and maintainable architecture**

---

## 4. Readonly, Optional, and Index Signatures

```ts
interface Config {
  readonly apiUrl: string;
  timeout?: number;
  [key: string]: string | number | undefined;
}

class AppConfig implements Config {
  readonly apiUrl = "http://example.com";
  timeout = 5000;
  [key: string]: string | number | undefined;
}
```

* Provides **immutability, flexibility, and type safety** in configurations

---

## 5. Advanced Method Signature Enforcement

```ts
interface Service<T> {
  execute(input: T): Promise<string>;
}

class ApiService implements Service<{ url: string }> {
  async execute(input: { url: string }): Promise<string> {
    return `Called ${input.url}`;
  }
}
```

* Ensures **consistent asynchronous contracts**
* Used in service-oriented architectures

---

## 6. Real-World Expert Use Cases

1. **Generic Repository Pattern** for data access
2. **Conditional logging or feature toggles** in libraries
3. **Dynamic configuration objects** with index signatures
4. **Composable domain models** using multiple interfaces
5. **Asynchronous service contracts** in API layers

---

## 7. Expert-Level Interview Questions

1. How do you use generics in interfaces with classes?
2. Explain conditional types in interface contracts.
3. How do you combine multiple interfaces in a class?
4. What is the role of readonly and optional properties?
5. How do you enforce asynchronous method contracts with interfaces?
6. Why prefer interfaces over abstract classes in certain architectures?

---

## Summary

* Expert use of interfaces with classes focuses on **reusability, safety, and maintainability**.
* Includes generics, conditional types, multiple inheritance, index signatures, and async contracts.
* Mastery enables **complex TypeScript architecture design** and senior-level coding proficiency.
