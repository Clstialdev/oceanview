import Link from "next/link";
import { type NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex h-[100px] w-full items-center justify-between bg-opacity-20 bg-gradient-to-b from-black to-white px-[7%] backdrop-blur-md [&>*]:text-white">
      {/* Left Side (branding) */}
      <div className="flex items-center justify-center gap-2">
        {/* Logo */}
        <div>
          <h1>PLHLDR</h1>
        </div>
        {/* Typography */}
        <div>
          <h1 className="text-center">Ocean View</h1>
          <h2 className="text-center">Games</h2>
        </div>
      </div>
      {/* Right Side (navigation) */}
      <nav className="flex gap-12">
        <Link href="#projects">Projects</Link>
        <Link href="#services">Services</Link>
        <Link href="#team">Team</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
