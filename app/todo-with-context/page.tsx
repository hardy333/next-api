import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoContextProvider from "./context/TodoContext";

const TodoWithContext = () => {
  return (
    <div>
      <TodoContextProvider>
        <h1>Todo With context api</h1>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
};

export default TodoWithContext;
