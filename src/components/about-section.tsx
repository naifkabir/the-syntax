"use client";

import { slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedTestimonialsDemo } from "./about-sections-components/out-team-card";
import MainButton from "./ui-elements/button";
import { Reveal } from "@/utils/reveal";

const AboutSection = () => {
  return (
    <main className="px-6 lg:px-16 xl:px-32 bg-[#fffbed] overflow-hidden min-h-screen">
      <section className="grid lg:grid-cols-2 py-20 relative gap-10">
        <motion.section
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-[450px] w-full 2xl:w-[60%] 2xl:relative 2xl:border-2 rounded-lg">
            <Image
              src="/about-section/about-img.jpg"
              alt="About Image"
              width={1000}
              height={1000}
              className="w-full h-[100%] object-fill 2xl:absolute top-10 left-10 rounded-lg"
            ></Image>
          </div>
        </motion.section>

        <div className="justify-self-center self-center grid relative">
          <Reveal>
            <span className="uppercase text-gray-400 font-semibold text-sm tracking-widest">
              About Us
            </span>
            <h1
              className="text-2xl sm:text-4xl font-extrabold w-full sm:w-[90%]"
              style={{ lineHeight: "1.4" }}
            >
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-gray-700 dark:text-gray-400 text-[14px] md:text-[17px] font-medium w-full my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis illo adipisci amet soluta commodi earum, aut pariatur
              tenetur sapiente fugiat enim ratione a repellat, possimus
              molestiae beatae saepe. Molestiae possimus saepe quasi at
              obcaecati facilis culpa architecto, consectetur error nihil
              distinctio accusantium expedita dolor? Impedit molestias sit natus
              dolorem reiciendis!
            </p>
            <motion.div
              className="w-fit"
              initial="hidden"
              animate="visible"
              variants={slideInFromRight(1)}
            >
              <MainButton
                text="Explore the values that define us"
                secondary="Seems you're into our story"
              />
            </motion.div>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10"
          >
            <AnimatedTestimonialsDemo />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
