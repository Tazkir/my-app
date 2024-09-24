import React from "react";
import { experiences } from "../../utils/data";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";

function ExpTree() {
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center relative py-8">
      <div className="container mx-auto p-4 max-w-3xl">
        <h1 className="text-2xl font-semibold text-center mb-3">
          My Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <m.div
              key={index}
              className="flex"
              initial={{ y: "10%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="flex flex-col items-center mr-4">
                <div className="w-px h-full bg-gray-300 flex-grow"></div>
                <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center">
                  <BriefcaseIcon className="w-5 h-5 text-white" />
                </div>
                <div className="w-px h-full bg-gray-300 flex-grow"></div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                <h2 className="text-xl font-semibold text-violet-600">
                  {exp.name}
                </h2>
                <h3 className="text-lg font-medium text-gray-700">
                  {exp.position}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {exp.dateRange}
                </div>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpTree;
