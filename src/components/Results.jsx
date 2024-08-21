import { useEffect, useState } from "react";
import { SEARCH_RESULT_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import ResultVideoCard from "./ResultVideoCard";
import "../utils/sidebar.css";

const Results = () => {
  const [video, setVideo] = useState([]);
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");

  const getVideo = async () => {
    try {
      const data = await fetch(SEARCH_RESULT_API + search_query);
      const json = await data.json();
      const onlyVideos = json.items.filter((video) => {
        return video.id.kind === "youtube#video";
      });
      setVideo(onlyVideos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideo();
  }, [search_query]);

  if (!video) return null;

  return (
    <div className="flex flex-wrap md:w-[75rem] m-2 overflow-y-scroll hide-scrollbar justify-center">
      {video.map((video) => {
        return (
          <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
            <ResultVideoCard key={video.id.videoId} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default Results;
