"use client";

import { useState } from "react";
import { cursorTo } from "readline";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export type Todo = {
  id: number;
  task: string;
  isComplated: boolean;
};

const initialTodos: Todo[] = [
  {
    id: 1,
    task: "Task 1",
    isComplated: false,
  },
  {
    id: 2,
    task: "Task 2",
    isComplated: true,
  },
  {
    id: 3,
    task: "Task 3",
    isComplated: false,
  },
];

const TodoAppPage = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [editingTodo, setEditingTodo] = useState<null | Todo>(null);

  const addTodo = (newTodo: Todo) =>
    setTodos((curTodos) => [...curTodos, newTodo]);
  const deleteTodo = (todoId: number) =>
    setTodos(todos.filter((todo) => todo.id != todoId));
  const editTodo = (editedTodo: Todo) =>
    setTodos(
      todos.map((todo) =>
        todo.id != editedTodo.id ? todo : { ...todo, ...editedTodo }
      )
    );

  console.log(editingTodo);

  return (
    <div>
      <h1>Todo app TodoAppPage</h1>
      <TodoForm
        editingTodo={editingTodo}
        setEditingTodo={setEditingTodo}
        editTodo={editTodo}
        addTodo={addTodo}
      />
      <TodoList
        setEditingTodo={setEditingTodo}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </div>
  );
};

export default TodoAppPage;
