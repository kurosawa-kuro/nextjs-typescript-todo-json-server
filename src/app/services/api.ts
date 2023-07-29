import { Todo } from "@/interfaces/todos";

const baseUrl = "http://localhost:3001";

const requestOptions = (method: string, body?: object) => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: body ? JSON.stringify(body) : null,
});

export const readTodosApi = async (): Promise<Todo[]> => {
  // SSR
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  return await res.json();
};

export const createTodoApi = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${baseUrl}/tasks`, requestOptions("POST", todo));
  return await res.json();
};

export const updateTodoApi = async (
  id: string,
  newText: string
): Promise<Todo> => {
  const res = await fetch(
    `${baseUrl}/tasks/${id}`,
    requestOptions("PUT", { text: newText })
  );
  return await res.json();
};

export const deleteTodoApi = async (id: string): Promise<Todo> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`, requestOptions("DELETE"));
  return await res.json();
};
