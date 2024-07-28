import { GoSearch } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 left-0 right-0 grid grid-flow-col p-3 shadow-lg bg-white">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/8182/8182885.png"
          alt="Hamberger Menu"
        />
        <a href="/">
          <h3 className="font-extrabold text-2xl pl-2 text-blue-600">
            PrimeTube
          </h3>
        </a>
      </div>
      <div className="col-span-10 pl-60 flex items-center">
        <input
          placeholder="Search"
          className="w-1/2 px-4 border border-gray-500 focus:outline-none focus:ring-1 focus:border-blue-500  p-2 placeholder-gray-500 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-500 px-6 py-3 rounded-r-full focus:outline-none focus:ring-1 focus:border-blue-500 bg-gray-200">
          <GoSearch />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 pt-1"
          src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
