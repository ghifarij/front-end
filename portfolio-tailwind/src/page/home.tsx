import DescComp from "../components/home/desc";
import PicComp from "../components/home/pic";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-around md:h-[100vh] mt-3">
      <PicComp />
      <DescComp />
    </div>
  );
}

export default HomePage;
