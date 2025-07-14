import React from "react";
import DisplaySkills from "../components/DisplaySkills";

const experience_points = [
  <>
    <span className="font-bold">Developed responsive web & mobile apps</span>{" "}
    using{" "}
    <span className="font-bold">React.js, React Native, and TypeScript</span>{" "}
    for a seamless user experience
  </>,
  <>
    Optimized <span className="font-bold">RESTful APIs</span> with{" "}
    <span className="font-bold">Axios, React Query, Redux, and Zustand</span>{" "}
    for efficient data handling.
  </>,
  <>
    <span className="font-bold">Built reusable UI components</span> with Styled
    Components, <span className="font-bold">Tailwind CSS</span>, and React
    Native Paper to enhance maintainability.
  </>,
  <>
    <span className="font-bold">Implemented authentication</span> flows{" "}
    <span className="font-bold">(login, signup, OTP, password reset)</span>{" "}
    using <span className="font-bold">Firebase Auth & JWT.</span>
  </>,
  <>
    <span className="font-bold">Improved app performance</span> with{" "}
    <span className="font-bold">
      lazy loading, memoization (React.memo, useCallback, useMemo)
    </span>
    , and <span className="font-bold">reducing re-renders.</span>
  </>,
  <>
    <span className="font-bold">
      Integrated Google Maps, FCM push notifications
    </span>{" "}
    to enhance functionality.
  </>,
];

const gained_skills = [
  "HTML",
  "CSS3",
  "Javascript(ES6+)",
  "Typescript",
  "React js",
  "React Native",
  "Responsive Web Designs(RWD)",
  "REST API's",
  "React Query",
  "UI/UX Principles",
  "JWT",
  "OAuth",
  "Firebase Auth",
  "Redux",
  "Zustand",
  "React Context",
  "Async Storage",
  "Git",
  "Github",
  "Express",
  "Node js",
];

export default function Experience() {
  return (
    <div className="w-[95%] mx-auto grid grid-cols-12">
      <div className="md:col-span-6 col-span-12 p-5 flex flex-col gap-3 justify-center">
        <p className="sm:text-2xl text-xl font-semibold text-center">
          🛠️ Technical Skills
        </p>
        <p className="text-[1rem] font-medium mb-5 text-center">
          Below are the Tools and Technologies I Used:
        </p>
        <DisplaySkills skills={gained_skills} />
      </div>
      <div className="md:col-span-6 col-span-12 p-5 border-l-4 border-[#4F46E5] rounded flex flex-col gap-3 bg-white shadow-md">
        <p className="sm:text-2xl text-xl font-semibold">
          🧑‍💻 My Professional Experience
        </p>
        <div>
          <div className="sm:flex flex-row items-center justify-between mb-5">
            <p className="md:text-xl text-lg font-bold">RhodiumTech</p>
            <p className="md:text-xl text-lg font-bold">
              July 2023 - May 2023
            </p>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2">
              {experience_points.map((point, index) => {
                return (
                  <li className="md:text-lg text-md font-medium text-justify" key={index}>
                    {point}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
