import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-16 flex justify-center items-center gap-5 bg-teal-500">
      {" "}
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/user"}>User</Link>
      </div>
      <div>
        <Link href={"/user/register"}>Register</Link>
      </div>
    </div>
  );
}
