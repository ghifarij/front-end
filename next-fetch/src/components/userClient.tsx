"use client";

import { IUser } from "@/types/user";
import { useEffect, useState } from "react";

export default function UserPageClient() {
  const [user, setUser] = useState<IUser[]>([]);
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/users");
      const data = await res.json();
      setUser(data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-center my-10">
        <table className="border-2">
          <thead className="border hover:cursor-pointer hover:opacity-80 hover:font-medium">
            <tr className="bg-gray-300">
              <th className="border p-2 min-w-[20px]">No</th>
              <th className="border p-2 min-w-[200px]">Username</th>
              <th className="border p-2 min-w-[200px]">Email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, idx) => {
              return (
                <tr
                  key={idx}
                  className="border hover:cursor-pointer hover:bg-gray-100 hover:opacity-80 hover:font-medium"
                >
                  <td className="border p-2 min-w-[20px]">{idx + 1}</td>
                  <td className="border p-2 min-w-[200px]">{item.name}</td>
                  <td className="border p-2 min-w-[200px]">{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
