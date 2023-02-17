/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Contact from "../../sections/Contact";
import Image from "next/image";
import { useRouter } from "next/router";

import PROJECTS, { type ProjectData } from "../../data/Projects";
import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import SectionHeading from "../../components/SectionHeading";

const Project: NextPage = () => {
  const router = useRouter();
  const projectId = (router.query.project as string) ?? "";

  const ImageFolder = "/projects/" + projectId + "/";

  const ProjectData = (PROJECTS as any)[projectId] as ProjectData;

  useEffect(() => {
    const AvailableProjects = Object.keys(PROJECTS);
    if (
      !AvailableProjects.includes(projectId) &&
      projectId !== "" &&
      window !== undefined
    ) {
      window.location.href = "/404";
      console.log(ProjectData);
    }
  }, [projectId]);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0", "500px"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-100%", "300px"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["1", "3"]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["2px", "90px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], ["1", "0"]);
  const blurValue = useTransform(scrollYProgress, [0.2, 1], ["0", "7px"]);
  const darknessValue = useTransform(scrollYProgress, [0, 0.5], ["1", "0.6"]);
  const logoFilter = useMotionTemplate`blur(${blurValue}) brightness(${darknessValue})`;
  const bgFilter = useMotionTemplate`brightness(${darknessValue})`;

  return (
    <>
      <Head>
        <title>Ocean View Games </title>
        <meta name="description" content="Ocean View Games is a ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {projectId && ProjectData && (
        <main id="main" className="relative h-fit min-h-screen w-full">
          {/* Header */}
          <Header />

          {/* Hero */}
          <div className="relative max-h-[55vh] min-h-[500px] w-full overflow-hidden">
            <motion.div
              style={{ y, filter: bgFilter }}
              className="relative h-full w-full"
            >
              {/* BG IMG */}
              <Image
                src={ImageFolder + ProjectData.banner}
                height={3000} //this is for nextjs image optimization
                width={3000} //this is for nextjs image optimization
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  marginTop: "-1px",
                }}
                alt="Beautiful Scenery of a vintage room looking out into the ocean through open double doors"
                unoptimized //this is to keep the image clarity
              />
            </motion.div>

            <motion.div
              style={{
                translateY: y2,
                translateX: "-50%",
                scale,
                opacity,
                filter: logoFilter,
              }}
              className="absolute top-[45%] left-[50%] h-[20vh] w-full -translate-x-[50%] -translate-y-[50%] opacity-40"
            >
              {/* <Image
                src="/logo.png"
                height={3000} //this is for nextjs image optimization
                width={3000} //this is for nextjs image optimization
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
                alt=""
                unoptimized //this is to keep the image clarity
              /> */}
              <motion.h1
                className="font-alatsi mt-24 text-center text-6xl uppercase text-white drop-shadow-lg"
                style={{ letterSpacing }}
              >
                {ProjectData.name}
              </motion.h1>
            </motion.div>

            {/* Transition 'paper cut' Image */}
            {/* <div className="absolute -bottom-[4vw] left-0 right-0 w-full">
              <Image
                src="/Transition1Fixed2.png"
                height={3000} //this is for nextjs image optimization
                width={3000} //this is for nextjs image optimization
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
                alt="Transition Image"
                unoptimized //this is to keep the image clarity
              />
            </div> */}
          </div>

          {/* Description Section */}
          <div
            className="relative flex min-h-[580px] w-full px-[10%] pt-20"
            style={{
              background: `linear-gradient(180deg, ${
                ProjectData.bgFrom ?? "#271120"
              } 0%, ${ProjectData.bgTo ?? "#10040E"} 100%`,
              paddingBottom: ProjectData.thingsDone ? "96px" : "48px",
            }}
            id="about"
          >
            {/* Left */}
            <div className="relative h-full w-[60%]">
              {/* Section Heading */}
              <SectionHeading
                title={ProjectData.name}
                uppercased
                ornament=""
                description=""
              />

              {/* Description */}
              <p className="font-oregon-demibold max-w-[1200px] whitespace-pre-wrap text-xl text-beige">
                {ProjectData.description}
              </p>

              {ProjectData.thingsDone && (
                <div
                  className="mt-12 rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 py-2 px-4 text-white"
                  style={{
                    backgroundColor:
                      (ProjectData.bgTo as string) + "26" ?? "#10040E26",
                  }}
                >
                  <h2 className="text-xl font-bold text-beige">
                    Here is a list of some of the work we have done:
                  </h2>
                  <ul className="mt-2 list-disc pl-4 text-beige">
                    {ProjectData.thingsDone.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Section Divider */}
              <div className="mt-12 mb-6 h-[2px] w-1/2 bg-white bg-opacity-20"></div>

              {/* Branding */}
              <div className="flex items-center gap-4">
                <div className="relative h-[50px] w-[50px]">
                  <Image
                    src="/logobeige.webp"
                    height={40} //this is for nextjs image optimization
                    width={40} //this is for nextjs image optimization
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    alt="Logo"
                    unoptimized //this is to keep the image clarity
                  />
                </div>
                <h1 className="font-lg font-oregon-light mt-1 uppercase text-beige">
                  {ProjectData.source ?? "Ocean View Games"}
                </h1>
              </div>
            </div>

            {/* Right */}

            <div className="mt-[84px] flex w-[40%] flex-col items-center pl-[5%]">
              <p className="text-right text-beige text-opacity-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="flex space-x-4">
                {/* Apple store */}
                {ProjectData.appstoreLink !== undefined && (
                  <Link
                    href={ProjectData.appstoreLink}
                    className="relative mt-4 flex scale-[0.8] items-center gap-4 rounded border-[1px] border-white border-opacity-20 bg-black bg-opacity-25 p-2  text-2xl text-white backdrop-blur-xl"
                  >
                    <div className="relative h-[60px] w-[60px] overflow-hidden p-2">
                      <Image
                        src={"/projects/applelogo.png"}
                        height={660} //this is for nextjs image optimization
                        width={480} //this is for nextjs image optimization
                        style={{
                          objectFit: "contain",
                          height: "100%",
                          width: "100%",
                        }}
                        alt="download from appstore"
                        unselectable="on"
                        draggable="false"
                      />
                    </div>
                    <div>
                      <p className="text-xl">Download on the</p>
                      <p>App Store</p>
                    </div>
                  </Link>
                )}

                {/* Android */}
                {ProjectData.playstoreLink !== undefined && (
                  <Link
                    href={ProjectData.playstoreLink}
                    className="relative mt-4 flex scale-[0.8] items-center gap-4 rounded border-[1px] border-white border-opacity-20 bg-black bg-opacity-25 p-2  text-2xl text-white backdrop-blur-xl"
                  >
                    <div className="relative h-[60px] w-[60px] overflow-hidden p-2">
                      <Image
                        src={"/projects/playstorelogo.png"}
                        height={660} //this is for nextjs image optimization
                        width={480} //this is for nextjs image optimization
                        style={{
                          objectFit: "contain",
                          height: "100%",
                          width: "100%",
                        }}
                        alt="download from appstore"
                        unselectable="on"
                        draggable="false"
                      />
                    </div>
                    <div>
                      <p className="text-xl">Download on the</p>
                      <p>Play Store</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>

            {/* Transition 'rocks' Image */}
            {/* <div className="absolute bottom-0 left-0 right-0 w-full">
              <Image
                src="/Transition2.webp"
                height={3000} //this is for nextjs image optimization
                width={3000} //this is for nextjs image optimization
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                }}
                alt="Transition Image"
                unoptimized //this is to keep the image clarity
              />
            </div> */}
          </div>

          {/* Images Section */}
          <div
            className="relative w-full px-[10%] pb-48 pt-12"
            style={{ backgroundColor: ProjectData.bgTo ?? "#10040E" }}
            id="services"
          >
            {/* Transition 'rocks' Image */}
            {/* <div className="absolute top-0 left-0 right-0 w-full">
              <Image
                src="/Transition2-1.webp"
                height={3000} //this is for nextjs image optimization
                width={3000} //this is for nextjs image optimization
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                  // scale: "-1",
                }}
                alt="Transition Image"
                unoptimized //this is to keep the image clarity
              />
            </div> */}

            {/* Section Heading */}
            <SectionHeading
              title="Images"
              ornament={ProjectData.name}
              description="Here is a set of images from this project"
            />

            {/* Images */}
            <div className="mx-auto mt-12 grid w-full  gap-4  sm:grid-cols-2 xxl:grid-cols-4">
              {ProjectData.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-auto w-full overflow-hidden"
                >
                  <Image
                    src={ImageFolder + image}
                    height={660} //this is for nextjs image optimization
                    width={480} //this is for nextjs image optimization
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    alt=""
                    unselectable="on"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <Contact bgcolor={ProjectData.bgTo ?? "#10040E"} />
        </main>
      )}
    </>
  );
};

export default Project;
