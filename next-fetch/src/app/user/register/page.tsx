import FormRegister from "@/components/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Register",
  description: "Page for register user",
};

export default function PageRegister() {
  return (
    <div>
      <FormRegister />
    </div>
  );
}
