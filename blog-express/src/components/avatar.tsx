import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { deleteCookie } from "@/libs/action";
import { IoLogOutOutline } from "react-icons/io5";
import { useSession } from "@/context/useSession";

export default function Avatar() {
  const router = useRouter();
  const { user, isAuth, setIsAuth } = useSession();
  const onLogout = () => {
    deleteCookie("token");
    setIsAuth(false);
    router.push("/login");
    router.refresh();
  };

  return (
    <>
      {isAuth ? (
        <div className="flex justify-between m-3 items-center">
          <Link href={"/profile"}>
            <div className="flex">
              <div className="w-10 h-10 relative overflow-hidden rounded-full">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={user?.avatar as string}
                  alt={user?.username as string}
                />
              </div>
              <div className="flex flex-col ml-1 text-sm">
                <div>{user?.username}</div>
                <div className="text-gray-600">{user?.email}</div>
              </div>
            </div>
          </Link>
          <IoLogOutOutline
            onClick={onLogout}
            className="text-3xl text-red-700 ml-3 hover:cursor-pointer"
          />
        </div>
      ) : (
        <div className="flex gap-3">
          <Link
            href={"/register"}
            className="bg-[#2D527C] text-white p-2 rounded-2xl hover:text-[#CEE8FA]"
          >
            Register
          </Link>
          <Link
            href={"/login"}
            className="bg-[#2D527C] text-white p-2 rounded-2xl hover:text-[#CEE8FA]"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}
