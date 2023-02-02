import { type NextPage } from "next";
import Image from "next/image";

const Hero: NextPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* BG IMG */}
      <Image
        src="/HeroBGSmall.png"
        height={3000} //this is for nextjs image optimization
        width={3000} //this is for nextjs image optimization
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
        alt="Beautiful Scenery of a vintage room looking out into the ocean through open double doors"
        unoptimized //this is to keep the image clarity
      />

      <div className="absolute top-[45%] left-[50%] h-[20vh] w-full -translate-x-[50%] -translate-y-[50%] opacity-40">
        <Image
          src="/logo.png"
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Beautiful Scenery of a vintage room looking out into the ocean through open double doors"
          unoptimized //this is to keep the image clarity
        />
      </div>

      {/* Transition 'paper cut' Image */}
      <div className="absolute -bottom-[4vw] left-0 right-0 w-full">
        <Image
          src="/Transition1Fixed.png"
          height={3000} //this is for nextjs image optimization
          width={3000} //this is for nextjs image optimization
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          alt="Transition Image"
          unoptimized //this is to keep the image clarity
        />
      </div>
    </div>
  );
};

export default Hero;
