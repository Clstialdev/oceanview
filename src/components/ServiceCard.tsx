import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

  const animateCard = (e: MouseEvent) => {
    const cardElement = cardRef.current as HTMLDivElement;
    const x = e.clientX - (cardElement.offsetLeft ?? 0);
    const y = e.clientY - (cardElement.offsetTop ?? 0);
    cardElement.style.transform = `rotate(${x * 0.01}deg) rotateZ(${
      y * 0.1
    }deg)`;
  };

  const animateCardDefault = (e: MouseEvent) => {
    const cardElement = cardRef.current as HTMLDivElement;
    const x = e.clientX - (cardElement.offsetLeft ?? 0);
    const y = e.clientY - (cardElement.offsetTop ?? 0);
    cardElement.style.transform = `rotate(${0}deg) rotateZ(${0}deg)`;
  };

  useEffect(() => {
    const cardElement = cardRef.current as HTMLDivElement;
    console.log(cardElement.offsetLeft);

    cardElement.addEventListener("mouseover", (e) => animateCard(e));
    cardElement.addEventListener("mouseleave", (e) => animateCardDefault(e));

    return () => {
      cardElement.removeEventListener("mouseover", (e) => animateCard(e));
      cardElement.removeEventListener("mouseleave", (e) =>
        animateCardDefault(e)
      );
    };
  }, []);

  const distance = () => {
    console.log(cardRef.current);
  };

  return (
    <div
      className="relative h-[400px] w-[40vw] max-w-[580px] rounded-lg bg-services-light p-8"
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
        <h1 className="font-alatsi text-white sm:text-2xl lg:text-[27px]">
          {title}
        </h1>
        <p className="font-alatsi text-white text-opacity-70 sm:text-lg lg:text-[22px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
