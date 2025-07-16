import React from "react";

export default function About() {
  return (
    <div className="w-[95%] mx-auto bg-[#ffffff] shadow-md border-l-4 border-[#4F46E5] rounded p-5 flex flex-col gap-3">
      <p className="sm:text-2xl text-xl font-semibold text-headingColor">👋 About</p>
      <p className="sm:text-lg text-md text-justify font-light text-paragraphColor">
        I'm <span className="text-primaryColor font-medium">Samroon Jesper</span>,
        a passionate{" "}
        <span className="text-primaryColor font-medium">
          React & React Native Developer
        </span>{" "}
        with hands-on experience building scalable and responsive web and mobile
        applications. I specialize in{" "}
        <span className="text-primaryColor font-medium">
          JavaScript (ES6+), TypeScript, React.js, and React Native,
        </span>{" "}
        and I'm skilled in managing complex state using{" "}
        <span className="text-primaryColor font-medium">
          Redux, Zustand, and React Query
        </span>
        . I thrive on crafting clean UIs and seamless user experiences using
        <span className="text-primaryColor font-medium">
          Tailwind CSS, Styled Components, and React Native Paper
        </span>
        . I have a solid understanding of backend integration, working with
        <span className="text-primaryColor font-medium">
          RESTful APIs, Firebase Auth, JWT,
        </span>{" "}
        and tools like <span className="text-primaryColor font-medium">Axios</span>{" "}
        for efficient data handling. With a strong foundation in{" "}
        <span className="text-primaryColor font-medium">
          responsive design, performance optimization (lazy loading,
          memoization,
        </span>{" "}
        and reducing re-renders), and tools like{" "}
        <span className="text-primaryColor font-medium">React DevTools,</span> I
        enjoy debugging, refining UX, and continuously learning to stay updated
        with the latest trends in development.
      </p>
    </div>
  );
}
