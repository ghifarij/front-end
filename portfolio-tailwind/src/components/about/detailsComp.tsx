import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

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
    <div className="flex-1 text-white text-center mt-16">
      <div className="font-bold text-3xl mb-6 md:ml-20 text-yellow-500">
        DETAILS
      </div>
      <div className="my-[10px] md:ml-20">
        <span className="font-medium ">Name:</span>
        <br />
        Bruce Wayne
      </div>
      <div className="my-[10px] md:ml-20">
        <span className="font-medium">Age:</span>
        <br />
        25 years
      </div>
      <div className="my-[10px] md:ml-20">
        <span className="font-medium">Location:</span>
        <br />
        The bat cave
      </div>
      <div className="flex gap-[20px] justify-center my-[20px] md:ml-20">
        <button onClick={githubOnClick}>
          <img
            src={github}
            alt="github"
            className="github w-[25px] h-[25px] "
          />
        </button>
        <button onClick={linkedinOnClick}>
          <img
            src={linkedin}
            alt="linkedin"
            className="linkedin w-[25px] h-[25px] "
          />
        </button>
        <button onClick={instagramOnClick}>
          <img
            src={instagram}
            alt="instagram"
            className="instagram w-[25px] h-[25px] "
          />
        </button>
      </div>
    </div>
  );
}

export default DetailsComp;
