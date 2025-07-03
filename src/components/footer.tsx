"use client";

import Image from "next/image";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Link from "next/link";
import Social from "./footer-section/social";
import { BiLogoPlayStore } from "react-icons/bi";
import { RiAppStoreLine } from "react-icons/ri";
import { TiVendorAndroid } from "react-icons/ti";
import { Reveal } from "@/utils/reveal";

const Footer = () => {
  // const containerStyle = {
  //   width: "100%",
  //   height: "200px",
  // };

  // const center = {
  //   lat: -3.745,
  //   lng: -38.523,
  // };

  return (
    <footer className="relative bg-black text-white pt-20 pb-60 z-10 px-6 lg:px-16 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-4">
            {/* <Image
              src="/logo/Logo.png"
              alt="School Logo"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
            /> */}
            <Reveal>
              <p className="text-md sm:text-2xl font-bold">The Syntax</p>
              <p className="text-sm md:text-[16px] flex items-center gap-3 mt-1 text-gray-300">
                <span>Lets learn together</span>
                <span className="h-3 w-[2px] rounded-full bg-gray-300"></span>
                <span>Build skills for the future</span>
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="pt-10">
              <p className="text-sm md:text-[16px] max-w-96 text-gray-300">
                Nurturing Tomorrow&apos;s Visionaries with Excellence in
                Education.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Social />
          </Reveal>

          <Reveal>
            <div className="mt-28">
              <p className="text-sm md:text-[16px] max-w-96 text-gray-300">
                &copy; 2025 - All rights reserved. - The Syntax
              </p>
            </div>
          </Reveal>
        </div>

        {/* Column 2 */}
        <div className="text-gray-300">
          <Reveal>
            <h3 className="text-md sm:text-lg font-bold mb-8 text-white">
              Contact Us
            </h3>
          </Reveal>
          <Reveal>
            <div className="flex items-center mb-2">
              <Image
                src="/icons/location.svg"
                alt="Location Icon"
                width={26}
                height={26}
              />
              <p className="ml-4 text-sm md:text-[16px] font-semibold">
                Kolkata, West Bengal, 700001
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-center mb-2">
              <Image
                src="/icons/call.svg"
                alt="Phone Icon"
                width={26}
                height={26}
              />
              <p className="ml-4 text-sm md:text-[16px] font-semibold">
                7797063266 | 8145312848 | 7003907015 | 7384731240
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-center">
              <Image
                src="/icons/mail.svg"
                alt="Email Icon"
                width={26}
                height={26}
              />
              <p className="ml-4 text-sm md:text-[16px] font-semibold">
                thesyntax.connect@gmail.com
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="md:mt-8 lg:mt-[40px] xl:mt-16 text-sm md:flex items-center gap-3 hidden">
              <Link href="/" className="hover:underline">
                Privacy Policy
              </Link>
              <span className="h-3 w-[2px] rounded-full bg-white"></span>
              <Link href="/" className="hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Column 3 */}
        <Reveal>
          <div className="md:ml-20">
            <h3 className="text-md sm:text-lg font-bold mb-8 text-white">
              Visit Us
            </h3>
            {/* <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              Google Map
            </GoogleMap>
          </LoadScript> */}
            <p className="mt-4 text-sm md:text-[16px] text-gray-300">
              Give us a visit to know more!
            </p>

            <div className="mt-10 text-sm md:text-[16px] flex gap-5 text-gray-300">
              <div>
                <p>Download our app</p>
                <hr className="h-[1px] w-[40%] bg-white mt-1 rounded-full ml-[1px]" />
                <div className="flex gap-x-2 mt-3">
                  <Link href="/">
                    <BiLogoPlayStore className="text-2xl transition-all duration-300 hover:text-white" />
                  </Link>
                  <Link href="/">
                    <RiAppStoreLine className="text-2xl transition-all duration-300 hover:text-white" />
                  </Link>
                  <Link href="/">
                    <TiVendorAndroid className="text-2xl transition-all duration-300 hover:text-white" />
                  </Link>
                </div>
              </div>

              <div className="h-32 w-32 bg-white rounded-md"></div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-5 text-sm flex items-center gap-3 md:hidden">
            <Link href="/privacy_policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="h-3 w-[2px] rounded-full bg-white"></span>
            <Link href="/terms&conditions" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
