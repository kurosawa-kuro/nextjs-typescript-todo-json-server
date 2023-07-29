// src\app\components\CreateTodo.tsx

"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { createTodoApi } from "../services/api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function CreateTodo() {
  const router = useRouter();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createTodoApi({ id: uuidv4(), text: newTodo });
    setNewTodo("");

    router.refresh();
  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        value={newTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-custom-blue DEFAULT"
        type="text"
        placeholder="New task..."
      />
      <button className="w-full px-4 py-2 text-white bg-custom-blue DEFAULT rounded transform transition-transform duration-200 hover:bg-custom-blue-dark hover:scale-95">
        Add task
      </button>
    </form>
  );
}
