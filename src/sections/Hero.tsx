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
    <div className="relative h-screen w-full overflow-hidden" id="hero">
      <motion.div
        style={{ y, filter: bgFilter }}
        className="relative h-full w-full"
      >
        {/* BG IMG */}
        <Image
          src="/HeroBG.png"
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            marginTop: "-1px",
          }}
          alt="Beautiful Scenery of a vintage room looking out into the ocean through open double doors"
          unoptimized //this is to keep the image clarity
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
          src="/logo.png"
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Beautiful Scenery of a vintage room looking out into the ocean through open double doors"
          unoptimized //this is to keep the image clarity
        />
      </motion.div>

      {/* Transition 'paper cut' Image */}
      <div className="absolute -bottom-[4vw] left-0 right-0 w-full">
        <Image
          src="/Transition1Fixed2.png"
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Transition Image"
          unoptimized //this is to keep the image clarity
        />
      </div>
    </div>
  );
};

export default Hero;
