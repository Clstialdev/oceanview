import Link from "next/link";
import { type NextPage } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

const About: NextPage = () => {
  return (
    <div className="w-full py-12 px-[10%]">
      {/* Transition 'rocks' Image */}
      <div className="absolute top-0 left-0 right-0 h-[350px] w-full">
        {/* <Image
          src=""
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Transition Image"
          unoptimized //this is to keep the image clarity
        /> */}
      </div>

      {/* Section Heading */}
      <SectionHeading title="services" />

      {/* Service Cards */}
      <div className="grid grid-cols-4 gap-4">
        <ServiceCard image="" title="Game Design" />
        <ServiceCard image="" title="Mobile Development" />
        <ServiceCard image="" title="Monetization" />
        <ServiceCard image="" title="Game Design, Advice & Guidance" />
      </div>
    </div>
  );
};

export default About;
