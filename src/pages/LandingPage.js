/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BaseText from "../components/Basics/Texts/BaseText";
import MutedText from "../components/Basics/Texts/MutedText";
import QRCode from "../assets/images/qr-code.png";
import WhatsappVideo from "../assets/images/whatsapp-video.png";
import { useNavigate } from "react-router-dom";
import { SettingIcon, VerticleDots, WhatsappIcon } from "../components/Icons";

const LandingPage = () => {
  let navigate = useNavigate();

  const handleWhatsappClick = () => {
    navigate("/messages");
  };
  return (
    <>
      <div className="relative w-full">
        <div className="h-56 bg-secondary-green">
          <div className="flex justify-start items-center absolute top-8 left-56">
            <WhatsappIcon />
            <span className="text-white text-sm mx-3">WHATSAPP WEB</span>
          </div>
        </div>
        <div className="h-screen bg-tertiary-gray"></div>

        <div className="absolute top-24 left-0 right-0 m-auto sm:w-11/12 z-10 lg:w-3/5 h-5/6 bg-white rounded-sm shadow-lg">
          <div className="flex-1 flex flex-col justify-between mt-16 mx-16 md:flex-row ">
            <div className="flex flex-col flex-wrap min-w-96 text-left">
              <BaseText title="To use Whatsapp on your computer:" />
              <div className="flex flex-col mt-10">
                <MutedText
                  className="text-lg my-2 text-secondary-gray text-left"
                  title="1. Open Whatsapp on your phone"
                />

                <h3 className="w-full font-normal my-2 text-secondary-gray text-left text-lg flex justify-center items-center">
                  2. Tap Menu
                  <VerticleDots />
                  or Settings
                  <SettingIcon />
                  and select Linked Devices
                </h3>

                <MutedText
                  className="text-lg my-2 text-secondary-gray text-left"
                  title="3. Tap on Link a Device"
                />
                <MutedText
                  className="text-lg my-2 text-secondary-gray text-left"
                  title="4. Point your phone to this screen to capture the code"
                />
              </div>

              <div className="mt-10">
                <a
                  href="#!"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-green"
                >
                  Need help to get started?
                </a>
              </div>
            </div>

            <img src={QRCode} className="w-64 h-64 min-w-64  border " />
          </div>

          <button className="btn btn-sm" onClick={handleWhatsappClick}>
            Continue with WhatsApp Web
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gray-50 py-10 mt-10">
            <img src={WhatsappVideo} className="w-3/5 m-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
