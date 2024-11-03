import { useState } from "react";

function DescComp() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="text-white content-start w-[50%]">
      <div className="">Hello, 👋 I am</div>
      <div className="border-solid border-1 rounded bg-white text-black font-bold my-[10px] text-center w-[100px] font-mono text-xl">
        BATMAN!
      </div>
      <div>
        Professional{" "}
        <span className="text-yellow-500 font-bold">Web Developer</span>
      </div>
      <div className="py-[20px]">
        I am an enthusiastic and ambitious developer with experience in both
        back-end and front-end technologies. Proficient in{" "}
        <span className="font-bold">Next.js</span> and{" "}
        <span className="font-bold">Tailwind CSS</span> for crafting responsive
        and user-friendly interfaces, I am also experienced in building robust
        server-side applications using{" "}
        <span className="font-bold">Node.js</span> and{" "}
        <span className="font-bold">Express.js</span>. My experience includes
        developing <span className="font-bold">Go</span> applications that have
        taken my programming skills and different paradigms to the next level.
        <br />
        {isExpanded && (
          <div>
            <br />I have hands-on experience with{" "}
            <span className="font-bold">PostgreSQL</span> and{" "}
            <span className="font-bold">MongoDB</span>, which allows me to
            manage and optimize the databases efficiently. Added to that, I hold
            an{" "}
            <span className="font-bold">AWS Certified Cloud Practitioner</span>{" "}
            certificate that enables me to use cloud technologies for developing
            scalable and efficient applications.
          </div>
        )}
        <span
          className="underline hover:cursor-pointer hover:opacity-80"
          onClick={toggleText}
        >
          {isExpanded ? "READ LESS" : "READ MORE"}
        </span>
      </div>
    </div>
  );
}
export default DescComp;
