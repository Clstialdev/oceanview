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
import { useEffect } from "react";

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

  return (
    <>
      <Head>
        <title>Ocean View Games - </title>
        <meta name="description" content="Ocean View Games is a ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {projectId && ProjectData && (
        <main id="main">
          {/* Header */}
          <Header />

          <div className="flex min-h-screen w-full flex-col bg-[#01090B] ">
            {/* Banner */}
            <div className="relative h-[400px] w-full overflow-hidden ">
              <Image
                src={ImageFolder + ProjectData.banner}
                height={660} //this is for nextjs image optimization
                width={480} //this is for nextjs image optimization
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  filter: "blur(10px)",
                }}
                alt=""
                unselectable="on"
                draggable="false"
              />
              <div className="font-alatsi absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pt-[100px] text-4xl tracking-wider text-white">
                <h1 className="text-6xl ">{ProjectData.name}</h1>
                {/* Download from Appstore */}
                {ProjectData.appstoreLink !== undefined && (
                  <Link
                    href={ProjectData.appstoreLink}
                    className="relative mt-4 flex scale-[0.8] items-center gap-4 rounded border-[1px] border-white border-opacity-20 bg-black bg-opacity-25 p-2  text-2xl text-white backdrop-blur-xl"
                  >
                    <div className="relative h-[60px] w-[60px] overflow-hidden">
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
              </div>
            </div>

            <div className="my-12 px-[10%]">
              {/* Description */}
              <p className="whitespace-pre-wrap text-white">
                {ProjectData.description}
              </p>
              {/* Source */}
              {ProjectData.source && (
                <p className="mt-8 text-emerald-500">- {ProjectData.source}</p>
              )}

              {ProjectData.thingsDone && (
                <div className="mt-12 rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 bg-[#385140] bg-opacity-[15%] py-2 px-4 text-white">
                  <h2 className="text-xl font-bold">
                    Here is a list of some of the work we have done:
                  </h2>
                  <ul className="mt-2 list-disc pl-4">
                    {ProjectData.thingsDone.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

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
          </div>

          {/* Contact Us */}
          <Contact />
        </main>
      )}
    </>
  );
};

export default Project;
