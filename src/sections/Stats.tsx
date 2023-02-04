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
      <SectionHeading title="Some Numbers" />

      {/* Stats */}
      <div className="my-20 flex w-full items-center justify-between">
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
  const [counting, setCounting] = useState(true);

  useEffect(() => {
    if (counting) {
      const number = +stat.value.match(/\d+/)[0];

      const initialCounter = () => {
        setCounting(true);
        setValue(1);
      };

      const reset = () => {
        setValue(number);
        setTimeout(() => {
          setCounting(false);
        }, 700);
      };

      const counter = () => {
        if (value < number) {
          setTimeout(() => {
            setValue(value + 1);
          }, stat.countTimer);
        }
      };

      if (value >= 1) {
        counter();
      }

      statsRef.current?.addEventListener("mouseenter", () => initialCounter());
      statsRef.current?.addEventListener("mouseleave", () => reset());

      return () => {
        statsRef.current?.removeEventListener("mouseenter", () =>
          initialCounter()
        );

        statsRef.current?.removeEventListener("mouseleave", () =>
          setValue(number)
        );
      };
    }
  }, [value, counting, stat.value, stat.countTimer, statsRef]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-alatsi mb-2 text-8xl text-white">
        {value.toString() + stat.value.replace(/[0-9]/g, "")}
      </h1>
      <h2 className="font-alatsi text-2xl uppercase text-[#5A88BD] lg:text-4xl">
        {stat.name}
      </h2>
    </div>
  );
};
