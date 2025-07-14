"use client";
import Menu from "@/assets/svgs/Menu";
import React, { useState } from "react";
import "../css/custom.css";
import Close from "@/assets/svgs/Close";

const links = [
  { label: "About me", target: "about" },
  { label: "Experience & Skills", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Education", target: "education" },
  { label: "Courses", target: "courses" },
  { label: "Contact me", target: "contact" },
];

export default function Navbar() {
  // states
  const [show, setShow] = useState(false);

  // functions
  const toggleNavLinks = () => {
    setShow(!show);
  };

  return (
    <div className="shadow-md bg-white fixed left-0 right-0 opacity-90 z-20">
      <div className="h-[3.75rem] flex flex-row items-center justify-between w-[95%] mx-auto custom-break-point">
        <div className="md:text-2xl text-xl text-[#4F46E5] font-bold">Samroon Jesper</div>

        <div
          className={`
    flex md:flex-row flex-col 
    md:py-0 md:px-0 px-5 py-8 gap-5 
    md:static absolute left-0 right-0 top-[3.75rem] bg-white 
    ${show ? "flex" : "hidden"} 
    md:flex
  `}
        >
          {links.map((item) => {
            return (
              <div key={item.label.toString()} className="disc-none">
                <a onClick={toggleNavLinks} href={`#${item.target}`}>{item.label}</a>
              </div>
            );
          })}
        </div>

        <div onClick={toggleNavLinks} className="md:hidden">
          {!show?<Menu />:<Close/>}
        </div>
      </div>
    </div>
  );
}
