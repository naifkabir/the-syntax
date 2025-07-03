import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { PiFlyingSaucerFill } from "react-icons/pi";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

const BuildYourCareerWithUsSection = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "your",
    },
    {
      text: "career",
    },
    {
      text: "with",
    },
    {
      text: "The Syntax.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[25rem] relative bg-gradient-to-br from-[#333399] to-[#000000] mt-10">
      <ShootingStars />
      <StarsBackground />

      <PiFlyingSaucerFill className="mb-4 text-3xl text-neutral-200" />
      <p className="text-neutral-200 text-sm sm:text-base">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
};

export default BuildYourCareerWithUsSection;
