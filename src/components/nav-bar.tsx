"use client";

import { House } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LuCircleUserRound } from "react-icons/lu";
import {
  FiHome,
  FiInfo,
  FiBookOpen,
  FiMail,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: any;
}) => {
  const ref = useRef<any>(null);
  return (
    <Link
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          left: ref.current.offsetLeft,
          opacity: 1,
        });
      }}
      href="/"
      className="transition duration-300 flex items-center gap-2 px-5 py-1.5 rounded-full mix-blend-difference relative z-10"
    >
      {children}
    </Link>
  );
};

const Cursor = ({ position, isScrolled }: any) => {
  return (
    <motion.li
      animate={position}
      className={`absolute h-9 rounded-full z-0 ${
        isScrolled ? "bg-transparent border border-[#151812]" : "bg-white"
      }`}
    />
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-colors duration-300 px-6 lg:px-32 backdrop-blur-lg ${
          isScrolled
            ? "bg-[#fffbed] shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        <div className="py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">The Syntax</h1>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
            }}
            className="hidden lg:flex text-sm items-center justify-center font-semibold gap-8 relative z-40"
          >
            <Tab setPosition={setPosition}>
              <House size={17} />
            </Tab>
            <Tab setPosition={setPosition}>ABOUT US</Tab>
            <Tab setPosition={setPosition}>COURSES</Tab>
            <Tab setPosition={setPosition}>CONTACT</Tab>

            <Cursor position={position} isScrolled={isScrolled} />
          </div>

          {/* Login Icon (Mobile) */}
          <section className="flex items-center gap-5">
            <LuCircleUserRound size={25} />

            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </section>
        </div>
      </nav>

      <motion.div
        ref={mobileMenuRef}
        className={`lg:hidden fixed z-[9999] top-0 right-0 transform h-full w-96 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out bg-[#000000] text-base text-white`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-7 text-black text-3xl bg-[#fffbed] px-2.5 rounded-full"
        >
          &times;
        </button>

        <div className="mt-28">
          <div className="flex flex-col gap-y-3 mx-10">
            <Link
              href="/"
              className="px-5 border-l py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#444444] active:bg-[#666666] focus:outline-none flex items-center gap-3"
            >
              <FiHome size={17} />
              Home
            </Link>
            <Link
              href="/"
              className="px-5 border-l py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#444444] active:bg-[#666666] focus:outline-none flex items-center gap-3"
            >
              <FiInfo size={17} />
              About Us
            </Link>
            <Link
              href="/"
              className="px-5 border-l py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#444444] active:bg-[#666666] focus:outline-none flex items-center gap-3"
            >
              <FiBookOpen size={17} />
              Courses
            </Link>
            <Link
              href="/"
              className="px-5 border-l py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#444444] active:bg-[#666666] focus:outline-none flex items-center gap-3"
            >
              <FiMail size={17} />
              Contact
            </Link>
          </div>

          <hr className="my-5 border-t-2 border-[#444444]" />

          <div className="hover:bg-[#fff] flex justify-between mx-10">
            <Link
              href="/"
              className="px-5 py-2 rounded-lg border transition duration-300 ease-in-out hover:bg-[#444444] active:bg-[#666666] focus:outline-none flex items-center gap-3"
            >
              <FiLogIn size={17} />
              Login
            </Link>
            <Link
              href="/"
              className="px-5 py-2 rounded-lg border transition duration-300 ease-in-out hover:bg-[#444444] active:bg-[#666666] focus:outline-none flex items-center gap-3"
            >
              <FiUserPlus size={17} />
              Sign Up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
