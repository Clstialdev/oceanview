import { type NextPage } from "next";
import Link from "next/link";

interface ProjectCardProps {
  key: number;
  project: { link: string; logo: string; image: string };
}

const ProjectCard: NextPage<ProjectCardProps> = ({ key, project }) => {
  return (
    <div key={key} className="relative h-[330px] w-[240px]">
      {/* Project Image */}
      {/* <Image
                src={project.image}
                height={660} //this is for nextjs image optimization
                width={480} //this is for nextjs image optimization
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                alt="""
              /> */}

      {/* Project Logo */}
      <div className="lef-0 absolute top-0 right-0 h-[20%] w-full">
        {/* <Image
                src={project.logo}
                height={1000} //this is for nextjs image optimization
                width={1500} //this is for nextjs image optimization
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
                alt=""
              /> */}
      </div>

      {/* Details Button */}
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%]">
        <Link
          href={project.link}
          className="rounded border-[1px] border-white px-8 py-6 text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
