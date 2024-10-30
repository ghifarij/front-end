import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUser } from "../types/user";
import { TiUserDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await axios.get("/users");

      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (user: IUser) => {
    const confirmSubmit = confirm(
      `are you sure want to remove ${user.username}?`
    );
    if (confirmSubmit) {
      try {
        await axios.delete(`./users/${user.id}`);
        setReload(!reload);
        alert(`${user.username} successfully removed`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [reload]);

  return (
    <div className="flex justify-center my-10">
      <table className="border-2 bg-[#070F2B]">
        <thead className="bg-[#352F44]">
          <tr className="border">
            <th className="border p-2 min-w-[20px]">No</th>
            <th className="border p-2 min-w-[200px]">Username</th>
            <th className="border p-2 min-w-[200px]">Email</th>
            <th className="border p-2 min-w-[50px]">Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => {
            return (
              <tr
                key={idx}
                className="border hover:cursor-pointer hover:bg-[#5C5470] hover:opacity-80 hover:font-medium"
              >
                <td
                  className="border p-2 min-w-[20px]"
                  onClick={() => navigate(`${item.id}`)}
                >
                  {idx + 1}
                </td>
                <td
                  className="border p-2 min-w-[200px]"
                  onClick={() => navigate(`${item.id}`)}
                >
                  {item.username}
                </td>
                <td
                  className="border p-2 min-w-[200px]"
                  onClick={() => navigate(`${item.id}`)}
                >
                  {item.email}
                </td>
                <td className="border p-2">
                  <TiUserDeleteOutline
                    className="mx-auto text-red-500 cursor-pointer border border-red-500 rounded-full text-xl"
                    onClick={() => handleDelete(item)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
