import { useEffect, useState } from "react";
import { SEARCH_RESULT_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import ResultVideoCard from "./ResultVideoCard";

const Results = () => {
  const [video, setVideo] = useState([]);
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");

  const getVideo = async () => {
    const data = await fetch(SEARCH_RESULT_API + search_query);
    const json = await data.json();
    const onlyVideos = json.items.filter((video) => {
      return video.id.kind === "youtube#video";
    });
    setVideo(onlyVideos);
  };

  useEffect(() => {
    getVideo();
  }, [search_query]);

  return (
    <div className="flex flex-wrap w-[75rem] m-2">
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
