import { Avatar } from "./Icons";

const ChatList = ({ item, ...props }) => {
  const { name, lastMessage, time, unread } = item;
  return (
    <div {...props}>
      <div className="flex space-x-6">
        <Avatar />
        <div className="flex flex-col text-left space-y-1">
          <h3 className="text-sm font-bold">{name}</h3>
          <p className="text-xs">{lastMessage} </p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center space-y-1">
        <p className="text-xs">{time}</p>
        {unread > 0 && (
          <div className="flex justify-center items-center bg-primary-green text-white rounded-full w-5 h-5">
            <p className="text-xs"> {unread} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
