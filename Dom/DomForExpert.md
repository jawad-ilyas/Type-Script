# TypeScript DOM Manipulation — Expert Guide

This guide covers **expert-level DOM manipulation** in TypeScript, focusing on **dynamic templates, virtual DOM patterns, performance optimization, and advanced event handling**.

---

## 1. Dynamic Templates

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, title: "Learn TS", completed: false },
  { id: 2, title: "Build Project", completed: true },
];

const listContainer = document.getElementById("todoList") as HTMLUListElement;

function renderTodos(todos: Todo[]) {
  listContainer.innerHTML = ""; // Clear existing
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.title;
    li.dataset.id = todo.id.toString();
    li.className = todo.completed ? "done" : "pending";
    listContainer.appendChild(li);
  });
}

renderTodos(todos);
```

* Efficiently renders a **list based on data**
* Uses **TypeScript typing for data**

---

## 2. Event Delegation with Dynamic Elements

```ts
listContainer.addEventListener("click", (event) => {
  const target = event.target as HTMLLIElement;
  if (target.tagName === "LI") {
    const id = Number(target.dataset.id);
    console.log(`Clicked todo ID: ${id}`);
  }
});
```

* Handles **events for elements added dynamically**
* Prevents multiple listeners for each item

---

## 3. Virtual DOM Concept (Simplified)

```ts
let virtualTodos: Todo[] = [...todos];

function updateTodo(id: number, completed: boolean) {
  virtualTodos = virtualTodos.map(todo => todo.id === id ? { ...todo, completed } : todo);
  renderTodos(virtualTodos);
}
```

* Updates **virtual state** before updating the real DOM
* Reduces **re-render overhead**

---

## 4. Performance Optimizations

* **Batch DOM updates** with `DocumentFragment`

```ts
const fragment = document.createDocumentFragment();
todos.forEach(todo => {
  const li = document.createElement("li");
  li.textContent = todo.title;
  fragment.appendChild(li);
});
listContainer.appendChild(fragment);
```

* Avoid **direct repeated DOM manipulations**
* Use **type safety for attributes and events**

---

## 5. Advanced Form Handling with Validation

```ts
const form = document.getElementById("expertForm") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = (document.getElementById("username") as HTMLInputElement).value;
  const age = Number((document.getElementById("age") as HTMLInputElement).value);

  if (!username || age <= 0) {
    alert("Invalid input");
    return;
  }

  console.log(`Username: ${username}, Age: ${age}`);
});
```

* Performs **type-safe validation and error handling**

---

## 6. Expert Interview Questions

1. How do you handle dynamic lists in TypeScript safely?
2. Explain the advantages of virtual DOM concepts.
3. How can `DocumentFragment` improve DOM manipulation performance?
4. How do you ensure type safety when manipulating dynamic elements?
5. Explain event delegation and why it’s crucial in large DOM structures.
6. How do you handle advanced form validation with TypeScript?
7. How do you combine state and DOM rendering for performance?

---

## Summary

* Expert DOM manipulation combines **dynamic templates, state management, and performance optimization**
* Focus on **virtual DOM, event delegation, and batch updates**
* Use **TypeScript types everywhere** to prevent runtime errors
* Prepares you for **complex frontend applications and frameworks** like Angular, React, or Vue with TypeScript
