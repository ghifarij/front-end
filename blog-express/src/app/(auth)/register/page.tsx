import RegisterComp from "@/components/register";

export default function RegisterPage() {
  return (
    <div className="flex justify-center mx-auto p-4">
      <div>
        <h1 className="text-3xl text-center font-bold my-2">Register Form</h1>
        <RegisterComp />
      </div>
    </div>
  );
}
