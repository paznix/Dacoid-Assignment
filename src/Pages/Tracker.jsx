import Navbar from "../Component/Navbar";

import { FaChevronLeft } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { IoMdInformation } from "react-icons/io";

import Yoga from "../res/yoga.png";
import Barbell from "../res/barbell.png";
import Chartm from "../res/Chartm.png";
import Workout from "../res/workout.png";

const Tracker = () => {
  return (
    <>
      <div className="w-full pt-14 pb-8 p-6 font-mon flex flex-col gap-10 items-center">
        <div className="flex items-center ">
          <div className="flex w-full items-center justify-center text-center">
            <h2 className="text-2xl font-semibold">Workout Tracker</h2>
          </div>
          <FaChevronLeft className="absolute left-8 font-light" />
        </div>

        <div className="w-full">
            <div className="flex justify-center pl-28 w-full">
               <div className="flex flex-col items-center justify-center">
                <span className="text-xs text-gray-400 font-medium">Good job</span>
                <IoMdInformation className="text-gray-400 text-lg"/>
            </div>
            <div className="flex flex-col items-center justify-center pl-12">
                <span className="text-xs text-gray-400 font-medium">less than 320cal</span>
                <IoMdInformation className="text-gray-400 text-lg"/>
            </div> 
            </div>
            
          <a href="/home/workout"><img className="w-full" src={Chartm} alt="chart" /></a>
        </div>

        <div className="flex items-center rounded-xl shadow-sm border border-[#7E96FF]/[0.05] bg-gradient-to-r to-white from-[#819DFF]/[0.28] w-full h-16 p-4">
          <IoWarningOutline className="text-[#7E96FF] text-4xl  " />
          <span className="text-xs font-medium pl-6">
            You've burned fewer calories than yesterday. Time to get moving!{" "}
          </span>
        </div>
      </div>
      <div className="w-full  p-6 font-mon flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Upcoming Workouts</h2>
          <span className="text-sm text-gray-500">See more</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white w-full h-20 flex justify-between shadow-lg shadow-gray-200 rounded-xl">
            <div className="flex w-full p-4 gap-4 items-center">
              <img src={Barbell} alt="" />
              <div>
                <h3 className="font-medium">Full Body Workout</h3>
                <span className="text-gray-500 text-sm">Today, 3:00 pm</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <label class="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
              </label>
            </div>
          </div>
          <div className="bg-white w-full h-20 flex justify-between shadow-lg shadow-gray-200 rounded-xl">
            <div className="flex w-full p-4 gap-4 items-center">
              <img src={Yoga} alt="" />
              <div className="flex flex-col py-10">
                <h3 className="font-medium">Upper Body Workout</h3>
                <span className="text-gray-500 text-sm">4 Feb, 3:30 pm</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <label class="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pb-8 p-6 font-mon flex flex-col gap-5">
        <h2 className="text-xl font-semibold">What Do You Want to Train</h2>
        <div className="flex p-5 w-full justify-between bg-[#8CB1FF]/[.60] rounded-2xl">
            <div className="flex flex-col w-full gap-1">
                <h3 className="font-semibold text-sm">Full Body Workout</h3>
                <span className="font-medium text-xs pt-2">Arms</span>
                <span className=" font-medium text-xs">Chest</span>
            </div>
            <img className="w-28 h-28" src={Workout} alt="workout" />

        </div>
      </div>
      <Navbar/>
    </>
  );
};

export default Tracker;
