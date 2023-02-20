import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { type NextPage } from "next";
import Image from "next/image";
import { useRef } from "react";

const Hero: NextPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0", "3000px"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-100%", "2000px"]);
  const scale = useTransform(scrollYProgress, [0, 0.1], ["1", "3"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], ["0.4", "0"]);
  const blurValue = useTransform(scrollYProgress, [0, 0.1], ["0", "10px"]);
  const darknessValue = useTransform(scrollYProgress, [0, 0.1], ["1", "0.6"]);
  const logoFilter = useMotionTemplate`blur(${blurValue}) brightness(${darknessValue})`;
  const bgFilter = useMotionTemplate`brightness(${darknessValue})`;
  return (
    <div
      className="relative h-[70vh] w-full overflow-hidden sm:h-screen"
      id="hero"
    >
      <motion.div
        style={{ y, filter: bgFilter }}
        className="relative h-full w-full"
      >
        {/* BG IMG */}
        <Image
          src="/HeroBG 70.webp"
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          priority={true}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            marginTop: "-1px",
          }}
          alt="Ocean View Games"
          unoptimized //this is to keep the image clarity
          placeholder="blur"
          blurDataURL="/HeroBG 70 Blur.webp"
        />
      </motion.div>

      <motion.div
        style={{
          translateY: y2,
          translateX: "-50%",
          scale,
          opacity,
          filter: logoFilter,
        }}
        className="absolute top-[45%] left-[50%] h-[20vh] w-full -translate-x-[50%] -translate-y-[50%] opacity-40"
      >
        <Image
          src="/logo.webp"
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Logo"
          unoptimized //this is to keep the image clarity
          placeholder="blur"
          blurDataURL="/logo Blur.webp"
        />
      </motion.div>

      {/* Transition 'paper cut' Image */}
      <div className="absolute -bottom-[4vw] left-0 right-0 h-[calc(1440px/208*100%)]  w-full">
        <Image
          src="/Transition1Fixed2.webp"
          height={208} //this is for nextjs image optimization
          width={1440} //this is for nextjs image optimization
          style={{
            objectFit: "contain",
            height: "calc(1440px/208*100%)",
            width: "100%",
          }}
          alt="Transition Image"
          unoptimized //this is to keep the image clarity
          placeholder="blur"
          blurDataURL="/Transition1Fixed2 Blur.webp"
        />
      </div>
    </div>
  );
};

export default Hero;
