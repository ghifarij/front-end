import Image from "next/image";
import logo from "../../assets/logo.svg";

function PicComp() {
  return (
    <div className="rounded-full w-[40%]">
      <Image src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default PicComp;
