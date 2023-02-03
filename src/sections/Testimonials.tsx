import { type NextPage } from "next";
import { useRef, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import {
  GlowEffect,
  ThreeDeeCardWrapper,
} from "../components/ThreeDeeCardWrapper";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  {
    icon: "/testimonials/TLC.webp",
    author: "LOGAN",
    position: "Lead Producer, The Language Conservancy.",
    message:
      '"David is very patient and has great communication. He is an appropriately skilled freelance Unity developer who understood our project goals from the beginning and worked with us diligently throughout our slow-burn design process. I am pleased that we chose David to develop version 2.0 of our Vocab Builder. Thanks David!"',
    color: "#FDC240",
  },
  {
    icon: "/testimonials/FHG.webp",
    author: "JACOB B",
    position: "Chief Creative Officer, Foil Hat Games.",
    message:
      '"Awesome job. I really look forward to working together again very soon!"',
    color: "#a4c147",
  },
  {
    icon: "/testimonials/GFI.webp",
    author: "WALDEN YAN ",
    position: "GameFi.",
    message:
      '"David did a great job with the project and was able to take a great amount of autonomy. There was very little need to go back and forth and ask him to change anything. His code is also very clean. He laid out his own roadmap plans and worked well with the rest of the team. Ultimately, he applied his experience and knowledge in the field very well. Very satisfied with the output of his work."',
    color: "#146dea",
  },
];

const Testimonials: NextPage = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [animateDirection, setAnimateDirection] = useState(-1);

  const previousTestimonial = () => {
    if (testimonialIndex > 0) {
      setAnimateDirection(-1);
      setTestimonialIndex((current) => current - 1);
    }
  };

  const nextTestimonial = () => {
    if (testimonialIndex < TESTIMONIALS.length - 1) {
      setAnimateDirection(1);
      setTestimonialIndex((current) => current + 1);
    }
  };

  const cardVariants = {
    initial: (animateDirection: number) => ({
      x: 400 * animateDirection,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.25 },
    },
    exit: (animateDirection: number) => ({
      x: 400 * -animateDirection,
      opacity: 0,
      transition: { duration: 0.25 },
    }),
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#07041A] to-[#01090B] px-[10%] pb-24">
      {/* Section Heading */}
      <SectionHeading title="Testimonials" />

      {/* Container */}
      <div className="relative mt-8 flex min-h-[200px] w-full justify-center overflow-hidden">
        {/* Arrow Left */}
        {testimonialIndex > 0 && (
          <div
            className="absolute top-[calc(50%-8px)] left-0 h-[30px] w-[30px] hover:cursor-pointer"
            onClick={() => previousTestimonial()}
          >
            <Image
              src="/arrow.png"
              height={40}
              width={40}
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
                rotate: "180deg",
              }}
              alt="previous testimonial"
            />
          </div>
        )}
        {/* Arrow Right */}
        {testimonialIndex < TESTIMONIALS.length - 1 && (
          <div
            className="absolute top-[calc(50%-8px)] right-0 h-[30px] w-[30px] hover:cursor-pointer"
            onClick={() => nextTestimonial()}
          >
            <Image
              src="/arrow.png"
              height={40}
              width={40}
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
              }}
              alt="previous testimonial"
            />
          </div>
        )}

        {/* Testimonial Card */}
        <AnimatePresence mode="wait" custom={animateDirection}>
          {TESTIMONIALS[testimonialIndex] && (
            <motion.div
              key={testimonialIndex}
              className="flex min-h-[470px] items-center"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={animateDirection}
            >
              <TestimonialCard testimonial={TESTIMONIALS[testimonialIndex]} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;

interface TestimonialCardProps {
  testimonial: {
    icon: string;
    author: string;
    position: string;
    message: string;
    color?: string;
  };
}

const TestimonialCard: NextPage<TestimonialCardProps> = ({ testimonial }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  function hexToRGBA(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return (
        "rgba(" +
        r.toString() +
        ", " +
        g.toString() +
        ", " +
        b.toString() +
        ", " +
        alpha.toString() +
        ")"
      );
    } else {
      return (
        "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")"
      );
    }
  }

  return (
    <ThreeDeeCardWrapper childRef={cardRef}>
      <div
        ref={cardRef}
        className="relative mt-6 max-w-[1000px] overflow-hidden rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 bg-[#3C3851] bg-opacity-10 py-[60px] px-[100px]"
      >
        <GlowEffect
          cardRef={cardRef}
          rgbaColor={hexToRGBA(testimonial.color, 0.2)}
        />

        {/* Message */}
        <p className="z-60 text-2xl text-white">{testimonial.message}</p>
        {/* Author */}
        <div className="z-60 mt-8 flex space-x-3">
          {/* Left Side */}
          <div className="relative h-[55px] w-[55px] overflow-hidden rounded">
            <Image
              src={testimonial.icon}
              height={600}
              width={600}
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
              }}
              alt=""
            />
          </div>
          {/* Right Side */}
          <div>
            <h3
              className="font-alatsi text-2xl"
              style={{ color: testimonial.color ?? "#AB88C0" }}
            >
              {testimonial.author}
            </h3>
            <h3 className="font-alatsi text-xl text-[#8F8F8F] text-opacity-50">
              {testimonial.position}
            </h3>
          </div>
        </div>
      </div>
    </ThreeDeeCardWrapper>
  );
};
