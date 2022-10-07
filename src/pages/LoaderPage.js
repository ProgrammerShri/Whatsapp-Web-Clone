import React from "react";
import WhatsappIcon from "../assets/images/whatsapp-icon.png";

const LoaderPage = ({ value }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-gray-500">
      <img src={WhatsappIcon} alt="logo" className="w-20 grayscale" />

      <progress
        className="progress w-96 h-0.5 my-10 bg-gray-300"
        value={value}
        max="100"
      ></progress>

      <p className="text-black py-1"> WhatsApp </p>
      <span className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-lock-fill mx-2"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        </svg>
        <p className="text-sm">End-to-end encrypted</p>
      </span>
    </div>
  );
};

export default LoaderPage;
