import { abbreviateNumber } from "../utils/abbreviateNumber";
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
    <div>
      <h1 className="text-xl font-bold mt-2">{title}</h1>
      <div className="mt-3 flex justify-between">
        <div className="flex items-center">
          <h1 className="font-bold mr-3">{channelTitle}</h1>
          <button className="bg-black text-white p-2 rounded-3xl">
            Subscribe
          </button>
        </div>
        <div className="flex">
          <div className="mx-1 py-2 px-5 font-semibold flex items-center bg-slate-200 rounded-3xl">
            <BiLike className="text-2xl mr-1" />
            {abbreviateNumber(likeCount)} |
            <BiDislike className="text-2xl ml-2" />
          </div>
          <div className="mx-1 py-2 px-5 font-semibold flex items-center bg-slate-200 rounded-3xl">
            <PiShareFat className="text-2xl mr-1" />
            Share
          </div>
          <div className="mx-1 py-2 px-5 font-semibold flex  bg-slate-200 rounded-3xl">
            <LiaDownloadSolid className="text-2xl" />
            Download
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
