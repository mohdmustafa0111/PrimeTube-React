import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoPreview from "./VideoPreview";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="p-5 flex">
        <VideoPreview videoId={videoId} />
        <div>
          <LiveChat />
        </div>
      </div>
      <div className="w-[1080px]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
