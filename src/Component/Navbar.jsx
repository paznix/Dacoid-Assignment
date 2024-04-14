import Home from "../res/home.png";
import Profile from "../res/profile.png";
import Stat from "../res/stat.png";
import Cam from "../res/cam.png";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="fixed bg-white flex  bottom-0 w-full h-24 shadow-2xl justify-center items-center ">
        <button className="absolute flex items-center justify-center w-20 h-20 mb-20 bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] rounded-full shadow-lg">
          <IoSearchOutline className="w-8 h-8 z-10  bg-transparent text-white" />
        </button>
        <div className="w-full bg-white flex items-center justify-around px-2">
          <div className="w-14 bg-white h-14 items-center justify-center flex">
            <img src={Home} />
          </div>
          <div className="w-14 bg-white h-14 items-center justify-center flex">
            <img src={Stat} />
          </div>
          <div className="w-14 bg-white h-14 items-center justify-center flex"></div>
          <div className="w-14 bg-white h-14 items-center justify-center flex">
            <img src={Cam} />
          </div>
          <div className="w-14 h-14 bg-white items-center justify-center flex">
            <img src={Profile} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
