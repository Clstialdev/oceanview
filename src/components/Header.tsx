import Link from "next/link";
import { type NextPage } from "next";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex h-[100px] w-full items-center justify-between bg-gradient-to-b from-[rgba(0,0,0,0.12)] to-[rgba(255,255,255,0.12)] px-[7%] backdrop-blur [&>*]:text-white">
      {/* Left Side (branding) */}
      <div className="flex items-center justify-center gap-3">
        {/* Logo */}
        <div className="relative h-[60px] w-[60px]">
          <Image src="/logo.png" height={100} width={100} alt="" />
        </div>
        {/* Typography */}
        <div>
          <h1 className="font-oregon-light text-center text-[22px] uppercase">
            Ocean View
          </h1>
          <h2 className="font-oregon-light mb-3 text-center text-sm uppercase leading-[2px] tracking-[7px]">
            Games
          </h2>
        </div>
      </div>
      {/* Right Side (navigation) */}
      <nav className="font-oregon flex gap-12">
        <Link href="#projects">Projects</Link>
        <Link href="#services">Services</Link>
        <Link href="#team">Team</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
