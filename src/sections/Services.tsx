import { type NextPage } from "next";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Image from "next/image";

const Services: NextPage = () => {
  return (
    <div
      className="relative w-full bg-services-dark px-[10%] py-48"
      id="services"
    >
      {/* Transition 'rocks' Image */}
      <div className="absolute top-0 left-0 right-0 w-full">
        <Image
          src="/Transition2.png"
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
            scale: "-1",
          }}
          alt="Transition Image"
          unoptimized //this is to keep the image clarity
        />
      </div>

      {/* Section Heading */}
      <SectionHeading title="Services" />

      {/* Service Cards */}
      <div className="flex w-full items-center justify-between">
        <div className="mt-12 grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex w-full items-center justify-center">
            <ServiceCard
              key={1}
              image="/services/gamedes.png"
              title="Game Design"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <ServiceCard
              key={2}
              image="/services/mobile.png"
              title="Mobile Development"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <ServiceCard
              key={3}
              image="/services/monetization.png"
              title="Monetization"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <ServiceCard
              key={4}
              image="/services/octopus.png"
              title="Game Design, Advice & Guidance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
