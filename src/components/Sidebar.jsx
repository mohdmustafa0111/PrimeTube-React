import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="py-5 px-8 shadow-lg w-52">
      <ul className="mb-3">
        <li className="py-1">
          <Link to="/">Home</Link>
        </li>
        <li className="py-1">Shorts</li>
        <li className="py-1">Subscriptions</li>
      </ul>

      <hr className="border-gray-500 my-4"></hr>

      <h1 className="font-bold text-xl">You</h1>
      <ul className="pt-2">
        <li className="py-1">Your Channel</li>
        <li className="py-1">History</li>
        <li className="py-1">Playlists</li>
        <li className="py-1">Watch Later</li>
        <li className="py-1">Liked Videos</li>
      </ul>

      <hr className="border-gray-500 my-4"></hr>

      <h1 className="font-bold pt-2 text-xl">Explore</h1>
      <ul className="pt-2">
        <li className="py-1">Trending</li>
        <li className="py-1">Shopping</li>
        <li className="py-1">Music</li>
        <li className="py-1">Films</li>
        <li className="py-1">Live</li>
        <li className="py-1">Gaming</li>
        <li className="py-1">News</li>
        <li className="py-1">Sports</li>
        <li className="py-1">Courses</li>
        <li className="py-1">Fashion & Beauty</li>
        <li className="py-1">Podcasts</li>
      </ul>
    </div>
  );
};
export default Sidebar;
