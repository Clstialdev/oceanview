/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import { type FormEvent, useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ThreeDeeCardWrapper } from "../components/ThreeDeeCardWrapper";

interface ContactProps {
  bgcolor?: string | undefined;
}

const Contact: NextPage<ContactProps> = ({ bgcolor }) => {
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const form = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSubmitActive, setIsSubmitActive] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitActive(false);

    emailjs
      .sendForm(
        "service_iuqwidr",
        "template_fh4d4hv",
        (form as any).current,
        "p_upLlWlgv6vB9w0p"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitActive(true);
        }
      );
  };

  return (
    <div
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#01090B] to-[#000000] px-[5%]"
      style={{ background: bgcolor }}
      id="contact"
    >
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-[5%]">
        <p className=" font-oregon-demibold mb-8 text-[10px] uppercase text-white md:mb-0 md:text-xs">
          Ready for your next project?
        </p>
        <div>
          <Link href="mailto:contact@oceanviewgames.co.uk">
            <h1 className="font-oregon text-center text-6xl text-white sm:my-4 sm:text-7xl lg:text-[200px]">{`Contact Us`}</h1>
          </Link>
          <div className="mb-12 flex w-full justify-center sm:mb-0">
            <form
              ref={form}
              onSubmit={(e) => sendEmail(e)}
              className="flex w-full flex-col items-center space-y-2 sm:w-1/2 sm:min-w-[500px]"
            >
              <label className="text-white text-opacity-60">Name:</label>
              <ThreeDeeCardWrapper childRef={nameRef} widthFull>
                <input
                  type="text"
                  ref={nameRef}
                  name="user_name"
                  placeholder="ex: John Doe"
                  className="w-full rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 bg-[#385140] bg-opacity-[15%] py-2 px-4 text-white outline-none sm:w-[50%] sm:min-w-[500px]"
                />
              </ThreeDeeCardWrapper>
              <label className="text-white text-opacity-60">Email:</label>
              <ThreeDeeCardWrapper childRef={emailRef} widthFull>
                <input
                  type="email"
                  ref={emailRef}
                  name="user_email"
                  placeholder="ex: john@doe.xyz"
                  className="w-full rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 bg-[#385140] bg-opacity-[15%] py-2 px-4 text-white outline-none sm:w-[50%] sm:min-w-[500px]"
                />
              </ThreeDeeCardWrapper>
              <label className="text-white text-opacity-60">Message:</label>
              <ThreeDeeCardWrapper childRef={messageRef} widthFull>
                <textarea
                  name="message"
                  ref={messageRef}
                  placeholder="Your message here"
                  className="w-full rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 bg-[#385140] bg-opacity-[15%] py-2 px-4 text-sm text-white outline-none sm:w-[50%] sm:min-w-[500px]"
                  rows={10}
                />
              </ThreeDeeCardWrapper>
              <input
                type="submit"
                value={
                  isSubmitActive
                    ? "Send"
                    : !submitted
                    ? "Please Wait"
                    : "Message Sent!"
                }
                disabled={!isSubmitActive}
                className="w-full rounded border-r-[1px] border-t-[1px] border-l-[1px] border-white border-opacity-5 bg-[#385140] bg-opacity-[15%] py-2 px-4 text-sm text-white outline-none duration-300 hover:cursor-pointer hover:bg-[#45624e] disabled:cursor-not-allowed disabled:bg-gray-700 sm:w-[50%] sm:min-w-[500px]"
              />
            </form>
          </div>
          <div className="-mt-12 h-[2px] w-[0] bg-white"></div>
        </div>

        <div className="absolute bottom-0 mb-12 flex h-[100px] w-full flex-col items-center justify-center gap-4 px-[5%] md:mb-0 md:flex-row md:justify-between md:gap-0">
          <p
            className="w-[200px] text-center text-xs uppercase text-white hover:cursor-pointer"
            onClick={() => scrollTop()}
          >
            Ocean View Games
          </p>
          <div className="flex w-full justify-center gap-4">
            <Link href="#">
              <div className="h-fit w-fit rounded border-[1px] border-white bg-black py-2 px-4 text-white duration-150 hover:cursor-pointer hover:bg-white hover:text-black">
                LinkedIn
              </div>
            </Link>
            <Link href="#">
              <div className="h-fit w-fit rounded border-[1px] border-white bg-black py-2 px-4 text-white duration-150 hover:cursor-pointer hover:bg-white hover:text-black">
                Upwork
              </div>
            </Link>
            <Link href="#">
              <div className="h-fit w-fit rounded border-[1px] border-white bg-black py-2 px-4 text-white duration-150 hover:cursor-pointer hover:bg-white hover:text-black">
                Twitter
              </div>
            </Link>
          </div>
          <p className="w-[100px] text-center text-xs text-white">© 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
