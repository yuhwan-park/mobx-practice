import { TodoStore } from "./TodoStore";

class RootStore {
  todoStore;

  constructor() {
    this.todoStore = new TodoStore();
  }
}

export default RootStore;
