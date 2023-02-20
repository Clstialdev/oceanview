import { type NextPage } from "next";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

const FLAGSHIP_PROJECTS = [
  {
    link: "/projects/domi",
    logo: "/projects/domi/logo.png",
    image: "/projects/domi/bg.png",
    name: "Domi Online",
  },
  {
    link: "/projects/runescape",
    logo: "/projects/runescape/logo.png",
    image: "/projects/runescape/bg.png",
    name: "RuneScape"
  },
];

const CONTRACT_AND_EMPLOYMENT = [
  { link: "/projects/pocketfactory", image: "/projects/pocketfactory/bg.webp", name: "Pocket Factory" },
  { link: "/projects/novablast", image: "/projects/novablast/bg.webp", name: "Nova Blast" },
  { link: "/projects/nub", image: "/projects/nub/bg.webp", name: "Nub" },
  {
    link: "/projects/stoneyvocabbuilder",
    image: "/projects/stoneyvocabbuilder/bg.webp",
    name: "Vocab Builder"
  },
  { link: "/projects/wordfunworld", image: "/projects/wordfunworld/bg.webp",name: "Word Fun World" },
  { link: "/projects/navigo", image: "/projects/navigo/bg.webp",name: "Navigo" }
];

const SELF_PUBLISHED = [
  { link: "/projects/timerunner", image: "/projects/timerunner/bg.webp", name: "Time Runner" },
  { link: "/projects/empiresrise", image: "/projects/empiresrise/bg.webp", name: "Empires Rise" },
  { link: "/projects/whatsthat", image: "/projects/whatsthat/bg.webp",name: "Whats That" },
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
      <div className="mt-12 mb-24 flex w-full flex-wrap justify-center gap-5 sm:justify-start">
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
      <div className="mt-12 mb-24 flex w-full flex-wrap justify-center gap-5 sm:justify-start">
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
      <div className="mt-12 mb-24 flex w-full flex-wrap justify-center gap-5 sm:justify-start">
        {SELF_PUBLISHED.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
