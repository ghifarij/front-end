import { Metadata } from "next";
import AboutComp from "../../../components/about/aboutComp";
import DetailsComp from "../../../components/about/detailsComp";
import ProfileComp from "../../../components/about/profileComp";

export const metadata: Metadata = {
  title: "About Section",
  description: "About me",
};

function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:h-[100vh]">
      <AboutComp />
      <ProfileComp />
      <DetailsComp />
    </div>
  );
}

export default AboutPage;
