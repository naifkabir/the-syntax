"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import MainButton from "./ui-elements/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/utils/reveal";

const Card = ({
  src,
  title,
  desc,
}: {
  src?: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="px-8 pt-8 pb-2 relative text-[#fff] sm:border-l border-[#dcdcdc] min-h-full grid overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>

      <div className="z-10">
        <div className="fill-violet-500 w-12">
          {src || (
            <>
              <svg
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
              </svg>
            </>
          )}
        </div>
        <h1 className="font-bold text-xl mt-8 mb-2">{title || ""}</h1>
        <p className="text-sm text-zinc-300 leading-6">{desc || ""}</p>

        <div className="mt-10">
          <Link href="/" className="w-fit self-end">
            <MainButton text="Read more" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 1440);
    }
  }, []);

  return (
    <div className="w-full px-6 lg:px-16 xl:px-32 py-10 md:py-20 mb-10 overflow-hidden min-h-[50%] grid items-center">
      {isMobile ? (
        <div>
          <Reveal width="100%">
            <div className="text-center">
              <span className="uppercase text-gray-400 font-semibold text-sm tracking-widest">
                Training Programs We Offer For You
              </span>
              <h1 className="font-bold text-3xl mt-2 text-white">
                What we offer
              </h1>
            </div>
          </Reveal>

          <section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 mt-16 gap-8">
            <motion.div
              initial={{ opacity: 0, translateX: "-100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card
                src=""
                title="UI / UX Creative Design"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card
                src=""
                title="Java Learning"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateX: "-100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card
                src=""
                title="JavaScript Learning"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card
                src=""
                title="Web Development"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
              />
            </motion.div>
          </section>
        </div>
      ) : (
        <motion.section
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center block">
            <span className="uppercase text-gray-400 font-semibold text-sm tracking-widest">
              Training Programs We Offer For You
            </span>
            <h1 className="font-bold text-3xl mt-2 text-white">
              What we offer
            </h1>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-16 gap-8">
            <Card
              src=""
              title="UI / UX Creative Design"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
            />
            <Card
              src=""
              title="Java Learning"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
            />
            <Card
              src=""
              title="JavaScript Learning"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
            />
            <Card
              src=""
              title="Web Development"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
            />
          </section>
        </motion.section>
      )}
    </div>
  );
};

export default ServicesSection;
