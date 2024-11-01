import Image from "next/image";
import logo from "../../assets/logo.svg";

function ProfileComp() {
  return (
    <div className="flex-1 text-white">
      <div className="text-center mt-[50px] font-bold text-5xl text-yellow-500">
        PROFILE
      </div>
      <div className="mt-[10px] text-center text-2xl font-medium">
        I am a professional developer
      </div>
      <div className="w-[50%] mx-auto mt-[75px]">
        <Image src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
}

export default ProfileComp;
