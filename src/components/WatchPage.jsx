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
      <div className="p-5 md:flex md:flex-wrap">
        <VideoPreview videoId={videoId} />
        <div className="flex justify-center">
          <LiveChat />
        </div>
      </div>
      <div className="md:w-[1080px] w-[23rem]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
