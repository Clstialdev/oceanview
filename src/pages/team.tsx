/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";

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
  return (
    <>
      <Head>
        <title>Ocean View Games</title>
        <meta name="description" content="Ocean View Games is a ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body Code Starts Here */}
      <main id="main">
        {/* Header */}
        <Header />

        {/* Team */}

        <div className="relative min-h-screen w-full bg-gradient-to-b from-[#010506] to-[#07041A] py-12 px-[10%] pt-[100px]">
          <div className=" w-full rounded py-8 px-24">
            <h1 className="mb-20 pt-8 text-center text-4xl font-bold text-[#5c85c1] text-opacity-80 ">
              Meet The Team
            </h1>
            <div className="grid grid-cols-2">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index}>
                  {/* Image */}
                  <div className="relative mx-auto h-auto w-[440px] overflow-hidden rounded-lg shadow-lg shadow-[#60a0ff4a]">
                    <Image
                      src={"/team/" + member.image}
                      height={660}
                      width={480}
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

                  {/* Details */}
                  <div
                    style={{ marginTop: member.pushDown ? "-130px" : "-160px" }}
                    className=" h-fit w-1/4 min-w-[450px] rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 bg-[#1e232d] bg-opacity-[35%] px-4 py-6 text-white backdrop-blur-xl"
                  >
                    <h1 className="text-2xl font-bold">{member.name}</h1>
                    <h1 className="font-bold text-white text-opacity-80">
                      {member.title}
                    </h1>
                    <p className="mt-4 text-xs">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Team;
