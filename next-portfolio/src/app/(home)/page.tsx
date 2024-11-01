import DescComp from "../../components/home/desc";
import PicComp from "../../components/home/pic";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-around h-[100vh]">
      <PicComp />
      <DescComp />
    </div>
  );
}

export default HomePage;
