import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoConatainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (!videos) return null;

  return (
    <div className="flex flex-wrap md:w-[75rem] justify-center">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoConatainer;
