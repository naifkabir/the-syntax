"use client";

import Link from "next/link";
import MainButton from "./ui-elements/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const blogData = [
    {
      month: "Jul",
      date: "18",
      category: "LANGUAGE",
      title: "Why JavaScript is the Best Language",
      description:
        "JavaScript is a versatile language, but it has its quirks. This blog explores the best practices and features that make JavaScript a powerful tool for developers...",
      writer: "Naif Kabir",
      role: "UI DEVELOPER",
      viewCount: 1500,
      comments: 5,
      image: "",
    },
    {
      month: "Jul",
      date: "19",
      category: "ASYNCHRONOUS",
      title: "Understanding Asynchronous JavaScript",
      description:
        "Asynchronous JavaScript is a powerful feature that allows for non-blocking code execution. This blog delves into the intricacies of callbacks, promises, and async/await...",
      writer: "John Doe",
      role: "FRONTEND DEVELOPER",
      viewCount: 2000,
      comments: 483,
      image: "",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 1440);
    }
  }, []);

  return (
    <section className="bg-[#fffbed] overflow-hidden px-6 lg:px-16 xl:px-32">
      <div className="lg:flex items-center justify-between space-y-5 lg:space-y-0 mt-10 mb-16">
        <div>
          <div className="font-bold text-3xl mt-2 text-black">
            Read our popular blogs
          </div>
          <div className="flex items-center gap-x-2 mt-1">
            <hr className="mt-1.5 bg-black outline-0 h-0.5 w-[26%]" />
            <hr className="mt-1.5 bg-black outline-0 h-0.5 w-[15%]" />
            <hr className="mt-1.5 bg-black outline-0 h-0.5 w-[8%]" />
          </div>
        </div>
        <Link href="/" className="w-fit self-end">
          <MainButton
            text="Click to view our more blogs"
            secondary="You are a reading person"
          />
        </Link>
      </div>

      <div className="md:px-5 pb-20 mx-auto">
        {isMobile ? (
          <div>
            {blogData.map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap -m-12"
          >
            {blogData.map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;

const BlogCard = ({
  blog,
}: {
  blog: {
    date: string;
    category: string;
    title: string;
    description: string;
    writer: string;
    role: string;
    month: string;
    image: string;
    viewCount: number;
    comments: number;
  };
}) => {
  return (
    <div className="py-8 md:py-10 md:px-10 md:w-1/2 flex flex-col items-start">
      <span className="inline-block py-1 px-2 rounded bg-gray-800 text-white text-opacity-75 text-xs font-medium tracking-widest">
        {blog.category}
      </span>
      <h2 className="sm:text-2xl text-xl title-font font-semibold text-black mt-4 mb-4">
        {blog.title}
      </h2>
      <p className="leading-relaxed mb-8">{blog.description}</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
        <Link href={`/`}>
          <MainButton text="Read more" />
        </Link>
        <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {blog.viewCount}
        </span>
        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
          </svg>
          {blog.comments}
        </span>
      </div>
      <a className="inline-flex items-center">
        <Image
          width={100}
          height={100}
          alt="blog"
          src={blog?.image || "/courses-section/course-01.jpg"}
          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
        />
        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-black">
            {blog.writer}
          </span>
          <span className="text-gray-500 text-xs tracking-widest mt-0.5">
            {blog.role}
          </span>
        </span>
      </a>
    </div>
  );
};
