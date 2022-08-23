import { makeAutoObservable } from "mobx";

export interface Todo {
  id: number;
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
      id: +Math.random().toFixed(6),
      title,
      completed: false,
    });
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

const todoStore = new TodoStore();

export { todoStore, TodoStore };

