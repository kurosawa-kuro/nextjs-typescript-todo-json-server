// src\app\components\Todo.tsx

"use client";

import { Todo } from "@/interfaces/todos";
import { useEffect, useRef, useState } from "react";
import { deleteTodoApi, updateTodoApi } from "../services/api";
import { useRouter } from "next/navigation";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
interface TodoProps {
  todo: Todo;
}

export default function Todo({ todo }: TodoProps) {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(todo.text);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = async () => {
    await updateTodoApi(todo.id, editedTaskText);
    setIsEditing(false);
    router.refresh();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTaskText(event.target.value);
  };

  const handleDelete = async () => {
    await deleteTodoApi(todo.id);
    router.refresh();
  };

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-custom-blue-lightest border-l-4 border-custom-blue DEFAULT rounded shadow"
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={editedTaskText}
          onChange={handleInputChange}
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
        />
      ) : (
        <span className="text-gray-700">{todo.text}</span>
      )}
      <div className="flex">
        {isEditing ? (
          <FaPlus
            onClick={handleSaveButtonClick}
            className="h-5 w-5 text-blue-500 hover:text-blue-700 cursor-pointer mr-3"
          />
        ) : (
          <>
            <FaEdit
              onClick={handleEditButtonClick}
              className="h-5 w-5 text-custom-green-light hover:text-custom-green-dark cursor-pointer mr-3"
            />
          </>
        )}
        <FaTrash
          onClick={handleDelete}
          className="h-5 w-5 text-custom-red-light hover:text-custom-red-dark cursor-pointer"
        />
      </div>
    </li>
  );
}
