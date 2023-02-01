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
    <div>
      {/* Ornament */}
      <h2 className="text-xl uppercase">{ornament}</h2>

      {/* Title */}
      <h1
        style={{ textTransform: uppercased ? "uppercase" : "none" }}
        className="text-6xl"
      >
        {title}
      </h1>

      {/* description */}
      <h2 className="text-xl uppercase">{description}</h2>
    </div>
  );
};

export default SectionHeading;
