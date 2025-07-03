import React from "react";
import Link from "next/link";
import Image from "next/image";

const Social = () => {
  return (
    <div className="pt-5 flex space-x-2">
      {[
        {
          href: "/",
          src: "/social/facebook.svg",
        },
        {
          href: "/",
          src: "/social/instagram.svg",
        },
        {
          href: "/",
          src: "/social/twitter.svg",
        },
        {
          href: "https://api.whatsapp.com/send?phone=917797063266",
          src: "/social/whatsapp.svg",
        },
        {
          href: "/",
          src: "/social/youtube.svg",
        },
      ].map((icon, index) => (
        <Link
          key={index}
          href={icon.href}
          target="_blank"
          passHref
          className="flex items-center gap-2 p-1"
        >
          <Image
            src={icon.src}
            alt="Social Icon"
            width={35}
            height={35}
            className="hover:scale-110 transition-transform duration-300"
          />
        </Link>
      ))}
    </div>
  );
};

export default Social;
