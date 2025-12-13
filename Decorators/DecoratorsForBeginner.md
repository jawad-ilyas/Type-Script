# TypeScript Decorators — Beginner Guide

## What is a Decorator?

A **decorator** in TypeScript is a **special function** that adds extra behavior to classes, methods, properties, or parameters **without modifying their actual code**.

Decorators are widely used in frameworks like **Angular**, **NestJS**, and **TypeORM**.

---

## Enable Decorators in TypeScript

Before using decorators, enable them in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

---

## 1. Class Decorator (Beginner)

### Example

```ts
function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class User {
  name: string = "Jawad";
}
```

### Explanation

* Runs **when the class is defined**
* `constructor` refers to the class itself

---

## 2. Method Decorator (Beginner)

```ts
function LogMethod(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorated:", methodName);
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}
```

### Explanation

* Decorates a class method
* Executes at **class load time**, not method call time

---

## 3. Property Decorator (Beginner)

```ts
function LogProperty(target: any, propertyKey: string) {
  console.log("Property decorated:", propertyKey);
}

class Person {
  @LogProperty
  name: string = "Jawad";
}
```

### Important Note

* Cannot access the property value
* Only receives the property name

---

## 4. Parameter Decorator (Beginner)

```ts
function LogParameter(
  target: any,
  methodName: string,
  index: number
) {
  console.log(`Parameter index ${index} in ${methodName}`);
}

class UserService {
  save(@LogParameter id: number) {
    console.log(id);
  }
}
```

---

## 5. Simple Real-Life Example

### Authentication Decorator

```ts
function Auth(constructor: Function) {
  constructor.prototype.isLoggedIn = true;
}

@Auth
class Dashboard {}

const dashboard = new Dashboard();
console.log((dashboard as any).isLoggedIn); // true
```

---

## Execution Order (Beginner Level)

1. Parameter Decorators
2. Method Decorators
3. Property Decorators
4. Class Decorators

---

## Common Beginner Mistakes

* Forgetting to enable `experimentalDecorators`
* Expecting decorators to run on every function call
* Trying to access property values in property decorators

---

## Beginner Interview Questions

1. What is a decorator in TypeScript?
2. Why are decorators used?
3. Which types of decorators exist?
4. Do decorators run at runtime or compile time?
5. Why are decorators popular in Angular and NestJS?
6. What flag enables decorators in TypeScript?
7. Can decorators modify class behavior?

---

## Summary

* Decorators add reusable behavior
* They keep code clean and structured
* Mostly used in frameworks
* Beginner focus: **syntax and understanding execution**

---

✅ Ready for **Intermediate Decorators** (Factories, Validation)
✅ Ready for **Expert Decorators** (Reflect Metadata, DI)
