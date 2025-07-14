import About from "@/sections/About";
import ContactMe from "@/sections/ContactMe";
import CourseAndCertification from "@/sections/CourseAndCertification";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Footer from "@/components/Footer";
import Intro from "@/sections/Intro";
import KeyProjects from "@/sections/KeyProjects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#fffefe] flex flex-col gap-10">
      {/* navigation bar */}
      <Navbar />

      {/* my Small Introduction */}
      <Intro />

      {/* what I have learned and doing */}
      <section id="about">
        <About />
      </section>

      {/* my professional experience */}
      <section id="experience">
        <Experience />
      </section>

      {/* key projects */}
      <section id="projects">
        <KeyProjects />
      </section>

      {/* Education */}
      <section id="education">
        <Education />
      </section>

      {/* Course & Certification */}
      <section id="courses">
        <CourseAndCertification />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <ContactMe />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
