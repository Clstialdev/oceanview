import Link from "next/link";
import { type NextPage } from "next";
import Image from "next/image";

const Hero: NextPage = () => {
  return (
    <div className="relative h-screen w-full">
      {/* BG IMG */}
      {/* <Image
        src=""
        height={3000} //this is for nextjs image optimization
        width={3000} //this is for nextjs image optimization
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
        alt="Beautiful Scenery of a vintage room looking out into the ocean through open double doors"
        unoptimized //this is to keep the image clarity
      /> */}

      {/* Transition 'paper cut' Image */}
      <div className="absolute bottom-0 left-0 right-0 h-[800px] w-full">
        {/* <Image
          src=""
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Transition Image"
          unoptimized //this is to keep the image clarity
        /> */}
      </div>
    </div>
  );
};

export default Hero;
