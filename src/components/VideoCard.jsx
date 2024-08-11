const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  function abbreviateNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  }

  return (
    <div className="px-2 m-2 w-96 shadow-lg">
      <img
        className="rounded-lg w-screen"
        src={thumbnails.medium.url}
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
