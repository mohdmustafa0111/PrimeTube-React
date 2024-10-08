import { abbreviateNumber } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="px-2 md:m-2 m-3 w-96 shadow-lg">
      <img
        className="rounded-lg w-screen"
        src={thumbnails?.medium?.url}
        alt="image"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{abbreviateNumber(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
