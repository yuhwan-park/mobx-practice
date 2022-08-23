import { makeAutoObservable } from "mobx";

export interface Todo {
  title: string;
  completed: boolean;
}

class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  addTodo(title: string) {
    this.todos.push({
      title,
      completed: false,
    });
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }
}

const todoStore = new TodoStore();

export { todoStore, TodoStore };

