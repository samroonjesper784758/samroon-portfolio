import React from "react";

export default function Education() {
  const education_history = [
    {
      institude: "Punjab University",
      degree: "Associate Degree in Sciences (ADS)",
      year: "2019 - 2021",
    },
    {
      institude: "Punjab Group of Colleges (PGC)",
      degree: "Intermediate in Computer Sciences (ICS)",
      year: "2017 - 2019",
    },
  ];

  return (
    <div className="flex flex-col w-[95%] mx-auto bg-[#ffffff]">
      <p className="sm:text-2xl text-xl font-semibold mb-3">🎓Education</p>
      {education_history.map((item, index) => {
        return (
          <div
            key={index}
            className={`shadow-md border-l-4 p-5 border-[#4F46E5] rounded ${
              index === education_history.length - 1 ? "mb-0" : "mb-5"
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="sm:text-xl text-[1rem] font-semibold">{item.institude}</p>
              <p className="sm:text-xl text-[1rem] font-medium">{item.degree}</p>
              <p className="sm:text-xl text-[1rem] font-medium">{item.year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
