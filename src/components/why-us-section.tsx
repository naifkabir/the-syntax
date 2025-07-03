"use client";

import { useState } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Lens } from "./ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import MainButton from "./ui-elements/button";

const WhyUsSection = () => {
  const [hoveringOne, setHoveringOne] = useState(false);
  const [hoveringTwo, setHoveringTwo] = useState(false);

  return (
    <BackgroundGradientAnimation>
      <div className="relative z-50 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
        <main className="px-6 lg:px-16 xl:px-32 py-10 md:py-20 overflow-hidden grid gap-36">
          {/* Section 01 */}
          <section className="grid xl:grid-cols-2 relative gap-10">
            <motion.div
              initial={{ opacity: 0, translateX: "-100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute text-[120px] hidden lg:block"
            >
              01
            </motion.div>

            <div className="w-full grid justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="w-full sm:w-[25rem] h-[20rem] sm:h-full rounded-md overflow-hidden"
              >
                <Lens hovering={hoveringOne} setHovering={setHoveringOne}>
                  <Image
                    src="/why-choose-us/why-us-01.png"
                    alt="image"
                    width={500}
                    height={1000}
                    className="h-full w-full object-cover object-top"
                  />
                </Lens>
              </motion.div>
            </div>

            <div className="self-start grid gap-16 relative text-right h-full">
              <motion.h1
                initial={{ opacity: 0, translateX: "100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-2xl sm:text-4xl font-bold w-full capitalize leading-8 md:leading-11"
              >
                Lorem ipsum dolor <br />
                sit amet consectetur adipisicing elit. <br />
                Veniam
                <br /> incidunt odit sed consequatur ex <br />
                neque sunt architecto perspiciatis consectetur.
              </motion.h1>
              <div className="self-end w-full flex flex-col items-end gap-5">
                <motion.p
                  initial={{ opacity: 0, translateX: "100%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="text-gray-300 text-[14px] md:text-[17px] font-medium w-[60%] md:w-[46%] leading-6"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  rerum, sapiente non harum perferendis accusamus quibusdam
                  deleniti ea cumque odio.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, translateX: "-100%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="w-fit"
                >
                  <MainButton text="Contact us" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 02 */}
          <section className="grid xl:grid-cols-2 relative gap-10">
            <div className="self-start grid gap-16 relative text-left h-full">
              <motion.h1
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-2xl sm:text-4xl font-bold w-full capitalize leading-8 md:leading-11"
              >
                Lorem ipsum dolor <br />
                sit amet consectetur adipisicing elit. <br />
                Veniam
                <br /> incidunt odit sed consequatur ex <br />
                neque sunt architecto perspiciatis consectetur.
              </motion.h1>
              <div className="self-end flex flex-col items-start gap-5">
                <motion.p
                  initial={{ opacity: 0, translateX: "-100%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="text-gray-300 text-[14px] md:text-[17px] font-medium w-[60%] md:w-[46%] leading-6"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  rerum, sapiente non harum perferendis accusamus quibusdam
                  deleniti ea cumque odio.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, translateX: "-100%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="w-fit"
                >
                  <MainButton text="Contact us" />
                </motion.div>
              </div>
            </div>

            <div className="w-full grid justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="w-full sm:w-[25rem] h-[20rem] sm:h-full rounded-md overflow-hidden"
              >
                <Lens hovering={hoveringTwo} setHovering={setHoveringTwo}>
                  <Image
                    src="/why-choose-us/why-us-02.png"
                    alt="image"
                    width={500}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </Lens>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute text-[120px] right-0 hidden lg:block"
            >
              02
            </motion.div>
          </section>
        </main>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default WhyUsSection;
