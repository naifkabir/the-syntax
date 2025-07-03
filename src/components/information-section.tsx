import Image from "next/image";
import React from "react";

const InformationSection = () => {
  return (
    <div className="px-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full items-center">
        {/* 1 */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Challenge your <span className="text-indigo-600">Friend</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Stop doing your sport alone and challenge your friend. Who will be
            the best?
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
            Join Community
          </button>
        </div>

        {/* 2 */}
        <div className="w-full grid place-items-center">
          <Image
            src="/img-info.jpg"
            alt="Doctor"
            width={500}
            height={200}
            className="text-blue-500 rounded-md h-[30rem] w-96"
          ></Image>
        </div>

        {/* 3 */}
        <div className="flex flex-col justify-end gap-10 h-full py-10 justify-self-end">
          <div className="">
            <h3 className="font-bold text-lg text-gray-800">Get Inspired</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, autem! Exercitationem asperiores perferendis fugit
              repellat dolorum aut veniam deleniti rem?
            </p>
            <a
              href="#"
              className="text-indigo-600 mt-2 inline-block text-sm font-semibold"
            >
              Explore More
            </a>
          </div>

          <div className="">
            <h3 className="font-bold text-lg text-gray-800">Others Inspired</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              dicta aut vel laborum eaque nulla!
            </p>
            <a
              href="#"
              className="text-indigo-600 mt-2 inline-block text-sm font-semibold"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
