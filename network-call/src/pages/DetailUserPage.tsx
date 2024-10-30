import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/user";
import axios from "../helpers/axios";

function DetailUserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState<IUser | null>(null);

  const getData = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-10 bg-[#352F44] w-80 h-80 rounded-xl mx-auto">
      <div className="bg-[#070F2B] text-white font-bold text-3xl w-24 h-24 text-center content-center rounded-full border-4 border-blue-600">
        <h1>{user?.username.charAt(0)}</h1>
      </div>
      <div className="flex flex-col items-center mt-5 font-bold text-xl">
        <h1>{user?.id}</h1>
        <h1>{user?.username}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.password}</h1>
      </div>
    </div>
  );
}

export default DetailUserPage;
