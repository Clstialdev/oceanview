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
      <p className="font-oregon-demibold whitespace-pre-wrap text-xl text-beige">{`With a combined experience of over 20 years, your project is in safe hands. Our team brings a whole breadth of experience, from working on large games projects at renowned game studios such as Jagex and Rockstar, to smaller more bespoke experiences for entertainment and educational institutions, such as the BBC and Cambridge University Press.`}</p>
      <p className="font-oregon-demibold whitespace-pre-wrap text-xl text-beige">{`
Our background has provided us with opportunities to collaborate with various different teams from various different backgrounds. Our experience includes working alongside existing teams to collaborate and create large-scale projects as well as operating as a dedicated resource on smaller scale, bespoke experiences.`}</p>
      <p className="font-oregon-demibold whitespace-pre-wrap text-xl text-beige">{`
Our experience includes Game Design as well as Games Development. Got a cool idea and need to know the best way to see that idea realised? Let us work with you to help make your idea a reality!`}</p>

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
            alt="Ocean View Games Logo"
            unoptimized //this is to keep the image clarity
          />
        </div>
        <h2 className="font-lg font-oregon-light mt-1 uppercase text-beige">
          Ocean View Games
        </h2>
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
