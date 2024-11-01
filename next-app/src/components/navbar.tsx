import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-16 bg-[#D6E6F2] gap-5 font-semibold">
      <Link href={"/"} className="hover:underline hover:opacity-80">
        Home
      </Link>
      <Link href={"/about"} className="hover:underline hover:opacity-80">
        About
      </Link>
      <Link href={"/user"} className="hover:underline hover:opacity-80">
        User
      </Link>
    </div>
  );
}
