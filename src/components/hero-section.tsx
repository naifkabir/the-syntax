"use client";

import { BotMessageSquare, SparklesIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import HeroSectionButton from "./hero-section-components/button";
import StarsCanvas from "./styles/star-background";
import Image from "next/image";
import MainButton from "./ui-elements/button";
import Social from "./footer-section/social";
import { CiDesktopMouse2 } from "react-icons/ci";
import { Reveal } from "@/utils/reveal";

const HeroSection = () => {
  return (
    <main className="min-h-screen text-[#fff] px-6 lg:px-32 bg-gradient-to-br from-[#000] mt-3 to-[#333399] grid items-center relative overflow-hidden">
      <StarsCanvas />

      <section className="grid gap-10 items-center h-full">
        <section className="grid items-start mt-64 md:mt-0 md:items-center h-full">
          <div className="grid gap-8 md:gap-10 z-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromTop(0.5)}
              className="welcome-box py-[6px] px-[18px] sm:py-[8px] sm:px-[20px] border border-[#6148aa] opacity-[0.9]"
            >
              <SparklesIcon
                size={20}
                className="text-[#9e7eff] mr-[10px] h-4 w-4 sm:h-5 sm:w-5"
              />
              <h1 className="welcome-text text-[13px] text-[#9e7eff] font-semibold">
                Be a Programmer into The Codeverse
              </h1>
            </motion.div>

            <Reveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-bold lg:leading-[70px]">
                Empower Your <br /> Future with{" "}
                <motion.span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #8b5cf6, #ec4899, #06b6d4)",
                    backgroundSize: "200% 100%",
                  }}
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear",
                  }}
                >
                  Quality
                </motion.span>{" "}
                Education
              </h1>
            </Reveal>

            <Typewriter
              text={[
                "Empower Your Future with Quality Education at Our Online Learning Platform.",
                "Unlock Your Potential with Our Educational Resources and Expert Guidance.",
                "The Future of Learning Awaits You.",
              ]}
            />

            <div className="flex flex-col md:flex-row gap-5 z-[1]">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.5)}
              >
                <HeroSectionButton />
              </motion.div>
              <motion.div
                className="w-fit"
                initial="hidden"
                animate="visible"
                variants={slideInFromRight(1)}
              >
                <MainButton text="Contact us" />
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      {/* Image Container */}
      <section className="absolute bottom-1/2 right-0 -z-0 h-[200px] w-[700px] hidden md:block">
        <Image
          src="/hero-section/hero.png"
          alt="Description"
          layout="responsive"
          width={700}
          height={200}
          className="aspect-square"
        />
      </section>
      <section className="absolute bottom-0 right-0 -z-0 w-[500px] md:hidden">
        <Image
          src="/hero-section/hero.png"
          alt="Description"
          layout="responsive"
          width={700}
          height={200}
          className="aspect-square"
        />
      </section>
      {/* Image Container */}

      <div className="absolute bottom-0 lg:px-32 flex justify-center items-center gap-5 py-5 z-[1] w-full lg:w-fit">
        <Social />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-32 py-5 z-[1] hidden md:block">
        <CiDesktopMouse2 className="text-3xl animate-bounce" />
      </div>
    </main>
  );
};

export default HeroSection;

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DALEY_IN_TEXT = 5500;

const Typewriter = ({ text }: { text: any }) => {
  const [typedTextIndex, setTypedTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedTextIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, SWAP_DALEY_IN_TEXT);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex items-start gap-3 h-20 z-20">
      <BotMessageSquare className="text-lg shrink-0 hidden sm:block" />
      <p className="text-base lg:text-lg text-bold text-gray-300">
        {text[typedTextIndex].split("").map((char: string, index: number) => {
          return (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: MAIN_FADE_DURATION,
                delay: FADE_DELAY,
                ease: "easeInOut",
              }}
              key={`${typedTextIndex}-${index}`}
              className="relative"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0,
                  delay: index * LETTER_DELAY,
                }}
              >
                {char}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: BOX_FADE_DURATION,
                  delay: index * LETTER_DELAY,
                  times: [0, 0.1, 1],
                  ease: "easeInOut",
                }}
                className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
              />
            </motion.span>
          );
        })}
      </p>
    </div>
  );
};
