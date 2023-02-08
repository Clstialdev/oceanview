import Link from "next/link";
import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header: NextPage = () => {
  //state of header visibility
  const [isHidden, setIsHidden] = useState(false);
  const [lastYPosition, setLastYPosition] = useState(0);
  const [animateDuration, setAnimateDuration] = useState(0.95);

  useEffect(() => {
    if (animateDuration !== 0.3) setAnimateDuration(0.3);
    const handleScroll = () => {
      const yPosition = window.scrollY;
      const isScrollingDown = yPosition > lastYPosition && lastYPosition > 420;

      // makes header hidden when scrolling down and visible when scrolling up
      setIsHidden(isScrollingDown);
      setLastYPosition(yPosition);
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPosition]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: isHidden ? 0 : 1,
        transition: { ease: "easeInOut", duration: animateDuration },
      }}
      className="fixed top-0 left-0 right-0 z-10 flex h-[100px] w-full items-center justify-between bg-gradient-to-b from-[rgba(0,0,0,0.12)] to-[rgba(255,255,255,0.12)] px-[7%] backdrop-blur [&>*]:text-white"
    >
      {/* Left Side (branding) */}
      <Link
        href="/"
        className="flex items-center justify-center gap-2 sm:gap-5"
      >
        {/* Logo */}
        <div className="relative h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]">
          <Image src="/logo.png" height={100} width={100} alt="" />
        </div>
        {/* Typography */}
        <div className="relative mt-[9px] h-[40px] w-auto sm:h-[40px]">
          <Image
            src="/typography.png"
            height={300}
            width={300}
            alt=""
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
              // marginTop: "-1px",
            }}
          />
        </div>
      </Link>
      {/* Right Side (navigation) */}
      <nav className="font-oregon hidden gap-12 sm:flex">
        <Link href="#projects">Projects</Link>
        <Link href="#services">Services</Link>
        <Link href="#team">Team</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </motion.header>
  );
};

export default Header;
