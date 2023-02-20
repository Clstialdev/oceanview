/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Contact from "../../sections/Contact";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactPlayer from "react-player/lazy";

import SERVICES, { type ServiceData } from "../../data/Services";
import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import SectionHeading from "../../components/SectionHeading";

const Service: NextPage = () => {
  const router = useRouter();
  const serviceId = (router.query.service as string) ?? "";

  const ImageFolder = "/services/" + serviceId + "/";

  const ServiceData = (SERVICES as any)[serviceId] as ServiceData;

  useEffect(() => {
    const AvailableServices = Object.keys(SERVICES);
    if (
      !AvailableServices.includes(serviceId) &&
      serviceId !== "" &&
      window !== undefined
    ) {
      window.location.href = "/404";
      console.log(ServiceData);
    }
  }, [serviceId]);

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

  const pageTitle = ServiceData !== undefined ? ServiceData.name : "";

  return (
    <>
      <Head>
        <title>{`Ocean View Games - ${pageTitle} `}</title>
        <meta name="description" content="Ocean View Games is a ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {serviceId && ServiceData && (
        <main id="main" className="relative h-fit min-h-screen w-full">
          {/* Header */}
          <Header />

          {/* Hero */}
          <div className="relative h-[44vh] max-h-[55vh] min-h-[500px] w-full overflow-hidden ">
            <motion.div
              style={{ y, filter: bgFilter }}
              className="relative h-full w-full bg-black"
            >
              {/* BG IMG */}
              <Image
                src={ImageFolder + ServiceData.banner}
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
                className="font-alatsi mt-20 text-center text-5xl uppercase text-white drop-shadow-lg lg:text-8xl"
                style={{ letterSpacing }}
              >
                {ServiceData.name}
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
            className="relative flex min-h-[580px] w-full flex-col px-[10%] pt-20 lg:flex-row"
            style={{
              background: `linear-gradient(180deg, ${
                ServiceData.bgFrom ?? "#271120"
              } 0%, ${ServiceData.bgTo ?? "#10040E"} 100%`,
              paddingBottom: ServiceData.offering ? "96px" : "48px",
            }}
            id="about"
          >
            {/* Left */}
            <div className="relative h-full w-full lg:w-[60%]">
              {/* Section Heading */}
              <SectionHeading
                title={ServiceData.name}
                uppercased
                ornament=""
                description=""
              />

              {/* Description */}
              <p className="font-oregon-demibold max-w-[1200px] whitespace-pre-wrap text-xl text-beige">
                {ServiceData.description}
              </p>

              {ServiceData.offering && (
                <div
                  className="mt-12 rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 py-2 px-4 text-white"
                  style={{
                    backgroundColor:
                      (ServiceData.bgTo as string) + "26" ?? "#10040E26",
                  }}
                >
                  <h2 className="text-xl font-bold text-beige">
                    Services we provide:
                  </h2>
                  <ul className="mt-2 list-disc pl-4 text-beige">
                    {ServiceData.offering.map((item, index) => (
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
                  {"Ocean View Games"}
                </h1>
              </div>
            </div>

            {/* Right */}

            <div className="mt-[84px] flex w-full flex-col items-center lg:w-[40%] lg:pl-[5%]">
              <p className="text-center text-beige text-opacity-60 lg:text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Videos Section */}
          {ServiceData.video && (
            <div
              className="relative w-full px-[10%] pb-12 pt-12"
              style={{ backgroundColor: ServiceData.bgTo ?? "#10040E" }}
            >
              {/* Section Heading */}
              <SectionHeading
                title="Video"
                ornament=""
                description=""
                uppercased
              />

              {/* Video */}
              <div className="relative mx-auto mt-12 flex h-[600px] w-full justify-center">
                <div className="relative h-[calc(1920/1080*60%)] w-full max-w-[1260px] overflow-hidden">
                  <ReactPlayer
                    controls
                    height={"100%"}
                    width={"100%"}
                    url={ServiceData.video}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Images Section */}
          {ServiceData.images && (
            <div
              className="relative w-full px-[10%] pb-48 pt-12"
              style={{ backgroundColor: ServiceData.bgTo ?? "#10040E" }}
            >
              {/* Section Heading */}

              <SectionHeading
                title="Images"
                ornament=""
                description=""
                uppercased
              />

              {/* Images */}
              <div className="mx-auto mt-12 grid w-full  gap-4  sm:grid-cols-2 xxl:grid-cols-4">
                {ServiceData.images &&
                  ServiceData.images.map((image, index) => (
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
          )}
          {/* Contact Us */}
          <Contact bgcolor={ServiceData.bgTo ?? "#10040E"} />
        </main>
      )}
    </>
  );
};

export default Service;
