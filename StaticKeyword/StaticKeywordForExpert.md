# TypeScript `static` Keyword — Intermediate Guide

This guide explains **intermediate-level usage of the `static` keyword in TypeScript**, focusing on **practical examples, combined patterns with inheritance, and best practices**.

---

## 1. Static Methods and Properties with Inheritance

```ts
class Animal {
  static kingdom: string = 'Animalia';

  static describeKingdom(): string {
    return `All animals belong to the ${Animal.kingdom} kingdom.`;
  }
}

class Dog extends Animal {
  static species: string = 'Canis lupus familiaris';

  static describeSpecies(): string {
    return `Dogs are part of ${Dog.species}.`;
  }
}

console.log(Dog.kingdom); // Animalia (inherited static property)
console.log(Dog.describeKingdom()); // All animals belong to the Animalia kingdom.
console.log(Dog.species); // Canis lupus familiaris
console.log(Dog.describeSpecies()); // Dogs are part of Canis lupus familiaris.
```

* Static members **can be inherited**.
* Useful for **shared metadata across subclasses**.

---

## 2. Static Utility Classes

```ts
class MathUtils {
  static square(x: number): number {
    return x * x;
  }

  static cube(x: number): number {
    return x * x * x;
  }
}

console.log(MathUtils.square(5)); // 25
console.log(MathUtils.cube(3));   // 27
```

* Common pattern: **utility classes** with only static members.
* No need to instantiate the class.

---

## 3. Static Factory Methods

```ts
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  static createGuest(): User {
    return new User('Guest');
  }
}

const guestUser = User.createGuest();
console.log(guestUser.name); // Guest
```

* Static methods can **create and return class instances**.
* Commonly used in **factory design patterns**.

---

## 4. Accessing Static Members Safely

```ts
class Example {
  static counter: number = 0;

  increment(): void {
    Example.counter++;
  }
}

const obj1 = new Example();
obj1.increment();
console.log(Example.counter); // 1
```

* Instance methods can access static members **via the class name**.
* Static members remain **shared across all instances**.

---

## 5. Intermediate Interview Questions

1. Can static members be inherited? Provide an example.
2. How do you combine static methods with instance methods?
3. What is a static factory method?
4. Explain use cases of static utility classes.
5. How do static members behave across multiple instances?

---

## Summary

* Static members belong to the **class, not instances**.
* They can be **inherited, accessed, and used for shared state**.
* Common patterns: **utility classes, factory methods, and metadata**.
* Enhances **type safety and code reusability** in TypeScript.
