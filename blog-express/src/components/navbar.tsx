"use client";

import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
import Avatar from "./avatar";

export default function Navbar() {
  return (
    <div className="h-20 sticky top-0 bg-[#CEE8FA] content-center z-50">
      <Wrapper>
        <Link href={"/"} className="flex items-center gap-2">
          <Image width={32} height={32} src={"/logo.svg"} alt={"logo"} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#2D527C]">
            Blogger
          </span>
        </Link>
        <Avatar />
      </Wrapper>
    </div>
  );
}
