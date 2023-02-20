import { type NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";
import { motion, useTransform, animate, motionValue } from "framer-motion";

const DEPTH_INDICATOR = [
  { level: 1, value: "4m", divId: "hero" },
  { level: 60, value: "0m", divId: "about" },
  { level: 185, value: "-125m", divId: "services" },
  { level: 387, value: "-357m", divId: "stats" },
  { level: 714, value: "-714m", divId: "projects" },
  { level: 914, value: "-914m", divId: "team" },
  { level: 1071, value: "-1071m", divId: "testimonials" },
  { level: 2550, value: "-2550m", divId: "contact" },
];

const DepthIndicator: NextPage = () => {
  const depthValue = motionValue(0);

  useEffect(() => {
    const calculatePosition = () => {
      const currentPosition = window.scrollY;

      let nextDepth = 0;
      DEPTH_INDICATOR.map((depth) => {
        const section = document.getElementById(depth.divId);
        if (currentPosition + 500 >= (section?.offsetTop ?? 0)) {
          nextDepth = depth.level;
        }
      });

      animate(
        depthValue,
        nextDepth / (DEPTH_INDICATOR[DEPTH_INDICATOR.length - 1]?.level ?? 1)
      );
    };

    window.addEventListener("scroll", () => calculatePosition());

    return window.removeEventListener("scroll", () => calculatePosition());
  });

  const depth = useTransform(depthValue, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-[2%] top-1/2 z-50 hidden h-[60%] max-h-[600px] w-[100px] -translate-y-[50%] lg:flex ">
      {/* Indicator */}
      <div className="relative h-full w-1/2">
        <motion.div
          className="absolute h-[40px] w-[40px] -translate-y-[50%]"
          style={{ top: depth }}
        >
          <Image
            src="/diver.webp"
            height={400}
            width={400}
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
            alt="Diver Helmet"
          />
        </motion.div>
      </div>
      {/* Level */}
      <div className="relative h-full w-1/2">
        {DEPTH_INDICATOR.map((depth, index) => (
          <div
            key={index}
            className="absolute h-[1px] w-[15px] bg-white"
            style={{
              top: `calc(${depth.level} * 100% / ${
                DEPTH_INDICATOR[DEPTH_INDICATOR.length - 1]?.level ?? 1
              })`,
            }}
          >
            <p className="absolute top-0 -right-10 -translate-y-[50%] text-[10px] text-white">
              {depth.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepthIndicator;
