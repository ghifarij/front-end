"use client";

import { useSession } from "@/context/useSession";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { user } = useSession();
  return (
    <div className="flex relative w-full h-64 overflow-hidden mb-10 justify-center items-center">
      <Image
        src={"/hero.png"}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <h1 className="text-white absolute text-5xl font-extrabold opacity-80">
        Take a short breaks to read our blogs
      </h1>
      {user?.role == "Admin" && (
        <Link href={"/blog/create"}>
          <div className="absolute bottom-6 right-6 font-bold text-sm md:text-xl bg-[#2D527C] p-1 text-white rounded">
            + Create Blog
          </div>
        </Link>
      )}
    </div>
  );
}
