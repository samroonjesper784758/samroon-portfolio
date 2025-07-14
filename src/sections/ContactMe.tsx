"use client";
import React, { useState } from "react";
import TextInputWithLabel from "../components/TextInputWithLabel";
import Image from "next/image";
import { assetsImage } from "@/assets/images";

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

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-[95%] mx-auto">
      <p className="md:text-3xl sm:text-2xl text-xl font-semibold mb-10">
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
          <p className="sm:text-2xl text-xl font-bold">Let's Get In Touch</p>
          <p className="sm:text-[1rem] text-[0.875rem] font-medium mb-[1rem]">
            Or reach out manually{" "}
            <span className="text-[#4F46E5]">samroon1510@gmail.com</span>
          </p>
          <form onSubmit={handleSumbit} className="flex flex-col gap-[1rem]">
            <div className="flex sm:flex-row flex-col gap-5">
              <TextInputWithLabel
                title="First Name"
                placeholder={"Enter first name"}
                onChange={(e) => handleInputChange("firstname", e.target.value)}
              />
              <TextInputWithLabel
                title="Last Name"
                placeholder="Enter last name"
                onChange={(e) => handleInputChange("lastname", e.target.value)}
              />
            </div>
            <div>
              <TextInputWithLabel
                title="Email"
                placeholder="abc@gmail.com"
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div>
              <p className="text-lg font-bold mb-1">Message</p>
              <textarea
                className="w-full h-32 outline-none border border-gray-300 px-[1rem]"
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
            </div>

            <button
              className="md:h-[3.5rem] h-[3rem] bg-[#4F46E5] rounded-full w-full md:text-xl text-[1rem] text-white mt-[1rem]"
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
