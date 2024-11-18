"use client";

import { signInWithGoogle } from "@/libs/auth";
import { FcGoogle } from "react-icons/fc";

export default function ButtonSignIn() {
  return (
    <button
      onClick={signInWithGoogle}
      className="flex justify-center w-24 bg-white text-gray-700 rounded-3xl hover:bg-gray-100 p-2 font-semibold items-center"
    >
      <FcGoogle className="mr-1 text-lg" />
      <span className="text-sm">Sign-in</span>
    </button>
  );
}
