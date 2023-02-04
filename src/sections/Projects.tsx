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
  { link: "", image: "/projects/pocketfactory/bg.webp" },
  { link: "", image: "/projects/novablast/bg.webp" },
  { link: "", image: "/projects/nub/bg.webp" },
  { link: "", image: "/projects/stoneyvocabbuilder/bg.webp" },
  { link: "", image: "/projects/wordfunworld/bg.webp" },
  { link: "", image: "/projects/navigo/bg.webp" },
  {
    link: "",
    logo: "/projects/runescape/logo.png",
    image: "/projects/runescape/bg.png",
  },
  { link: "", logo: "/projects/domi/logo.png", image: "/projects/domi/bg.png" },
];

const SELF_PUBLISHED = [
  { link: "", image: "/projects/timerunner/bg.webp" },
  { link: "", image: "/projects/empiresrise/bg.webp" },
  { link: "", image: "/projects/whatsthat/bg.webp" },
];

const Projects: NextPage = () => {
  return (
    <div className="w-full bg-[#07041A] py-12 px-[10%]" id="projects">
      {/* Section Heading */}
      <SectionHeading
        title="Flagship projects"
        uppercased
        secondaryColor="#7B5182"
      />

      {/* Flagship Projects */}
      <div className="mt-12 mb-24 flex w-full flex-wrap gap-5">
        {FLAGSHIP_PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Section Heading */}
      <SectionHeading
        title="Contract and Employment"
        uppercased
        secondaryColor="#7B5182"
      />

      {/* Contract and employment */}
      <div className="mt-12 mb-24 flex w-full flex-wrap gap-5">
        {CONTRACT_AND_EMPLOYMENT.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Section Heading */}
      <SectionHeading
        title="Self Published"
        uppercased
        secondaryColor="#7B5182"
      />

      {/* Contract and employment */}
      <div className="mt-12 mb-24 flex w-full flex-wrap gap-5">
        {SELF_PUBLISHED.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
