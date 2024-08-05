import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(20) + "🚀🔥",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-5 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessages key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full border border-black ml-5 mt-1 p-2 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submit", liveMessage);
          dispatch(
            addMessage({
              name: "Harry",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-[305px] px-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="ml-2 px-3 py-1 rounded-lg bg-slate-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
