import { type NextPage } from "next";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, useTransition } from "react";

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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scaleV = useMotionValue(10);

  useEffect(() => {
    const cardElement = cardRef.current as HTMLDivElement;
    const handleMouseMove = (e: MouseEvent) => {
      const X = e.pageX - cardElement.offsetLeft - cardElement.offsetWidth / 2;
      const Y =
        e.screenY - cardElement.offsetTop - cardElement.offsetHeight / 2;

      const ySign = Y >= 0 ? 1 : -1;
      const xSign = X >= 0 ? 1 : -1;

      // const correctedX = X * ySign;
      // const correctedY = Y * xSign;

      animate(mouseX, X);
      animate(mouseY, Y);
      animate(scaleV, 2);
    };

    const handleReset = () => {
      animate(mouseX, 0);
      animate(mouseY, 0);
      animate(scaleV, 1);
    };

    if (typeof window === "undefined") return;
    cardElement.addEventListener("mousemove", handleMouseMove);
    cardElement.addEventListener("mouseleave", handleReset);
    return () => {
      cardElement.removeEventListener("mousemove", handleMouseMove);
      cardElement.removeEventListener("mouseleave", handleReset);
    };
  }, []);

  const rotateX = useTransform(mouseX, [300, -300], [-10, 10]);
  const rotateY = useTransform(mouseY, [-300, 300], [-5, 10]);
  const scale = useTransform(scaleV, [1, 2], [1, 1.03]);

  const diagonalMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position: number = newRotateX + newRotateY;
      return position;
    }
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);

  const sheenOpacity = useTransform(
    sheenPosition,
    [-100, 100, -400],
    [0, 0.15, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    transparent,
    rgba(81 130 118 / ${sheenOpacity}) ${sheenPosition}%,
    transparent)`;

  return (
    <motion.div
      style={{ rotateX, rotateY, scale }}
      className="relative h-[400px] w-[40vw] max-w-[580px] rounded-lg bg-services-light p-8"
      ref={cardRef}
    >
      <motion.div
        className="absolute left-0 top-0 right-0 bottom-0"
        style={{ backgroundImage: sheenGradient }}
      ></motion.div>
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
