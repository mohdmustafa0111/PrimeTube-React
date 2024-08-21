import { useEffect, useState } from "react";
import { SEARCH_RESULT_API, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";

const VideoConatainer = () => {
  // initial state variables
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetch(
        !filter ? YOUTUBE_VIDEOS_API : SEARCH_RESULT_API + filter
      );
      const json = await data.json();

      const onlyVideos = json.items.filter((video) => {
        if (!filter) {
          return video.kind === "youtube#video";
        } else {
          return video.id.kind === "youtube#video";
        }
      });
      setVideos(onlyVideos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, [searchParams, filter]);

  if (!videos) return null;

  return (
    <div className="flex flex-wrap md:w-[75rem] justify-center">
      {videos?.map((video) => {
        const videoId = !filter ? video.id : video.etag;
        return (
          <Link key={videoId} to={"/watch?v=" + videoId}>
            <VideoCard info={video} filter={filter} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoConatainer;
