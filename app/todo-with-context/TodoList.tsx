"use client";

import { useTodoContext } from "./context/TodoContext";

const TodoList = () => {
  const { todos, deleteTodo, setEditingTodo } = useTodoContext();

  return (
    <ul>
      {todos?.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.task}
            <button onClick={(e) => deleteTodo(todo.id)}>X</button>
            <button onClick={(e) => setEditingTodo(todo)}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
