"use client";

import action from "@/app/action";
import { TiDeleteOutline } from "react-icons/ti";

export default function DeleteButton({ id }: { id: number }) {
  const onDelete = async () => {
    await fetch(`http://localhost:8000/api/users/${id}`, {
      method: "DELETE",
    });
    action("users");
  };
  return (
    <td className="border">
      <TiDeleteOutline
        className="mx-auto text-red-500 text-2xl font-bold hover:text-red-800"
        onClick={onDelete}
      />
    </td>
  );
}
