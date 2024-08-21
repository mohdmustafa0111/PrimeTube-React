import { useEffect, useState } from "react";
import VideoInfo from "./VideoInfo";
import { VIDEO_DETAILS_API } from "../utils/constants";

const VideoPreview = ({ videoId }) => {
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    setVideo(json.items[0]);
  };

  useEffect(() => {
    getVideo();
  }, []);

  if (!video) return null;

  return (
    <div>
      <iframe
        className="md:h-[32rem] h-[15rem] md:w-[65rem] w-[22rem] rounded-lg"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <VideoInfo video={video} />
    </div>
  );
};

export default VideoPreview;
