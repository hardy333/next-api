"use client";
import React, {
  Children,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

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

type TodoContextProps = {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (todoId: number) => void;
  editTodo: (editedTodo: Todo) => void;
  editingTodo: Todo | null;
  setEditingTodo: Dispatch<SetStateAction<Todo | null>>;
};

const TodoContext = createContext<TodoContextProps>({
  todos: initialTodos,
  addTodo: () => {},
  deleteTodo: () => {},
  editingTodo: { id: 1, task: "ss", isComplated: false },
  setEditingTodo: () => {},
  editTodo: () => {},
});

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
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

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editingTodo,
        setEditingTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

export const useTodoContext = () => useContext(TodoContext);
