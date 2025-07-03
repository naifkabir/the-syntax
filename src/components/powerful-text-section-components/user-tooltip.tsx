"use client";

import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "",
  },
];

export function UserTooltip() {
  return (
    <div className="flex items-center border-b-[2px] py-10">
      <hr className="bg-white w-full h-0.5" />
      <div className="flex flex-row items-center justify-center w-[60rem] sm:w-full">
        <AnimatedTooltip items={people} />
      </div>
      <hr className="bg-white w-full h-0.5" />
    </div>
  );
}
