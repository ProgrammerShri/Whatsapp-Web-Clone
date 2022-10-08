import React from "react";
import ChatList from "../components/ChatList";
import {
  Avatar,
  DownArrowIcon,
  NewChatIcon,
  SearchIcon,
  StatusIcon,
  VerticleDotIcon,
} from "../components/Icons";
import { useProgress } from "../hooks/useProgress";
import LoaderPage from "./LoaderPage";

const ChatPage = () => {
  const { loading, value } = useProgress();

  if (loading) {
    return <LoaderPage value={value} />;
  }

  return (
    <div className="w-full h-screen bg-primary-green">
      <div className="w-[97%] m-auto flex pt-6">
        <div className="w-[40rem] bg-light-gray py-2 ">
          {/* Header  */}
          <div className="w-full py-4 flex justify-between items-center px-4 mb-1">
            <div className="flex w-1/3">
              <Avatar />
            </div>
            <div className="flex justify-between items-center w-1/3">
              <StatusIcon />
              <NewChatIcon />
              <VerticleDotIcon />
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
                />
              </div>
            </div>
            <DownArrowIcon className="pl-2" />
          </div>

          {/* ChatList  */}

          <div className="h-[34rem] overflow-x-hidden overflow-y-auto ">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((item) => (
              <ChatList className="hover:bg-light-gray py-4 bg-white border-b flex justify-between items-center px-4 cursor-pointer" />
            ))}
          </div>
        </div>

        <div className="w-full bg-light-gray py-2 border-l  border-primary-gray ">
          <div className="w-full py-4 flex justify-between items-center px-4 border-b">
            <div className="flex space-x-4 items-center ">
              <Avatar />
              <div className="flex flex-col text-left">
                <h1 className=" font-bold">John Doe</h1>
                <p className="text-sm">Active now</p>
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
