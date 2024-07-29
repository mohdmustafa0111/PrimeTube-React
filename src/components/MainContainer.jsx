import ButtonList from "./ButtonList";
import VideoConatainer from "./VideoConatainer";
import "../utils/sidebar.css";

const MainContainer = () => {
  return (
    <div className="overflow-y-scroll hide-scrollbar">
      <ButtonList />
      <VideoConatainer />
    </div>
  );
};
export default MainContainer;
