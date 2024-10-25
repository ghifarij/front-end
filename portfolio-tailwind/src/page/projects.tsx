import ProjectDesc from "../components/projects/projectDesc";
import ProjectItem from "../components/projects/projectItem";

function ProjectsPage() {
  return (
    <div className="flex flex-col justify-around bg-[#1E201E] h-[100%]">
      <ProjectDesc />
      <ProjectItem />
    </div>
  );
}

export default ProjectsPage;
