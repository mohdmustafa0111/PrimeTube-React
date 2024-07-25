import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoConatainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
  };

  return <div>VideoConatainer</div>;
};
export default VideoConatainer;
