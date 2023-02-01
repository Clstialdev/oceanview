import Link from "next/link";
import { type NextPage } from "next";

interface SectionHeadingProps {
  ornament?: string;
  title?: string;
  desciption?: string;
  uppercased?: boolean;
}

const SectionHeading: NextPage<SectionHeadingProps> = ({
  ornament = "Lorem Ipsum",
  title = "Title Here",
  desciption = "Lorem Ipsum Lorem Ipsum More Lorem Yeah This is just random jargon.",
  uppercased,
}) => {
  return (
    <div>
      {/* Ornament */}
      <h2 className="uppercase">{ornament}</h2>

      {/* Title */}
      <h1 style={{ textTransform: uppercased ? "uppercase" : "none" }}>
        {title}
      </h1>

      {/* description */}
      <h2 className="uppercase">{desciption}</h2>
    </div>
  );
};

export default SectionHeading;
