"use client";

import supabase from "@/services/supabase";
import { useEffect } from "react";

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  if (error) {
    console.log("Error during Google sign-in", error.message);
  }
};
