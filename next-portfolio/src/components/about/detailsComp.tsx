"use client";

import Image from "next/image";

function DetailsComp() {
  const githubOnClick = () => {
    window.open("https://github.com/ghifarij");
  };
  const linkedinOnClick = () => {
    window.open("https://www.linkedin.com/");
  };
  const instagramOnClick = () => {
    window.open("https://www.instagram.com/");
  };

  return (
    <div className="flex-1 text-white text-left content-center">
      <div className="font-bold text-3xl my-[20px] ml-[150px] text-yellow-500">
        Details
      </div>
      <div className="my-[10px] ml-[150px]">
        <span className="font-medium ">Name:</span>
        <br />
        Bruce Wayne
      </div>
      <div className="my-[10px] ml-[150px]">
        <span className="font-medium">Age:</span>
        <br />
        25 years
      </div>
      <div className="my-[10px] ml-[150px]">
        <span className="font-medium">Location:</span>
        <br />
        The bat cave
      </div>
      <div className="flex gap-[20px] justify-center my-[20px] text-white">
        <button onClick={githubOnClick}>
          <Image
            src={"/github.png"}
            alt="github"
            className="github"
            width={25}
            height={25}
          />
        </button>
        <button onClick={linkedinOnClick}>
          <Image
            src={"/linkedin.png"}
            alt="linkedin"
            className="linkedin"
            width={25}
            height={25}
          />
        </button>
        <button onClick={instagramOnClick}>
          <Image
            src={"/instagram.png"}
            alt="instagram"
            className="instagram "
            width={25}
            height={25}
          />
        </button>
      </div>
    </div>
  );
}

export default DetailsComp;
