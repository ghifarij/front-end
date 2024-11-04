import { IUser } from "@/types/user";
import { Metadata } from "next";

async function getData(): Promise<IUser[]> {
  const res = await fetch("http://localhost:2000/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Next User",
  description: "Data user",
};

export default async function UserPageServer() {
  const data = await getData();
  return (
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
          {data.map((item, idx) => {
            return (
              <tr
                key={idx}
                className="border hover:cursor-pointer hover:bg-gray-100 hover:opacity-80 hover:font-medium"
              >
                <td className="border p-2 min-w-[20px]">{idx + 1}</td>
                <td className="border p-2 min-w-[200px]">{item.username}</td>
                <td className="border p-2 min-w-[200px]">{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}