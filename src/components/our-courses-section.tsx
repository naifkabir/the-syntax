"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainButton from "./ui-elements/button";
import CourseCard from "./our-courses-section-components/course-card";
import { motion } from "framer-motion";

const OurCoursesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 1440);
    }
  }, []);

  return (
    <main className="text-[#fff] overflow-hidden min-h-screen">
      <div className="px-6 lg:px-16 xl:px-32 py-16 md:py-32 flex flex-col gap-28">
        <div className="lg:flex items-center justify-between space-y-5 lg:space-y-0">
          <div>
            <div className="font-bold text-2xl sm:text-3xl mt-2 text-white">
              Courses we offer to build your skills
            </div>
            <div className="flex items-center gap-x-2 mt-1">
              <hr className="mt-1.5 bg-white outline-0 h-0.5 w-[26%]" />
              <hr className="mt-1.5 bg-white outline-0 h-0.5 w-[15%]" />
              <hr className="mt-1.5 bg-white outline-0 h-0.5 w-[8%]" />
            </div>
          </div>
          <Link href="/" className="w-fit self-end">
            <MainButton
              text="Click to view our more courses for you"
              secondary="Your future starts with just one click"
            />
          </Link>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-y-10 gap-6">
            <div>
              <CourseCard
                image="/courses-section/course-01.jpg"
                title="JavaScript for Beginners"
                description="Learn the basics of JavaScript, the most popular programming language in the world."
                instructor="Rohan Debnath"
                price="99"
                badge="NEW"
                highlight="JavaScript"
                colorName="green"
              />
            </div>

            <div>
              <CourseCard
                image="/courses-section/course-02.jpg"
                title="Advanced React Development"
                description="Master React.js and build powerful web applications with ease."
                instructor="Naif Kabir"
                price="199"
                badge="POPULAR"
                highlight="React Development"
                colorName="green"
              />
            </div>

            <div>
              <CourseCard
                image="/courses-section/course-03.jpg"
                title="Full Stack Web Development"
                description="Build complete web applications from scratch using the MERN stack."
                instructor="Souvik Adhikary"
                price="299"
                badge="POPULAR"
                highlight="Web Development"
                colorName="green"
              />
            </div>

            <div>
              <CourseCard
                image="/courses-section/course-01.jpg"
                title="JavaScript for Beginners"
                description="Learn the basics of JavaScript, the most popular programming language in the world."
                instructor="Zunayed Ahmed"
                price="499"
                badge="NEW"
                highlight="JavaScript"
                colorName="green"
              />
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-y-10 gap-6"
          >
            <div>
              <CourseCard
                image="/courses-section/course-01.jpg"
                title="JavaScript for Beginners"
                description="Learn the basics of JavaScript, the most popular programming language in the world."
                instructor="Rohan Debnath"
                price="99"
                badge="NEW"
                highlight="JavaScript"
                colorName="green"
              />
            </div>

            <div>
              <CourseCard
                image="/courses-section/course-02.jpg"
                title="Advanced React Development"
                description="Master React.js and build powerful web applications with ease."
                instructor="Naif Kabir"
                price="199"
                badge="POPULAR"
                highlight="React Development"
                colorName="green"
              />
            </div>

            <div>
              <CourseCard
                image="/courses-section/course-03.jpg"
                title="Full Stack Web Development"
                description="Build complete web applications from scratch using the MERN stack."
                instructor="Souvik Adhikary"
                price="299"
                badge="POPULAR"
                highlight="Web Development"
                colorName="green"
              />
            </div>

            <div>
              <CourseCard
                image="/courses-section/course-01.jpg"
                title="JavaScript for Beginners"
                description="Learn the basics of JavaScript, the most popular programming language in the world."
                instructor="Zunayed Ahmed"
                price="499"
                badge="NEW"
                highlight="JavaScript"
                colorName="green"
              />
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default OurCoursesSection;
