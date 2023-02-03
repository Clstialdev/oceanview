import { type NextPage } from "next";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { type RefObject, useEffect } from "react";

interface ThreeDeeCardWrapperProps {
  children: React.ReactNode;
  childRef: RefObject<HTMLDivElement>;
}

export const ThreeDeeCardWrapper: NextPage<ThreeDeeCardWrapperProps> = ({
  children,
  childRef,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scaleV = useMotionValue(1);

  useEffect(() => {
    const cardElement = childRef.current as HTMLDivElement;
    const handleMouseMove = (e: MouseEvent) => {
      const cardRect = cardElement.getBoundingClientRect();

      const X = e.screenX - cardRect.left - cardElement.offsetWidth / 2;
      const Y = e.screenY - cardRect.top - cardElement.offsetHeight / 2;

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

  return (
    <motion.div
      style={{ rotateX, rotateY, scale }}
      className="relative h-fit w-fit"
    >
      {children}
    </motion.div>
  );
};

interface SheenEffectProps {
  cardRef: RefObject<HTMLDivElement>;
  strength?: number;
  rgbColor?: string;
}

export const SheenEffect: NextPage<SheenEffectProps> = ({
  cardRef,
  strength = 0.15,
  rgbColor = "81,130,118",
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const cardElement = cardRef.current as HTMLDivElement;
    const handleMouseMove = (e: MouseEvent) => {
      const cardRect = cardElement.getBoundingClientRect();

      const X = e.screenX - cardRect.left - cardElement.offsetWidth / 2;
      const Y = e.screenY - cardRect.top - cardElement.offsetHeight / 2;

      animate(mouseX, X);
      animate(mouseY, Y);
    };

    const handleReset = () => {
      animate(mouseX, 0);
      animate(mouseY, 0);
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
    [0, strength, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
      55deg,
      transparent,
      rgba(${rgbColor}, ${sheenOpacity}) ${sheenPosition}%,
      transparent)`;

  return (
    <motion.div
      className="absolute left-0 top-0 right-0 bottom-0"
      style={{ backgroundImage: sheenGradient }}
    ></motion.div>
  );
};