/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BaseText from "../components/Basics/Texts/BaseText";
import MutedText from "../components/Basics/Texts/MutedText";
import QRCode from "../assets/images/qr-code.png";
import WhatsappVideo from "../assets/images/whatsapp-video.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();

  const handleWhatsappClick = () => {
    console.log("Whatsapp Clicked");
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

const WhatsappIcon = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={39}
        viewBox="0 0 39 39"
      >
        <path
          fill="#00E676"
          d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
        />
        <path
          fill="#FFF"
          d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
        />
      </svg>
    </span>
  );
};

const VerticleDots = () => {
  return (
    <span className="mx-1">
      <svg height="24px" viewBox="0 0 24 24" width="24px">
        <rect fill="#f2f2f2" height={24} rx={3} width={24} />
        <path
          d="m12 15.5c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.675-1.5-1.5.675-1.5 1.5-1.5zm0-2c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm0-5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z"
          fill="#818b90"
        />
      </svg>
    </span>
  );
};

const SettingIcon = () => {
  return (
    <span className="mx-1">
      <svg width={24} height={24} viewBox="0 0 24 24">
        <rect fill="#F2F2F2" width={24} height={24} rx={3} />
        <path
          d="M12 18.69c-1.08 0-2.1-.25-2.99-.71L11.43 14c.24.06.4.08.56.08.92 0 1.67-.59 1.99-1.59h4.62c-.26 3.49-3.05 6.2-6.6 6.2zm-1.04-6.67c0-.57.48-1.02 1.03-1.02.57 0 1.05.45 1.05 1.02 0 .57-.47 1.03-1.05 1.03-.54.01-1.03-.46-1.03-1.03zM5.4 12c0-2.29 1.08-4.28 2.78-5.49l2.39 4.08c-.42.42-.64.91-.64 1.44 0 .52.21 1 .65 1.44l-2.44 4C6.47 16.26 5.4 14.27 5.4 12zm8.57-.49c-.33-.97-1.08-1.54-1.99-1.54-.16 0-.32.02-.57.08L9.04 5.99c.89-.44 1.89-.69 2.96-.69 3.56 0 6.36 2.72 6.59 6.21h-4.62zM12 19.8c.22 0 .42-.02.65-.04l.44.84c.08.18.25.27.47.24.21-.03.33-.17.36-.38l.14-.93c.41-.11.82-.27 1.21-.44l.69.61c.15.15.33.17.54.07.17-.1.24-.27.2-.48l-.2-.92c.35-.24.69-.52.99-.82l.86.36c.2.08.37.05.53-.14.14-.15.15-.34.03-.52l-.5-.8c.25-.35.45-.73.63-1.12l.95.05c.21.01.37-.09.44-.29.07-.2.01-.38-.16-.51l-.73-.58c.1-.4.19-.83.22-1.27l.89-.28c.2-.07.31-.22.31-.43s-.11-.35-.31-.42l-.89-.28c-.03-.44-.12-.86-.22-1.27l.73-.59c.16-.12.22-.29.16-.5-.07-.2-.23-.31-.44-.29l-.95.04c-.18-.4-.39-.77-.63-1.12l.5-.8c.12-.17.1-.36-.03-.51-.16-.18-.33-.22-.53-.14l-.86.35c-.31-.3-.65-.58-.99-.82l.2-.91c.03-.22-.03-.4-.2-.49-.18-.1-.34-.09-.48.01l-.74.66c-.39-.18-.8-.32-1.21-.43l-.14-.93a.426.426 0 00-.36-.39c-.22-.03-.39.05-.47.22l-.44.84-.43-.02h-.22c-.22 0-.42.01-.65.03l-.44-.84c-.08-.17-.25-.25-.48-.22-.2.03-.33.17-.36.39l-.13.88c-.42.12-.83.26-1.22.44l-.69-.61c-.15-.15-.33-.17-.53-.06-.18.09-.24.26-.2.49l.2.91c-.36.24-.7.52-1 .82l-.86-.35c-.19-.09-.37-.05-.52.13-.14.15-.16.34-.04.51l.5.8c-.25.35-.45.72-.64 1.12l-.94-.04c-.21-.01-.37.1-.44.3-.07.2-.02.38.16.5l.73.59c-.1.41-.19.83-.22 1.27l-.89.29c-.21.07-.31.21-.31.42 0 .22.1.36.31.43l.89.28c.03.44.1.87.22 1.27l-.73.58c-.17.12-.22.31-.16.51.07.2.23.31.44.29l.94-.05c.18.39.39.77.63 1.12l-.5.8c-.12.18-.1.37.04.52.16.18.33.22.52.14l.86-.36c.3.31.64.58.99.82l-.2.92c-.04.22.03.39.2.49.2.1.38.08.54-.07l.69-.61c.39.17.8.33 1.21.44l.13.93c.03.21.16.35.37.39.22.03.39-.06.47-.24l.44-.84c.23.02.44.04.66.04z"
          fill="#818b90"
        />
      </svg>
    </span>
  );
};
