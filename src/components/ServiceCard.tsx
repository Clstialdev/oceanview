import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current as HTMLElement | null;

    const cardHeight = cardElement?.offsetHeight;
    const cardWidth = cardElement?.offsetWidth;
  }, []);

  const distance = () => {
    console.log(cardRef.current);
  };

  return (
    <div
      className="relative h-[400px] w-[580px] rounded-lg bg-services-light p-8"
      ref={cardRef}
    >
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
        <h1 className="font-alatsi text-[27px] text-white">{title}</h1>
        <p className="font-alatsi text-[22px] text-white text-opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
