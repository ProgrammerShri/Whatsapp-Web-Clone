import React from "react";
import WhatsappIcon from "../assets/images/whatsapp-icon.png";
import { LockIcon } from "../components/Icons";

const LoaderPage = ({ value }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-gray-500">
      <img src={WhatsappIcon} alt="logo" className="w-20 grayscale" />

      <progress
        className="progress progress-success w-96 h-0.5 my-10 bg-gray-300"
        value={value}
        max="100"
      ></progress>

      <p className="text-black py-1"> WhatsApp </p>
      <span className="flex justify-center items-center">
        <LockIcon />
        <p className="text-sm mx-2">End-to-end encrypted</p>
      </span>
    </div>
  );
};

export default LoaderPage;
