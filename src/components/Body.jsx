import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex mt-16">
      <Sidebar />
      <MainContainer />
    </div>
  );
};
export default Body;
