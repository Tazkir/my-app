import React from "react";
import data from "../../utils/data";
import Image from "next/image";

function Skill() {
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center relative py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          My Current Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data.mainStack.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 p-4 flex flex-col items-center justify-center group"
            >
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={tech.image}
                  alt={`${tech.name} logo`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <h3 className="text-sm font-medium text-center text-gray-700">
                {tech.name}
              </h3>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
