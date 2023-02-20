/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type NextPage } from "next";
import { type RefObject, useEffect, useRef, useState } from "react";
import SectionHeading from "../components/SectionHeading";

const STATS = [
  { name: "Years Experience", value: "20+", countTimer: 10 },
  { name: "Projects Launched", value: "30+", countTimer: 10 },
  { name: "Millions of Players", value: "2M+", countTimer: 200 },
];

const Stats: NextPage = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-full bg-gradient-to-b from-[#040D10] to-[#07041A] py-12 px-[10%]"
      ref={statsRef}
      id="stats"
    >
      {/* Section Heading */}
      <SectionHeading
        title="Some Numbers"
        description="Here are some numbers of our accomplishments"
        uppercased
      />

      {/* Stats */}
      <div className="my-20 flex w-full flex-col items-center justify-center sm:flex-row sm:justify-between">
        {STATS.map((stat, index) => (
          <StatCounter key={index} statsRef={statsRef} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;

interface StatCounterProps {
  statsRef: RefObject<HTMLDivElement>;
  stat: { name: string; value: string; countTimer: number };
}

const StatCounter: NextPage<StatCounterProps> = ({ statsRef, stat }) => {
  const [value, setValue] = useState(0);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const number =
      stat.value.match(/\d+/) !== undefined ? +stat.value.match(/\d+/)![0] : 0;

    const interval = setInterval(() => {
      if (value < number) {
        setValue((current) => current + 1);
      }
    }, 10);

    const initialCounter = () => {
      let value = 1;
      const interval = setInterval(() => {
        if (value < number) {
          setValue(value);
          value = value + 1;
        }
      }, 60);
      clearInterval(interval);
    };

    const calculatePosition = () => {
      if (!counting) {
        const currentPosition = window.scrollY;

        const section = document.getElementById("stats");
        if (currentPosition + 500 >= (section?.offsetTop ?? 0)) {
          initialCounter();
          setCounting(true);
        } else {
          setValue(0);
          setCounting(false);
        }
      }
    };

    window.addEventListener("scroll", () => calculatePosition());

    return () => {
      window.removeEventListener("scroll", () => calculatePosition());
      clearInterval(interval);
    };
  });

  return (
    <div className="my-4 flex flex-col items-center sm:my-0">
      <h1 className="font-alatsi mb-2 text-8xl text-white">
        {value.toString() + stat.value.replace(/[0-9]/g, "")}
      </h1>
      <h2 className="font-alatsi text-2xl uppercase text-[#5A88BD] lg:text-4xl">
        {stat.name}
      </h2>
    </div>
  );
};
