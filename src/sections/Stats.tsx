import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "../components/SectionHeading";

const STATS = [
  { name: "Years Experience", value: "20+" },
  { name: "Projects Launched", value: "30+" },
  { name: "Millions of Players", value: "1M+" },
];

const Stats: NextPage = () => {
  const [value, setValue] = useState(0);

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counter = () => {
      if (value < 100) {
        setTimeout(() => {
          setValue(value + 1);
        }, 2);

        console.log("counter");
      }
    };

    if (value >= 1) {
      counter();
    }

    statsRef.current?.addEventListener("mouseenter", () => counter());

    return statsRef.current?.removeEventListener("mouseenter", () => counter());
  }, [value]);

  return (
    <div
      className="w-full bg-gradient-to-b from-[#040D10] to-[#07041A] py-12 px-[10%]"
      ref={statsRef}
    >
      {/* Section Heading */}
      <SectionHeading title="Some Numbers" />

      {/* Stats */}
      <div className="my-20 flex w-full items-center justify-between">
        {STATS.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h1 className="font-alatsi mb-2 text-8xl text-white">{value}</h1>
            <h2 className="font-alatsi text-2xl uppercase text-[#5A88BD] lg:text-4xl">
              {stat.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
