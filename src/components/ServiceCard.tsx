import { type NextPage } from "next";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
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

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const getMouseLocation = (e: MouseEvent) => {
    const cardElement = cardRef.current as HTMLDivElement;

    const X = e.pageX - cardElement.offsetLeft - cardElement.offsetWidth / 2;
    const Y = e.screenY - cardElement.offsetTop - cardElement.offsetHeight / 2;

    const ySign = Y >= 0 ? 1 : -1;
    const xSign = X >= 0 ? 1 : -1;

    const correctedX = -X * ySign;
    const correctedY = Y * xSign;

    setOffsetX(correctedX);
    setOffsetY(correctedY);
    console.log("X=", correctedX);
    console.log("Y=", correctedY);
  };

  const animateCard = (e: MouseEvent) => {
    const cardElement = cardRef.current as HTMLDivElement;
    const x = e.pageX - (cardElement.offsetLeft ?? 0);
    const y = e.clientY - (cardElement.offsetTop ?? 0);
  };

  useEffect(() => {
    const cardElement = cardRef.current as HTMLDivElement;
    cardElement.addEventListener("mousemove", (e) => getMouseLocation(e));
    cardElement.addEventListener("mouseout", () => {
      setOffsetX(0);
      setOffsetY(0);
    });

    return () => {
      cardElement.removeEventListener("mousemove", (e) => getMouseLocation(e));
      cardElement.removeEventListener("mouseout", () => {
        setOffsetX(0);
        setOffsetY(0);
      });
    };
  }, []);

  return (
    <motion.div
      whileHover={{ rotateZ: offsetX * 0.015, skewY: offsetY * 0.01 }}
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
    </motion.div>
  );
};

export default ServiceCard;
