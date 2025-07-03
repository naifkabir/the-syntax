import React from "react";
import { MaskContainer } from "./ui/svg-mask-effect";
import { UserTooltip } from "./powerful-text-section-components/user-tooltip";

const PowerfulTextSection = () => {
  return (
    <main className="relative">
      <MaskContainer
        revealText={
          <p className="text-center text-[22px] lg:text-3xl font-bold text-white max-w-4xl capitalize md:leading-9 2xl:leading-12">
            The Syntex turns raw ideas into digital power — fast, flawless, and
            scalable.
          </p>
        }
        className="text-black"
      >
        Code that commands. Design that converts. Training that transforms
        beginners into builders.
      </MaskContainer>

      <UserTooltip />
    </main>
  );
};

export default PowerfulTextSection;
