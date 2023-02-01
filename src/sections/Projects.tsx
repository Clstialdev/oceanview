import { type NextPage } from "next";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

const FLAGSHIP_PROJECTS = [
  { link: "", logo: "", image: "" },
  { link: "", logo: "", image: "" },
];

const CONTRACT_AND_EMPLOYMENT = [
  { link: "", logo: "", image: "" },
  { link: "", logo: "", image: "" },
];

const Projects: NextPage = () => {
  return (
    <div className="w-full py-12 px-[10%]">
      {/* Section Heading */}
      <SectionHeading title="Flagship projects" uppercased />

      {/* Flagship Projects */}
      <div className="flex w-full">
        {FLAGSHIP_PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Section Heading */}
      <SectionHeading title="Contract and Employment" uppercased />

      {/* Contract and employment */}
      <div className="flex w-full">
        {CONTRACT_AND_EMPLOYMENT.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
