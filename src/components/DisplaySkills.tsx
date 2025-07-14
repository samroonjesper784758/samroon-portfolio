import React from "react";

interface Props {
  skills: string[];
  justify?: string;
  customClasses?: string;
}

const DisplaySkills: React.FC<Props> = ({
  skills,
  justify = "center",
  customClasses,
}) => {
  const justifyClass = { center: "justify-center", start: "justify-start" }[
    justify
  ];
  return (
    <div
      className={`flex flex-row flex-wrap justify-center gap-4 ${justifyClass} ${customClasses}`}
    >
      {skills.map((item, index) => {
        return (
          <div
            key={index}
            className="py-[0.3125rem] px-[0.6rem] border border-[#000000] rounded-full"
          >
            <p className="md:text-[1rem] text-sm font-medium text-[#000000]">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplaySkills;
