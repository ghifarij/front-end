import DescComp from "../components/home/desc";
import PicComp from "../components/home/pic";

function HomePage() {
  return (
    <div className="flex justify-around bg-[#1E201E] h-[100vh]">
      <PicComp />
      <DescComp />
    </div>
  );
}

export default HomePage;
