import { FaApple, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { RegisterModal } from "./register";
import { LoginModal } from "./login";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row mt-16">
      <div className="flex-1">
        <FaXTwitter className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto" />
      </div>
      <div className="flex-1 px-10 md:px-0">
        <h1 className="text-5xl md:text-7xl font-bold mb-5 md:mb-10">
          Happening now
        </h1>
        <div className="max-w-80">
          <h2 className="text-2xl md:text-3xl font-semibold my-5 md:my-10">
            Join today.
          </h2>
          <div className="flex justify-center w-full bg-white text-black rounded-3xl hover:opacity-90 p-2 my-2 font-semibold items-center">
            <FcGoogle className="mr-1 text-xl" />
            <button onClick={() => navigate("/")}>Sign up with Google</button>
          </div>
          <div className="flex justify-center w-full bg-white text-black rounded-3xl hover:opacity-90 p-2 my-2 font-semibold items-center">
            <FaApple className="mr-1 text-xl" />
            <button onClick={() => navigate("/")}>Sign up with Apple</button>
          </div>
          <h2 className="w-full text-center border-b border-gray-500 leading-[0.1em] my-[10px] ">
            <span className="bg-[rgb(0,0,0)] py-0 px-1">or</span>
          </h2>
          <RegisterModal />
          <p className="text-gray-600 text-xs">
            By signing up, you agree to the{" "}
            <span className="text-blue-600">Terms of Service</span> and{" "}
            <span className="text-blue-600">Privacy Policy</span> including{" "}
            <span className="text-blue-600">Cookie Use</span>
          </p>
          <div className="flex flex-col mt-10">
            <h2 className="mb-3 text-xl font-bold">Already have an account?</h2>
            <LoginModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
