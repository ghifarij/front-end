"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const base_url = process.env.NEXT_BASE_URL_BE;

export default function VerifyPage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const onVerify = async () => {
    try {
      const res = await fetch(`${base_url}/auth/verify/${params.token}`, {
        method: "PATCH",
      });

      const result = await res.json();
      if (!res.ok) throw result;

      toast.success(result.message);
      router.push("/login");
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
      router.push("/");
    }
  };

  useEffect(() => {
    onVerify();
  }, []);

  return (
    <div className="flex justify-center my-5">
      <button
        onClick={onVerify}
        className="bg-blue-700 hover:bg-blue-800 p-4 rounded-xl text-white font-bold"
      >
        Verifikasi
      </button>
    </div>
  );
}
