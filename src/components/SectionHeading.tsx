import { type NextPage } from "next";

interface SectionHeadingProps {
  ornament?: string;
  title?: string;
  description?: string;
  uppercased?: boolean;
}

const SectionHeading: NextPage<SectionHeadingProps> = ({
  ornament = "Lorem Ipsum",
  title = "Title Here",
  description = "Lorem Ipsum Lorem Ipsum More Lorem Yeah This is just random jargon.",
  uppercased,
}) => {
  return (
    <div className="mb-4">
      {/* Ornament */}
      <h2 className="font-oregon-demibold mb-2 text-xl uppercase text-turqoise">
        {ornament}
      </h2>

      {/* Title */}
      <h1
        style={{ textTransform: uppercased ? "uppercase" : "none" }}
        className="font-oregon-demibold text-6xl text-beige"
      >
        {title}
      </h1>

      {/* description */}
      <h2 className="font-oregon-demibold mt-1 text-xl uppercase text-turqoise">
        {description}
      </h2>
    </div>
  );
};

export default SectionHeading;
