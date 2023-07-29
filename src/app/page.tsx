// src\app\page.tsx

import { readTodosApi } from "./services/api";
import CreateTodo from "./components/CreateTodo";
import ToDoList from "./components/TodoList";

export default async function Home() {
  const todos = await readTodosApi();
  console.log(todos);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-custom-blue-lightest">
      <h1 className="text-4xl font-bold text-custom-blue-darker -mt-32">
        Next 13 ToDo App with Json Server
      </h1>
      <div className="w-full max-w-xl items-center justify-center mt-5">
        <div className="w-full px-8 py-6 bg-custom-blue-light shadow-md rounded-lg">
          <CreateTodo />
          <ToDoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
