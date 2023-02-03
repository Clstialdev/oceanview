import { type NextPage } from "next";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

const FLAGSHIP_PROJECTS = [
  { link: "", logo: "/projects/domi/logo.png", image: "/projects/domi/bg.png" },
  {
    link: "",
    logo: "/projects/runescape/logo.png",
    image: "/projects/runescape/bg.png",
  },
];

const CONTRACT_AND_EMPLOYMENT = [
  { link: "", logo: "/projects/domi/logo.png", image: "/projects/domi/bg.png" },
  {
    link: "",
    logo: "/projects/runescape/logo.png",
    image: "/projects/runescape/bg.png",
  },
];

const Projects: NextPage = () => {
  return (
    <div className="w-full bg-[#07041A] py-12 px-[10%]">
      {/* Section Heading */}
      <SectionHeading title="Flagship projects" uppercased />

      {/* Flagship Projects */}
      <div className="mt-12 mb-24 flex w-full flex-wrap gap-5">
        {FLAGSHIP_PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Section Heading */}
      <SectionHeading title="Contract and Employment" uppercased />

      {/* Contract and employment */}
      <div className="mt-12 mb-24 flex w-full flex-wrap gap-5">
        {CONTRACT_AND_EMPLOYMENT.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
