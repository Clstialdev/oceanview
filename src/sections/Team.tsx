/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "David",
    title: "Director and lead programmer",
    description: `My expertise lies with Unity! I have over a decade of experience as a Unity developer working on projects of all sizes.

My experience ranges from small projects where I was responsible for the entire development and publishing cycle of the project, to large projects working alongside over a dozen developers and artists, each with their own role to play.
    
Before founding Ocean View Games to fuel my personal projects and contractual work, I worked as a video game developer in many different roles within the game industry. My proudest achievement from this time in my life was working at Jagex as a Technical Developer, lending my expertise to the development of the MMO Runescape, a game of which I have been an avid fan for decades!
    
During my time at Jagex, my expertise in mobile game development was recognised and I was assigned as the lead of the mobile development team, overseeing and leading the push to release old-school Runescape for mobile devices. Following more than a year of difficult but rewarding work, this product went on to win a Bafta!`,
    linkedIn: "https://www.linkedin.com/in/davide2/",
    certification:
      "https://www.youracclaim.com/badges/e13d8602-ce15-452f-b176-ac4a1a15e2ed",
    image: "david.webp",
  },

  {
    name: "Adam",
    title: "Senior programmer",
    description: `With over 10 years of games design and development experience, Adam has collaborated with a wide range of companies throughout his career as a video game developer. This includes game studios (such as Rockstar, Sumo Digital and Square Enix), entertainment (BBC, Nickelodeon, Viacom) and even educational and government institutions.

Adam brings his knowledge as a Unity developer to the team alongside his experience with more low level languages and bespoke hardware.`,
    linkedIn: "https://www.linkedin.com/in/adam-kaye-306985116/",
    image: "adam.webp",
    pushDown: true,
  },
];

const Team: NextPage = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [animateDirection, setAnimateDirection] = useState(1);

  const containerVariant = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariant = {
    initial: (animateDirection: number) => ({
      x: 400 * animateDirection,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.25 },
    },
    exit: (animateDirection: number) => ({
      x: 400 * -animateDirection,
      opacity: 0,
      transition: { duration: 0.25 },
    }),
  };

  return (
    <div
      className="relative h-fit  w-full bg-[#07041A] pb-12 xl:pb-20"
      id="team"
    >
      {/* Section Heading */}
      <div className="px-[10%]">
        <SectionHeading
          title="Meat The Team"
          uppercased
          secondaryColor="#7B5182"
        />
      </div>

      {/* Container */}
      <AnimatePresence mode="wait" custom={animateDirection}>
        {selectedMember === null ? (
          <motion.div
            className="relative flex h-full flex-col items-center justify-between px-[10%] lg:flex-row "
            key="meet the team"
            variants={containerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={animateDirection}
          >
            {/* Left */}
            <motion.div
              variants={itemVariant}
              className="hidden w-full lg:mt-20 lg:block lg:w-1/2 "
            >

              {/*}  
              <h1 className="font-oregon-light uppercase text-beige sm:text-[50px] xxl:text-7xl xxxl:text-8xl">
                About us
              </h1> {*/}
              
              <p className="font-oregon my-12 pr-6 text-lg text-beige text-opacity-80 lg:text-2xl">
                With David having over 10 years experience working at major gaming studios such as Jagex on the legendary MMO RuneScape. Adam with also over 10 years of experience building games for major clients such as Disney, Cambridge University and the BBC. Your project will be in safe hands.              </p>
              
              <p className="font-oregon text-lg text-white lg:text-2xl">
                Click our profile images for more information
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={itemVariant}
              className="relative h-full w-full pt-20 lg:w-1/2 "
            >
              <div className="relative flex h-full w-full flex-col items-center justify-between gap-x-8 sm:flex-row">
                {TEAM_MEMBERS.map((member, index) => (
                  <div
                    key={index}
                    className="relative h-full w-1/2 duration-300 last:py-4 hover:cursor-pointer hover:opacity-90 last:sm:py-0"
                    onClick={() => setSelectedMember(index)}
                  >
                    <div className="relative h-[80%] max-h-[600px] w-full max-w-[400px] overflow-hidden rounded ">
                      <Image
                        src={"/team/" + member.image}
                        height={1000}
                        width={1000}
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                        alt=""
                        unselectable="on"
                        draggable="false"
                      />
                    </div>
                    <p className="font-oregon-light mt-4 text-2xl uppercase text-white lg:text-4xl">
                      {member.name}
                    </p>
                    <p className=" font-oregon-light text-white lg:text-lg">
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="meet a member"
            className="relative flex h-full flex-col items-center space-y-12 px-[10%] pt-20 lg:flex-row lg:items-start lg:space-y-0 xxl:items-center"
            variants={containerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={animateDirection}
          >
            {/* Left */}
            <motion.div
              variants={itemVariant}
              className="relative h-full w-[85%] max-w-[500px] sm:min-w-[400px] lg:w-1/3"
            >
              <div className="relative flex h-full w-full flex-col items-center justify-between gap-x-8 sm:flex-row">
                <div
                  className="relative h-full w-full duration-300 last:py-4 hover:cursor-pointer hover:opacity-90 last:sm:py-0"
                  onClick={() => setSelectedMember(null)}
                >
                  <div className="relative h-full w-full overflow-hidden rounded bg-red-200 lg:h-[80%]">
                    <Image
                      src={
                        "/team/" + (TEAM_MEMBERS[selectedMember]?.image ?? "")
                      }
                      height={1000}
                      width={1000}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                      alt=""
                      unselectable="on"
                      draggable="false"
                    />
                  </div>
                  <p className="font-oregon-light mt-4 text-2xl uppercase text-white lg:text-4xl">
                    {TEAM_MEMBERS[selectedMember]?.name ?? ""}
                  </p>
                  <p className=" font-oregon-light text-white lg:text-lg">
                    {TEAM_MEMBERS[selectedMember]?.title ?? ""}
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Right */}
            <motion.div
              variants={itemVariant}
              className="w-full max-w-[1100px] pl-8 lg:block"
            >
              <p className="font-oregon whitespace-pre-wrap text-center text-lg text-white md:text-xl lg:text-start lg:text-xl xl:text-2xl">
                {TEAM_MEMBERS[selectedMember]?.description ?? ""}
              </p>
              <div className="font-oregon-demibold mt-14 flex w-full gap-8 pb-14 text-center text-sm text-white underline md:text-base lg:w-auto lg:text-start">
                {TEAM_MEMBERS[selectedMember]?.certification && (
                  <Link
                    href={TEAM_MEMBERS[selectedMember]?.certification ?? "#"}
                  >
                    Certification
                  </Link>
                )}
                {TEAM_MEMBERS[selectedMember]?.linkedIn && (
                  <Link href={TEAM_MEMBERS[selectedMember]?.linkedIn ?? "#"}>
                    LinkedIn
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
