import AboutComp from "../components/about/aboutComp";
import DetailsComp from "../components/about/detailsComp";
import ProfileComp from "../components/about/profileComp";

function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:h-[100vh]">
      <ProfileComp />
      <DetailsComp />
      <AboutComp />
    </div>
  );
}

export default AboutPage;
