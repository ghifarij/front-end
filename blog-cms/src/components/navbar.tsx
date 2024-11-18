"use client";

import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
import ButtonSignIn from "./buttonSignIn";
import { useEffect, useState } from "react";
import supabase from "@/services/supabase";
import { User } from "@supabase/supabase-js";
import Avatar from "./avatar";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <div className="h-20 sticky top-0 bg-[#CEE8FA] content-center z-50">
      <Wrapper>
        <Link href={"/"} className="flex items-center gap-2">
          <Image width={32} height={32} src={"/logo.svg"} alt={"logo"} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#2D527C]">
            Blogger
          </span>
        </Link>
        {user ? (
          <Avatar
            picture={user.user_metadata.picture}
            full_name={user.user_metadata.full_name}
            email={user.user_metadata.email}
          />
        ) : (
          <ButtonSignIn />
        )}
      </Wrapper>
    </div>
  );
}
