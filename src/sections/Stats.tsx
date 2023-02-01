import { type NextPage } from "next";
import SectionHeading from "../components/SectionHeading";

const STATS = [
  { name: "Years Experience", value: "20+" },
  { name: "Projects Launched", value: "30+" },
  { name: "Millions of Players", value: "1M+" },
];

const Stats: NextPage = () => {
  return (
    <div className="w-full py-12 px-[10%]">
      {/* Section Heading */}
      <SectionHeading title="Some Numbers" />

      {/* Stats */}
      <div className="flex w-full items-center justify-around">
        {STATS.map((stat, index) => (
          <div key={index}>
            <h1 className="text-8xl text-white">{stat.value}</h1>
            <h2 className="text-6xl uppercase">{stat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
