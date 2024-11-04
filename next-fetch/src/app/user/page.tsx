import UserPageClient from "@/components/userClient";
import UserPageServer from "@/components/userServer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next User",
  description: "Data user",
};

export default async function UserPage() {
  return (
    <div className="flex justify-evenly">
      <UserPageServer />
      <UserPageClient />
    </div>
  );
}
