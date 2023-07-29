import { Todo } from "@/interfaces/todos";

const baseUrl = "http://localhost:3001";

export const readTodosApi = async (): Promise<Todo[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await res.json();

  return todos;
};

export const createTodoApi = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const updateTodoApi = async (
  id: string,
  newText: string
): Promise<Todo> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo = await res.json();

  return updatedTodo;
};

export const deleteTodoApi = async (id: string): Promise<Todo> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodoApi = await res.json();
  return deleteTodoApi;
};
