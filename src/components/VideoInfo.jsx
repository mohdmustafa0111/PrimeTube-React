import { abbreviateNumber } from "../utils/helper";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";

const VideoInfo = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title } = snippet || {};
  const { likeCount } = statistics || {};

  if (video.length === 0) return null;
  return (
    <div className="md:w-[65rem] w-[25rem]">
      <h1 className="md:text-xl md:flex md:flex-wrap text-sm font-bold mt-2">
        {title}
      </h1>
      <div className="mt-3 md:flex md:justify-between">
        <div className="flex items-center justify-between">
          <h1 className="font-bold md:text-lg text-sm mr-3">{channelTitle}</h1>
          <button className="bg-black md:text-base text-sm text-white p-2 rounded-3xl">
            Subscribe
          </button>
        </div>
        <div className="flex my-2 justify-between">
          <div className="mx-1 py-2 px-5 md:text-base text-sm font-semibold flex items-center bg-slate-200 rounded-3xl">
            <BiLike className="md:text-2xl text-sm mr-1" />
            {abbreviateNumber(likeCount)} |
            <BiDislike className="md:text-2xl text-sm ml-2" />
          </div>
          <div className="mx-1 py-2 px-5 md:text-base text-sm font-semibold flex items-center bg-slate-200 rounded-3xl">
            <PiShareFat className="md:text-2xl text-sm mr-1" />
            Share
          </div>
          <div className="mx-1 py-2 px-5 md:text-base text-sm font-semibold flex items-center bg-slate-200 rounded-3xl">
            <LiaDownloadSolid className="md:text-2xl text-sm" />
            Download
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
