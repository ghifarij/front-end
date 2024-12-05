import LoginComp from "@/components/login";

export default function LoginPage() {
  return (
    <div className="flex justify-center mx-auto p-4">
      <div>
        <h1 className="text-3xl text-center font-bold my-2">Login</h1>
        <LoginComp />
      </div>
    </div>
  );
}
