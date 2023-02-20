import Link from "next/link";
import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header: NextPage = () => {
  //state of header visibility
  const [isHidden, setIsHidden] = useState(false);
  const [lastYPosition, setLastYPosition] = useState(0);
  const [animateDuration, setAnimateDuration] = useState(0.95);

  const [overlayMenuVisible, setOverlayMenuVisible] = useState(false);

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

  // Animation
  const overlayVariant = {
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

  useEffect(() => {
    console.log(overlayMenuVisible);
  }, [overlayMenuVisible]);

  return (
    <>
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
            <Image
              src="/logo.webp"
              height={100}
              width={100}
              alt="Ocean View Games"
            />
          </div>
          {/* Typography */}
          <div className="relative mt-[9px] h-[40px] w-auto sm:h-[40px]">
            <Image
              src="/typography.webp"
              height={300}
              width={300}
              alt="Ocean View Games Text"
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
        <nav className="font-oregon hidden gap-12 sm:flex sm:text-[20px]">
          <Link href="/#projects">Projects</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#team">Team</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        {/* Right Side Hamburger meenu */}
        <div
          className="flex flex-col gap-2 sm:hidden"
          onClick={() => setOverlayMenuVisible((current) => !current)}
        >
          <div className="h-[2px] w-[30px] bg-white"></div>
          <div className="h-[2px] w-[30px] bg-white"></div>
          <div className="h-[2px] w-[30px] bg-white"></div>
        </div>
      </motion.header>

      <AnimatePresence mode="popLayout">
        {/* Hamburger Menu OverLay */}
        {overlayMenuVisible && (
          <motion.div
            variants={overlayVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="font-alatsi fixed z-[9] flex h-screen w-screen flex-col items-center justify-center gap-16 pt-[100px] backdrop-blur-3xl sm:hidden [&>*]:text-center [&>*]:text-4xl [&>*]:uppercase [&>*]:text-white"
          >
            <Link
              className="duration-300 hover:tracking-widest hover:text-[#24487e]"
              onClick={() => setOverlayMenuVisible(false)}
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className="duration-300 hover:tracking-widest hover:text-[#24487e]"
              onClick={() => setOverlayMenuVisible(false)}
              href="/#services"
            >
              Services
            </Link>
            <Link
              className="duration-300 hover:tracking-widest hover:text-[#24487e]"
              onClick={() => setOverlayMenuVisible(false)}
              href="/#team"
            >
              Team
            </Link>
            <Link
              className="duration-300 hover:tracking-widest hover:text-[#24487e]"
              onClick={() => setOverlayMenuVisible(false)}
              href="/#contact"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
