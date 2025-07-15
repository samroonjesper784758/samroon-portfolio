import Image from "next/image";
import React from "react";
import { OpenLink } from "../assets/svgs/OpenLink";
import DisplaySkills from "../components/DisplaySkills";
import { assetsImage } from "../assets/images";
import SnackOut from "@/assets/svgs/SnackOut";

export default function KeyProjects() {
  // projects
  const projects = [
    {
      title: "Verte Charge",
      description:
        "An electric vehicle charging platform, allowing users to find and book nearby charging stations and schedule charging sessions.",
      skills: [
        "React js",
        "React Native Cli",
        "Google Maps",
        "Node js",
        "Google SignIn",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "SnackOut",
      description:
        "A restaurant reservation and food ordering application, enabling users to reserve tables, order food, and manage group orders efficiently.",
      skills: [
        "React js",
        "React Native Cli",
        "Google Maps",
        "Node js",
        "TS",
        "Git",
        "GitHub",
      ],
    },
  ];

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-3">
      <p className="sm:text-2xl text-xl font-semibold text-headingColor">🚀 Key Projects</p>
      <div className="grid grid-cols-12 gap-5">
        {projects.map((item, index) => {
          return (
            <div
              key={index}
              className={`
          w-full shadow bg-white p-5 rounded border-l-4 md:col-span-6 col-span-12
          ${index === 0 ? "border-[#34b44ad9]" : "border-[#a796e4d9]"}
        `}
            >
              <div className="flex flex-row justify-between items-center mb-5">
                <div className="flex flex-row gap-2 items-center">
                  {index === 0 ? (
                    <Image
                      src={assetsImage.VerteCharge}
                      alt="verte-charge"
                      height={43}
                      width={53}
                    />
                  ) : (
                    <SnackOut />
                  )}
                  <div className="text-xl font-bold text-headingColor">{item.title}</div>
                </div>
                <a
                  href={
                    index === 0
                      ? "https://vertecharge.com/"
                      : "https://www.snackout.pk/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenLink fill={index === 0 ? "#34b44ad9" : "#a796e4d9"} />
                </a>
              </div>
              <p className="text-[1rem] font-medium text-justify text-paragraphColor">
                {item.description}
              </p>
              <DisplaySkills
                skills={item.skills}
                justify="start"
                customClasses="mt-3"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
