# TypeScript Arrays – Expert Guide

This guide covers **expert-level array handling in TypeScript**, focusing on **advanced patterns, type safety, performance, and complex scenarios**.

---

## 1. Generic Arrays

```ts
function createArray<T>(items: T[]): T[] {
  return [...items];
}

const numbers = createArray<number>([1, 2, 3]);
const strings = createArray<string>(["a", "b"]);
```

* Generics allow **reusable, type-safe array functions**

---

## 2. Readonly and Immutable Arrays

```ts
const readonlyNumbers: readonly number[] = [1, 2, 3];

function addNumber(arr: readonly number[], num: number): number[] {
  return [...arr, num]; // returns a new array
}

const newNumbers = addNumber(readonlyNumbers, 4);
console.log(newNumbers); // [1, 2, 3, 4]
```

* Immutable patterns prevent **side effects** in large applications

---

## 3. Nested and Multi-dimensional Arrays

```ts
type Matrix<T> = T[][];
const matrix: Matrix<number> = [
  [1, 2],
  [3, 4],
];

function sumMatrix(mat: Matrix<number>): number {
  return mat.flat().reduce((acc, val) => acc + val, 0);
}

console.log(sumMatrix(matrix)); // 10
```

* Use type aliases and **generics** for clarity and scalability

---

## 4. Advanced Array Methods

### a. `flatMap`

```ts
const arr = [[1, 2], [3, 4]];
const flattened = arr.flatMap(x => x.map(n => n * 2));
console.log(flattened); // [2, 4, 6, 8]
```

### b. `find` & `findIndex`

```ts
const users = [{id:1, name:"a"}, {id:2, name:"b"}];
const user = users.find(u => u.id === 2);
console.log(user?.name); // b
```

### c. `some` & `every`

```ts
const ages = [18, 20, 22];
console.log(ages.every(a => a >= 18)); // true
console.log(ages.some(a => a > 21)); // true
```

---

## 5. Tuples with Rest Elements (Expert)

```ts
type FlexibleTuple = [string, ...number[]];
const data: FlexibleTuple = ["start", 1, 2, 3];
```

* Tuples can now hold **fixed + variable elements**

---

## 6. Performance Considerations

* Prefer **`for` loops** or `for-of` for huge arrays over `map` or `filter` when memory is critical
* Avoid excessive copying of large arrays
* Use **`readonly` arrays** to prevent unintended mutations

---

## 7. Array Utility Types

* `ReadonlyArray<T>`
* `Array<T>`
* `Partial<T>[]` (array of optional object types)
* `Pick<T, K>[]` (selective array of object properties)

```ts
type User = {id:number, name:string, age:number};
const users: Partial<User>[] = [{id:1}, {name:"a"}];
```

---

## 8. Expert Interview Questions

1. How do generics help in array functions?
2. Difference between readonly and mutable arrays?
3. How would you handle large nested arrays efficiently?
4. Explain tuple rest elements and use cases.
5. How does TypeScript ensure type safety in advanced array methods?
6. Difference between `flat` and `flatMap`?
7. How to type arrays of objects with optional or partial properties?
8. How would you prevent runtime mutation bugs in arrays?

---

## Summary

Expert-level arrays include:

* Generic and reusable array functions
* Readonly and immutable patterns
* Nested & multi-dimensional arrays
* Advanced array methods (`flatMap`, `find`, `some`, `every`)
* Tuple with rest elements
* Array utility types for objects
* Performance optimization & best practices

These concepts prepare you for **senior frontend interviews and large-scale TypeScript applications**.
