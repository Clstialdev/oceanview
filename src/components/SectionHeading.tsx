import { type NextPage } from "next";

interface SectionHeadingProps {
  ornament?: string;
  title?: string;
  description?: string;
  uppercased?: boolean;
  secondaryColor?: string;
}

const SectionHeading: NextPage<SectionHeadingProps> = ({
  ornament = "",
  title = "Title Here",
  description = "",
  uppercased,
  secondaryColor = "#518276",
}) => {
  return (
    <div className="pb-4">
      {/* Ornament */}
      <h2
        className="font-oregon-demibold pb-2 uppercase sm:text-xl"
        style={{ color: secondaryColor }}
      >
        {ornament}
      </h2>

      {/* Title */}
      <h2
        style={{ textTransform: uppercased ? "uppercase" : "none" }}
        className="font-oregon-demibold text-4xl text-beige sm:text-6xl"
      >
        {title}
      </h2>

      {/* description */}
      <h2
        className="font-oregon-demibold mt-1 uppercase sm:text-xl"
        style={{ color: secondaryColor }}
      >
        {description}
      </h2>
    </div>
  );
};

export default SectionHeading;
