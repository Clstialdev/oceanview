import Link from "next/link";
import { type NextPage } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

const About: NextPage = () => {
  return (
    <div className="w-full py-12 px-[10%]">
      {/* Section Heading */}
      <SectionHeading title="About Us" uppercased />

      {/* Description */}
      <p>Lorem Ipsum</p>

      {/* Section Divider */}
      <div className="h-[1px] w-1/2 bg-white bg-opacity-10"></div>

      {/* Branding */}
      <div className="flex items-center">
        <div>Logo</div>
        <h1>Ocean View Games</h1>
      </div>

      {/* Transition 'rocks' Image */}
      <div className="absolute bottom-0 left-0 right-0 h-[350px] w-full">
        {/* <Image
          src=""
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Transition Image"
          unoptimized //this is to keep the image clarity
        /> */}
      </div>
    </div>
  );
};

export default About;
