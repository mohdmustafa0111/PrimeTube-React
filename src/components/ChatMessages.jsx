const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="w-6 h-6"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        alt="user"
      />
      <span className="font-bold px-3">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessages;
