import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStore } from "./context";

const App = observer(() => {
  const { todoStore } = useStore();
  const [title, setTitle] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoStore.addTodo(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
      </form>
      <p>완료된 할일 : {todoStore.completedTodosCount}개</p>
      <div>
        {todoStore.todos.map((todo) => (
          <div key={todo.title} style={{ display: "flex" }}>
            <input
              type="checkbox"
              onChange={() => todoStore.toggleTodo(todo)}
              checked={todo.completed}
            />
            <p>{todo.title}</p>
            <button onClick={() => todoStore.deleteTodo(todo.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default App;

