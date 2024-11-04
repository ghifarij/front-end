import Image from "next/image";

function PicComp() {
  return (
    <div className="rounded-full w-[40%]">
      <Image
        src={"/logo.svg"}
        alt="logo"
        className="logo"
        width={500}
        height={500}
      />
    </div>
  );
}

export default PicComp;
