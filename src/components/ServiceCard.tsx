import { type NextPage } from "next";

interface ServiceCardProps {
  image: string;
  title?: string;
  description?: string;
  uppercased?: boolean;
}

const ServiceCard: NextPage<ServiceCardProps> = ({
  title = "Title Here",
  description = "Lorem Ipsum Lorem Ipsum More Lorem Yeah This is just random jargon.",
}) => {
  return (
    <div className="relative h-[450px] w-[500px] p-3">
      {/* Image */}
      <div className="relative h-[57%] w-full">
        {/* <Image
              src={image}
              height={600}
              width={600}
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
              alt=""
            /> */}
      </div>

      {/* Card Details */}
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
