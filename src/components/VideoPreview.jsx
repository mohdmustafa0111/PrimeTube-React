import { useEffect, useState } from "react";
import VideoInfo from "./VideoInfo";
import { VIDEO_DETAILS_API } from "../utils/constants";

const VideoPreview = ({ videoId }) => {
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    console.log(json.items[0]);
    setVideo(json.items[0]);
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div>
      <iframe
        width="1050"
        height="500"
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
