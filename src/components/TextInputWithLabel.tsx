import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const TextInputWithLabel: React.FC<Props> = ({ title, ...props }) => {
  return (
    <div className="w-full">
      <p className="sm:text-lg text-[1rem]  font-bold mb-1">{title}</p>
      <input
        className="rounded-full px-[1rem] py-[0.5rem] w-full outline-none border border-gray-300 placeholder:text-[1rem]"
        type="text"
        {...props}
      />
    </div>
  );
};

export default TextInputWithLabel;
