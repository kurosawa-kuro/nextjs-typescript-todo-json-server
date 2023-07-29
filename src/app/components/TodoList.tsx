// src\app\components\Todo.tsx

import { Todo as TodoInterface } from "@/interfaces/todos";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoInterface[];
}

export default function ToDoList({ todos }: TodoListProps) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
