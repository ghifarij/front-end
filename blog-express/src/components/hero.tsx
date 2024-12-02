import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex relative w-full h-64 overflow-hidden mb-10 justify-center items-center">
      <Image
        src={"/hero.png"}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <h1 className="text-white absolute text-5xl font-extrabold opacity-80">
        Take a short breaks to read our blogs
      </h1>
    </div>
  );
}
