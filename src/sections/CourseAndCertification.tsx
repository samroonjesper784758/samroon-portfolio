import React from "react";
import { OpenLink } from "../assets/svgs/OpenLink";
import Download from "../assets/svgs/Download";

export default function CourseAndCertification() {
  const courses_history = [
    {
      institute: "Peak Solutions College",
      course: "Web Development",
      duration: "3 months",
    },
    {
      institute: "Corvit Systems Lahore",
      course: "Web and Mobile App Development",
      duration: "6 months",
    },
  ];
  return (
    <div className="w-[95%] mx-auto grid grid-cols-12 md:gap-0 gap-5">
      <div className="md:col-span-6 col-span-12">
        <p className="sm:text-2xl text-xl font-semibold mb-3 text-headingColor">
          🏅 Course & Certification
        </p>

        {courses_history.map((item, index) => {
          return (
            <div
              key={index}
              className={`shadow-md bg-white border-l-4 p-5 border-[#4F46E5] rounded ${
                index === courses_history.length - 1 ? "mb-0" : "mb-5"
              }`}
            >
              <div className="flex flex-col gap-2">
                <p className="sm:text-xl text-[1rem] font-semibold text-headingColor">
                  {item.institute}
                </p>
                <p className="sm:text-xl text-[1rem] font-medium text-paragraphColor">
                  {item.course}
                </p>
                <p className="sm:text-xl text-[1rem] font-medium text-paragraphColor">
                  {item.duration}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:col-span-6 col-span-12 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-1 items-center">
          <p className="text-xl font-semibold text-headingColor">My CV</p>
          <p className="text-xl font-semibold text-headingColor">Download my CV</p>
        </div>
        <a
          download
          href="/cv.pdf"
          className="animate-bounce h-[6rem] w-[6rem] rounded-full bg-[#ededed] shadow-lg flex flex-col items-center justify-center"
        >
          <Download />
          <p className="text-paragraphColor text-[1rem]">CV</p>
        </a>
      </div>
    </div>
  );
}
