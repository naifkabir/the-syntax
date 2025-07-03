"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopArrow = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isScrolled && (
        <Link
          href="/"
          className="bottom-5 right-8 z-50 cursor-pointer rounded-full border p-2 fixed border-[#151812] bg-[#fffbed] group"
        >
          <ArrowUp
            className="text-black group-hover:animate-bounce duration-300"
            size={17}
          />
        </Link>
      )}
    </div>
  );
};

export default BackToTopArrow;
