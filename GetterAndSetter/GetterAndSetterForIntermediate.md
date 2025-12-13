# Getter and Setter in TypeScript — Intermediate Guide

This guide explains **Getter and Setter in TypeScript** at an **intermediate level**, focusing on **validation, computed properties, readonly patterns, and real-world usage**.

---

## 1. Quick Recap (Beginner)

* `get` → read a value
* `set` → update a value
* Used inside **classes**
* Helps control access to properties

---

## 2. Why Getter & Setter Matter at Intermediate Level

At intermediate level, getter and setter are used to:

* Add **business rules & validation**
* Create **computed properties**
* Control **read-only / write-only** access
* Improve **encapsulation**

---

## 3. Validation with Getter & Setter

```ts
class User {
  private _email: string = "";

  set email(value: string) {
    if (!value.includes("@")) {
      throw new Error("Invalid email address");
    }
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

const user = new User();
user.email = "jawad@gmail.com";
console.log(user.email);
```

✔ Ensures only valid data is stored

---

## 4. Computed Properties (Derived Values)

```ts
class Rectangle {
  constructor(private _width: number, private _height: number) {}

  get area(): number {
    return this._width * this._height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
```

✔ Value is calculated dynamically
✔ No need to store `area` separately

---

## 5. Readonly via Getter Only

```ts
class Config {
  private _version = "1.0.0";

  get version(): string {
    return this._version;
  }
}

const config = new Config();
console.log(config.version);
// config.version = "2.0.0"; ❌ Error
```

✔ Useful for constants

---

## 6. Write-Only Property (Setter Only)

```ts
class PasswordManager {
  private _password!: string;

  set password(value: string) {
    if (value.length < 6) {
      throw new Error("Password too short");
    }
    this._password = value;
  }
}

const pm = new PasswordManager();
pm.password = "secure123";
```

✔ Common in security-related logic

---

## 7. Getter & Setter with Different Names

```ts
class Temperature {
  private _celsius = 0;

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value: number) {
    this._celsius = ((value - 32) * 5) / 9;
  }
}

const temp = new Temperature();
temp.fahrenheit = 98.6;
console.log(temp.fahrenheit);
```

✔ Internally stored in one format
✔ Exposed in another

---

## 8. Access Modifiers with Getter & Setter

```ts
class Employee {
  protected _salary: number = 0;

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error("Invalid salary");
    this._salary = value;
  }
}
```

* `private` → same class only
* `protected` → class + subclasses

---

## 9. Common Intermediate Mistakes ❌

❌ Heavy logic inside getters
❌ Forgetting validation in setters
❌ Mutating state inside getters
❌ Overusing getter/setter when not needed

---

## 10. When to Use Getter & Setter (Intermediate Rule)

Use when:

* Data needs validation
* Value is derived
* Access must be controlled

Avoid when:

* No rules are required
* Plain data containers

---

## 11. Intermediate Interview Questions

1. What is a computed property?
2. Can a setter throw errors?
3. Difference between readonly and getter-only?
4. Can getter and setter have different names?
5. Why should getters avoid side effects?
6. When would you use a write-only property?

---

## 12. Summary

* Intermediate getter/setter add **logic & safety**
* Used for validation, computed values, security
* Important for clean OOP design

---

✅ Ready for **real projects**
✅ **Interview-focused**
