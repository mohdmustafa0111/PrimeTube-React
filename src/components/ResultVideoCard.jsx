import moment from "moment";

const ResultVideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="px-2 m-2 w-96 shadow-lg">
      <img
        className="rounded-lg w-screen"
        src={thumbnails?.medium?.url}
        alt="image"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{moment(publishedAt).fromNow()}</li>
      </ul>
    </div>
  );
};

export default ResultVideoCard;
