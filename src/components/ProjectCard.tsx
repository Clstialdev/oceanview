import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { ThreeDeeCardWrapper, SheenEffect } from "./ThreeDeeCardWrapper";
import { useRef } from "react";
interface ProjectCardProps {
  project: { link: string; logo: string; image: string };
}

const ProjectCard: NextPage<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <ThreeDeeCardWrapper childRef={cardRef}>
      <div
        className="relative h-[330px] w-[240px] overflow-hidden rounded"
        ref={cardRef}
      >
        <SheenEffect cardRef={cardRef} />

        {/* Project Image */}
        <Image
          src={project.image}
          height={660} //this is for nextjs image optimization
          width={480} //this is for nextjs image optimization
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          alt=""
        />

        {/* Project Logo */}
        <div className="lef-0 absolute top-6 right-0 h-[20%] w-full">
          <Image
            src={project.logo}
            height={1000} //this is for nextjs image optimization
            width={1500} //this is for nextjs image optimization
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            alt=""
          />
        </div>

        {/* Details Button */}
        <div className="absolute bottom-0 flex w-full justify-center ">
          <Link
            href={project.link}
            className="font-oregon-demibold mb-4 rounded border-[1px] border-white border-opacity-50 bg-black bg-opacity-30 px-2 py-[10px] text-xs uppercase tracking-widest text-white duration-300 hover:border-opacity-100"
          >
            Explore
          </Link>
        </div>
      </div>
    </ThreeDeeCardWrapper>
  );
};

export default ProjectCard;
