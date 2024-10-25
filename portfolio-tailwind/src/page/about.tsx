import AboutComp from "../components/about/aboutComp";
import DetailsComp from "../components/about/detailsComp";
import ProfileComp from "../components/about/profileComp";

function AboutPage() {
  return (
    <div className="flex flex-wrap bg-[#1E201E] h-[100vh]">
      <AboutComp />
      <ProfileComp />
      <DetailsComp />
    </div>
  );
}

export default AboutPage;
