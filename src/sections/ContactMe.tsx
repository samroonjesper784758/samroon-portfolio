"use client";
import React, { useEffect, useState } from "react";
import TextInputWithLabel from "../components/TextInputWithLabel";
import { assetsImage } from "@/assets/images";
import emailjs from "@emailjs/browser";

interface FORMDATA {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

function ContactMe() {
  // state
  const [formData, setFormData] = useState<FORMDATA>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  // function
  const handleInputChange = (key: keyof FORMDATA, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID)
    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID
    ) {
      console.log("clicked")
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form
        )
        .then(() => {
          alert("Message sent");
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to send message: " + error.text);
        });
    }
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className="w-[95%] mx-auto">
      <p className="md:text-3xl sm:text-2xl text-xl font-semibold mb-10 text-headingColor">
        📮 Contact Me
      </p>
      <div className="grid grid-cols-12">
        <div className="md:col-span-6 col-span-12 flex flex-col items-center justify-start">
          <img
            className="max-h-[31.25rem] max-w-[31.25rem] w-full h-auto object-cover"
            src={assetsImage.Contact.src}
            alt="Contact Me"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <p className="sm:text-2xl text-xl font-bold text-headingColor">
            Let's Get In Touch
          </p>
          <p className="sm:text-[1rem] text-[0.875rem] font-medium mb-[1rem] text-paragraphColor">
            Or reach out manually{" "}
            <span className="text-[#4F46E5]">samroon1510@gmail.com</span>
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]">
            <div className="flex sm:flex-row flex-col gap-5">
              <TextInputWithLabel
                title="First Name"
                placeholder={"Enter first name"}
                name="firstname"
                onChange={(e) => handleInputChange("firstname", e.target.value)}
              />
              <TextInputWithLabel
                title="Last Name"
                name="lastname"
                placeholder="Enter last name"
                onChange={(e) => handleInputChange("lastname", e.target.value)}
              />
            </div>
            <div>
              <TextInputWithLabel
                title="Email"
                placeholder="abc@gmail.com"
                name="email"
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div>
              <p className="text-lg font-bold mb-1">Message</p>
              <textarea
                className="w-full h-32 outline-none border border-gray-300 px-[1rem]"
                name={"message"}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
            </div>

            <button
              className="md:h-[3.5rem] h-[3rem] bg-[#4F46E5] rounded-full w-full md:text-xl text-[1rem] text-white mt-[1rem] active:brightness-50"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
