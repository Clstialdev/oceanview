import Link from "next/link";
import { type NextPage } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

const About: NextPage = () => {
  return (
    <div
      className="relative min-h-[580px] w-full bg-gradient-to-b from-[#194b51] to-[#030E12] px-[10%] pt-8 pb-12"
      id="about"
    >
      {/* Section Heading */}
      <SectionHeading title="About Us" uppercased />

      {/* Description */}
      <p className="font-oregon-demibold whitespace-pre-wrap text-xl text-beige">{`Our video game development and consultancy team is based in the South West of England, Ocean View Games is a company of Unity and mobile game developers who are passionate about game design, development and guidance.
Our team is backed up by years of industry experience working at high profile game studios including Jagex, Kwalee, and Fishinabottle.
Alongside developing our own IP and passion projects we also work with many clients around the world, helping them to realize the potential of their projects through design, implementation and game consultancy. Interested in working with us? Click the button below.`}</p>

      {/* Section Divider */}
      <div className="mt-12 mb-6 h-[2px] w-1/2 bg-white bg-opacity-20"></div>

      {/* Branding */}
      <div className="flex items-center gap-4">
        <div className="relative h-[50px] w-[50px]">
          <Image
            src="/logobeige.webp"
            height={40} //this is for nextjs image optimization
            width={40} //this is for nextjs image optimization
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            alt="Logo"
            unoptimized //this is to keep the image clarity
          />
        </div>
        <h1 className="font-lg font-oregon-light mt-1 uppercase text-beige">
          Ocean View Games
        </h1>
      </div>

      {/* Transition 'rocks' Image */}
      <div className="absolute bottom-0 left-0 right-0 max-h-[600px] w-full">
        <Image
          src="/Transition2.webp"
          height={189} //this is for nextjs image optimization
          width={2863} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Transition Image"
          unoptimized //this is to keep the image clarity
        />
      </div>
    </div>
  );
};

export default About;
