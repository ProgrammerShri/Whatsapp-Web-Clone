import React from "react";

const ChatPage = () => {
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

const ChatList = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex space-x-6">
        <Avatar />
        <div className="flex flex-col text-left space-y-1">
          <h3 className="text-sm font-bold">Name</h3>
          <p className="text-xs">Last Message</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center space-y-1">
        <p className="text-xs">{new Date().toLocaleTimeString()}</p>
        <div className="flex justify-center items-center bg-primary-green text-white rounded-full w-5 h-5">
          <p className="text-xs">1</p>
        </div>
      </div>
    </div>
  );
};

const Avatar = ({ ...props }) => {
  return (
    <div
      className="rounded-full bg-gray-200 flex justify-center items-center cursor-pointer"
      {...props}
    >
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        className="w-10 h-10 rounded-full"
        alt="avatar"
      />
    </div>
  );
};

const LockIcon = ({ ...props }) => {
  return (
    <svg
      width={10}
      height={12}
      viewBox="0 0 10 12"
      className="cursor-pointer "
      {...props}
    >
      <path
        d="M5.008 1.6c1.375 0 2.501 1.074 2.586 2.427l.005.164v1.271h.158c.585 0 1.059.48 1.059 1.07v3.351c0 .59-.474 1.07-1.059 1.07h-5.5c-.582 0-1.057-.48-1.057-1.07V6.531c0-.59.474-1.069 1.058-1.069h.158V4.191c0-1.375 1.075-2.501 2.429-2.586l.163-.005Zm0 1.248c-.696 0-1.272.534-1.337 1.214l-.006.129-.002 1.271H6.35l.001-1.271c0-.653-.47-1.2-1.088-1.319l-.126-.018-.129-.006Z"
        fill="currentColor"
      />
    </svg>
  );
};

const StatusIcon = ({ ...props }) => {
  return (
    <span className="cursor-pointer" {...props}>
      <svg
        version="1.1"
        id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
        x={0}
        y={0}
        viewBox="0 0 24 24"
        width={24}
        height={24}
        className
      >
        <path
          fill="currentColor"
          d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
        />
        <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      </svg>
    </span>
  );
};

const VerticleDotIcon = ({ ...props }) => {
  return (
    <span className="cursor-pointer" {...props}>
      <svg viewBox="0 0 24 24" width={24} height={24} className>
        <path
          fill="currentColor"
          d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
        />
      </svg>
    </span>
  );
};

const NewChatIcon = ({ ...props }) => {
  return (
    <span className="cursor-pointer" {...props}>
      <svg viewBox="0 0 24 24" width={24} height={24} className>
        <path
          fill="currentColor"
          d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
        />
      </svg>
    </span>
  );
};

const SearchIcon = ({ ...props }) => {
  return (
    <span className="cursor-pointer my-2  bg-light-gray" {...props}>
      <svg viewBox="0 0 24 24" width={24} height={24} className>
        <path
          fill="currentColor"
          d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
        />
      </svg>
    </span>
  );
};

const DownArrowIcon = ({ ...props }) => {
  return (
    <span {...props}>
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        preserveAspectRatio="xMidYMid meet"
        className="cursor-pointer"
      >
        <path
          fill="currentColor"
          d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
        />
      </svg>
    </span>
  );
};
