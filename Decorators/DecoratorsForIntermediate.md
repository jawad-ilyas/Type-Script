# TypeScript Decorators — Intermediate Guide

This guide focuses on **practical and real-world usage of decorators**, building on beginner concepts. You will learn **decorator factories, method overriding, validation, and metadata-like patterns**.

---

## Prerequisites

* Basic knowledge of decorators
* `experimentalDecorators` enabled in `tsconfig.json`

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

---

## 1. Decorator Factories (Most Important Concept)

A **decorator factory** is a function that returns a decorator.

### Example

```ts
function Logger(message: string) {
  return function (constructor: Function) {
    console.log(message, constructor.name);
  };
}

@Logger("Creating class:")
class User {
  name = "Jawad";
}
```

### Why It Matters

* Allows **configuration**
* Very common in frameworks

---

## 2. Method Decorator — Modifying Behavior

### Example: Logging Method Calls

```ts
function LogExecution(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${methodName} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogExecution
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3);
```

### Key Learning

* Decorators can **wrap functions**
* Used for logging, caching, authorization

---

## 3. Access Control Decorator (Authorization)

```ts
function AdminOnly(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = function () {
    if (!this.isAdmin) {
      throw new Error("Access denied");
    }
    return "Access granted";
  };
}

class Dashboard {
  isAdmin = false;

  @AdminOnly
  viewStats() {}
}

// dashboard.viewStats(); ❌ Error
```

---

## 4. Property Decorator — Validation Pattern

```ts
function Required(target: any, propertyKey: string) {
  let value: string;

  Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newValue: string) {
      if (!newValue) {
        throw new Error(`${propertyKey} is required`);
      }
      value = newValue;
    },
  });
}

class UserForm {
  @Required
  username!: string;
}

const form = new UserForm();
form.username = "Jawad"; // ✅
```

---

## 5. Multiple Decorators (Execution Order)

```ts
function First() {
  return function () {
    console.log("First decorator");
  };
}

function Second() {
  return function () {
    console.log("Second decorator");
  };
}

@First()
@Second()
class Example {}
```

### Order

* Decorator **factories** run top → bottom
* Decorators execute bottom → top

---

## 6. Real-World Pattern (Framework Style)

```ts
function Controller(path: string) {
  return function (constructor: Function) {
    constructor.prototype.basePath = path;
  };
}

@Controller("/users")
class UserController {}
```

This pattern is used in **NestJS**.

---

## Common Intermediate Mistakes

* Expecting decorators to run per function call
* Overusing decorators for simple logic
* Forgetting execution order

---

## Intermediate Interview Questions

1. What is a decorator factory?
2. How can decorators modify method behavior?
3. Explain execution order of multiple decorators
4. How are decorators used in frameworks like NestJS?
5. Can decorators access instance properties?
6. Difference between property and method decorators
7. Why are decorators evaluated at class definition time?

---

## Summary

* Decorator factories enable configuration
* Method decorators can wrap logic
* Property decorators help with validation
* Intermediate decorators resemble real framework code

---

✅ Ready for **Expert Decorators** (Reflect Metadata, Dependency Injection)
