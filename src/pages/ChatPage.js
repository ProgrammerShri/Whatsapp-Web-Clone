import React from "react";
import { useNavigate } from "react-router-dom";
import ChatList from "../components/ChatList";
import {
  Avatar,
  DownArrowIcon,
  NewChatIcon,
  SearchIcon,
  StatusIcon,
  VerticleDotIcon,
} from "../components/Icons";
import { data } from "../data";
import { useProgress } from "../hooks/useProgress";
import LoaderPage from "./LoaderPage";

const ChatPage = () => {
  const { loading, value } = useProgress();
  const navigate = useNavigate();
  const [input, setInput] = React.useState("");
  const [options, setOptions] = React.useState(false);

  if (loading) {
    return <LoaderPage value={value} />;
  }

  const filterChats = data.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase());
  });

  const moreOptions = () => {
    setOptions(!options);
  };

  return (
    <div className="w-full h-screen bg-primary-green">
      <div className="w-[97%] m-auto flex pt-6">
        <div className="w-[40rem] bg-light-gray py-2 ">
          {/* Header  */}
          <div className="w-full py-4 flex justify-between items-center px-4 mb-1">
            <div className="flex w-1/3">
              <Avatar />
            </div>
            <div className="flex justify-between items-center w-1/3 relative">
              <StatusIcon />
              <NewChatIcon />
              <VerticleDotIcon onClick={moreOptions} />
              {options && (
                <div className="absolute z-10 top-10 right-0 bg-white w-40 h-fit rounded-md shadow-lg border-2">
                  <div className="flex flex-col justify-center items-start space-y-1 text-left">
                    {[
                      "New Group",
                      "New Broadcast",
                      "WhatsApp Web",
                      "Starred Messages",
                      "Settings",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 hover:bg-light-gray w-full cursor-pointer p-2"
                      >
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                    <p
                      className="text-sm flex items-center space-x-2 hover:bg-light-gray w-full  cursor-pointer p-2 border-t"
                      onClick={() => {
                        navigate("/");
                        setOptions(false);
                      }}
                    >
                      LogOut
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search  */}
          <div className="flex justify-between items-center border bg-white px-2">
            <div className="form-control w-full">
              <div className="input-group w-full">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search…"
                  className="input w-full h-8 my-2 bg-light-gray"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
            </div>
            <DownArrowIcon className="pl-2" />
          </div>

          {/* ChatList  */}

          <div className="h-[34rem] overflow-x-hidden overflow-y-auto ">
            {filterChats?.map((item) => {
              return (
                <ChatList
                  item={item}
                  key={item.id}
                  className="hover:bg-light-gray py-4 bg-white border-b flex justify-between items-center px-4 cursor-pointer"
                />
              );
            })}
          </div>
        </div>

        <div className="w-full bg-light-gray py-2 border-l  border-primary-gray ">
          <div className="w-full py-4 flex justify-between items-center px-4 border-b">
            <div className="flex space-x-4 items-center ">
              <Avatar />
              <div className="flex flex-col text-left">
                <h1 className=" font-bold">John </h1>
                <p className="text-sm text-primary-green">Online</p>
              </div>
            </div>
            <div className="flex space-x-6 items-center ">
              <SearchIcon />
              <VerticleDotIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
