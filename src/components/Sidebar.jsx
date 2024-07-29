import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { PiPlaylist } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdMusicalNotes } from "react-icons/io";
import { PiFilmSlate } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { LiaDiscourse } from "react-icons/lia";
import { GiClothes } from "react-icons/gi";
import { SiGooglepodcasts } from "react-icons/si";
import "../utils/sidebar.css";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="py-5 px-5 shadow-lg w-52 overflow-y-scroll hide-scrollbar">
      <ul className="mb-3">
        <li className="py-3">
          <Link to="/" className="flex">
            <GoHome className="mx-2" size={22} />
            Home
          </Link>
        </li>
        <li className="py-3 flex">
          <SiYoutubeshorts className="mx-2" size={20} />
          Shorts
        </li>
        <li className="py-3 flex">
          <MdOutlineSubscriptions className="mx-2" size={20} />
          Subscriptions
        </li>
      </ul>

      <hr className="border-gray-500 my-4"></hr>

      <h1 className="font-bold text-xl">You</h1>
      <ul className="pt-2">
        <li className="py-3 flex">
          <GrChannel className="mx-2" size={20} />
          Your Channel
        </li>
        <li className="py-3 flex">
          <MdHistory className="mx-2" size={20} />
          History
        </li>
        <li className="py-3 flex">
          <PiPlaylist className="mx-2" size={20} />
          Playlists
        </li>
        <li className="py-3 flex">
          <MdOutlineWatchLater className="mx-2" size={20} />
          Watch Later
        </li>
        <li className="py-3 flex">
          <AiOutlineLike className="mx-2" size={20} />
          Liked Videos
        </li>
      </ul>

      <hr className="border-gray-500 my-4"></hr>

      <h1 className="font-bold pt-2 text-xl">Explore</h1>
      <ul className="pt-2">
        <li className="py-3 flex">
          <IoMdTrendingUp className="mx-2" size={20} />
          Trending
        </li>
        <li className="py-3 flex">
          <FiShoppingBag className="mx-2" size={20} />
          Shopping
        </li>
        <li className="py-3 flex">
          <IoMdMusicalNotes className="mx-2" size={20} />
          Music
        </li>
        <li className="py-3 flex">
          <PiFilmSlate className="mx-2" size={20} />
          Films
        </li>
        <li className="py-3 flex">
          <MdLiveTv className="mx-2" size={20} />
          Live
        </li>
        <li className="py-3 flex">
          <IoGameControllerOutline className="mx-2" size={20} />
          Gaming
        </li>
        <li className="py-3 flex">
          <IoNewspaperOutline className="mx-2" size={20} />
          News
        </li>
        <li className="py-3 flex">
          <MdOutlineSportsCricket className="mx-2" size={20} />
          Sports
        </li>
        <li className="py-3 flex">
          <LiaDiscourse className="mx-2" size={20} />
          Courses
        </li>
        <li className="py-3 flex">
          <GiClothes className="mx-2" size={20} />
          Fashion & Beauty
        </li>
        <li className="py-3 flex">
          <SiGooglepodcasts className="mx-2" size={20} />
          Podcasts
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
