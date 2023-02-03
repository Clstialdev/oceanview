import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { ThreeDeeCardWrapper, SheenEffect } from "./ThreeDeeCardWrapper";
import { useRef } from "react";
import { motion } from "framer-motion";
interface ProjectCardProps {
  project: { link: string; logo?: string; image: string };
}

const ProjectCard: NextPage<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      whileTap={{
        scale: 1.5,
        zIndex: 20,
        rotateY: 180,
        scaleX: -1,
        cursor: "grab",
      }}
      className="select-none hover:cursor-pointer "
    >
      <ThreeDeeCardWrapper childRef={cardRef}>
        <div
          className="relative h-[330px] w-[240px] overflow-hidden rounded"
          ref={cardRef}
        >
          <SheenEffect
            cardRef={cardRef}
            strength={0.2}
            rgbColor={"255,255,255"}
          />

          {/* Project Image */}
          <Image
            src={project.image}
            height={660} //this is for nextjs image optimization
            width={480} //this is for nextjs image optimization
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            alt=""
            unselectable="on"
            draggable="false"
          />

          {/* Project Logo */}
          {project.logo && (
            <div className="lef-0 absolute top-6 right-0 h-[20%] w-full select-none">
              <Image
                src={project.logo}
                height={1000} //this is for nextjs image optimization
                width={1500} //this is for nextjs image optimization
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
                alt=""
                unselectable="on"
                draggable="false"
              />
            </div>
          )}

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
    </motion.div>
  );
};

export default ProjectCard;
