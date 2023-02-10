/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Contact from "../../sections/Contact";
import Image from "next/image";
import { useRouter } from "next/router";

import PROJECTS, { ProjectData } from "../../data/Projects";
import Link from "next/link";

const Project: NextPage = () => {
  const router = useRouter();
  const projectId = (router.query.project as string) ?? "";

  const ImageFolder = "/projects/" + projectId + "/";

  const ProjectData = PROJECTS[projectId] as ProjectData;

  return (
    <>
      <Head>
        <title>Ocean View Games - </title>
        <meta name="description" content="Ocean View Games is a ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {projectId && (
        <main id="main">
          {/* Header */}
          <Header />

          <div className="flex min-h-screen w-full flex-col bg-[#01090B] pt-[100px]">
            {/* Banner */}
            <div className="relative h-[300px] w-full overflow-hidden ">
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
              <div className="font-alatsi absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-4xl tracking-wider text-white">
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
              <p className="mt-8 text-emerald-500">- {ProjectData.source}</p>

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
