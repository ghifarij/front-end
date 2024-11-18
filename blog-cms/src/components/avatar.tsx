import supabase from "@/services/supabase";
import Image from "next/image";
import { IoLogOutOutline } from "react-icons/io5";

interface IProps {
  picture: string;
  full_name: string;
  email: string;
}

export default function Avatar({ picture, full_name, email }: IProps) {
  const onLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <div className="flex justify-between m-3">
      <div className="flex">
        <Image
          width={40}
          height={40}
          src={picture}
          alt={full_name}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col ml-1 text-sm">
          <div>{full_name}</div>
          <div className="text-gray-600">{email}</div>
        </div>
      </div>
      <IoLogOutOutline
        onClick={onLogout}
        className="text-2xl font-bold m-2 hover:cursor-pointer"
      />
    </div>
  );
}
