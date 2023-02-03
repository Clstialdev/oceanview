import { type NextPage } from "next";
import Image from "next/image";

import { useRef } from "react";
import { ThreeDeeCardWrapper, SheenEffect } from "./ThreeDeeCardWrapper";

interface ServiceCardProps {
  image: string;
  title?: string;
  description?: string;
  uppercased?: boolean;
}

const ServiceCard: NextPage<ServiceCardProps> = ({
  image,
  title = "Title Here",
  description = "Lorem Ipsum Lorem Ipsum More Lorem Yeah This is just random jargon.",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <ThreeDeeCardWrapper childRef={cardRef}>
      <div
        className="relative h-[400px] w-[40vw] max-w-[580px] rounded-lg bg-services-light p-8"
        ref={cardRef}
      >
        <SheenEffect cardRef={cardRef} />
        {/* Image */}
        <div className="relative h-[65%] w-full">
          <Image
            src={image}
            height={600}
            width={600}
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            alt=""
          />
        </div>

        {/* Card Details */}
        <div>
          <h1 className="font-alatsi text-white sm:text-2xl lg:text-[27px]">
            {title}
          </h1>
          <p className="font-alatsi text-white text-opacity-70 sm:text-lg lg:text-[22px]">
            {description}
          </p>
        </div>
      </div>
    </ThreeDeeCardWrapper>
  );
};

export default ServiceCard;
