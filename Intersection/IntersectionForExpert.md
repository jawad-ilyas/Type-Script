# TypeScript Intersection Types – Expert Guide

This guide covers **expert-level usage of intersection types in TypeScript**, including advanced patterns, conditional intersections, generic intersections, and real-world large-scale applications.

---

## 1. Conditional Intersection Types

* Intersection types can be combined with **conditional types** for dynamic object shapes

```ts
type Admin<T> = T extends { role: 'admin' } ? T & { adminAccess: boolean } : T;

type User = { name: string; role: 'admin' | 'user' };

const adminUser: Admin<User> = { name: "Jawad", role: 'admin', adminAccess: true };
const normalUser: Admin<User> = { name: "Ali", role: 'user' };
```

* Enables **dynamic property enforcement** based on conditions

---

## 2. Intersection with Generics

* Use intersection types in **generic contexts** for reusability

```ts
type Identifiable = { id: number };
type Timestamped = { createdAt: Date; updatedAt: Date };

type Entity<T> = T & Identifiable & Timestamped;

interface User { name: string; }

const user: Entity<User> = {
  id: 1,
  name: "Jawad",
  createdAt: new Date(),
  updatedAt: new Date()
};
```

* Ensures **all entities have consistent metadata**

---

## 3. Intersection of Complex Interfaces

* Combine multiple advanced interfaces for **enterprise-level object structures**

```ts
interface User { name: string; email: string; }
interface Permissions { isAdmin: boolean; canEdit: boolean; }
interface Profile { bio?: string; avatarUrl?: string; }

type FullUser = User & Permissions & Profile;

const fullUser: FullUser = {
  name: "Jawad",
  email: "jawad@example.com",
  isAdmin: true,
  canEdit: false,
  bio: "Developer",
  avatarUrl: "avatar.png"
};
```

* Useful for **merging multiple feature sets in large applications**

---

## 4. Functions with Conditional and Intersection Types

```ts
type AdminUser = { role: 'admin'; accessLevel: number };
type NormalUser = { role: 'user' };

type UserType = AdminUser | NormalUser;

function handleUser<T extends UserType>(user: T & { name: string }) {
  if ('accessLevel' in user) {
    console.log(`Admin: ${user.name}, Level: ${user.accessLevel}`);
  } else {
    console.log(`User: ${user.name}`);
  }
}

handleUser({ name: 'Jawad', role: 'admin', accessLevel: 5 });
handleUser({ name: 'Ali', role: 'user' });
```

* Ensures **type-safe operations on merged types**

---

## 5. Best Practices

1. Use intersection types with **conditional and generic types** for flexibility
2. Prefer intersections for **merging multiple feature sets** in large-scale applications
3. Avoid overcomplicating intersections; maintain **readability**
4. Use intersection types in **functions, classes, and API responses**
5. Always validate object properties when using complex intersections

---

## 6. Expert Interview Questions

1. How do you combine conditional types with intersections?
2. How can generics be used with intersection types?
3. Provide an example of a complex object using multiple intersections.
4. How do you handle functions that take parameters of intersected types?
5. What are the real-world advantages of using intersection types in enterprise applications?

---

## Summary

* Expert intersection types include **conditional, generic, and complex multi-interface combinations**
* Ensures **flexibility, type safety, and scalability** in large projects
* Prepares developers for **expert-level TypeScript usage and interviews**
