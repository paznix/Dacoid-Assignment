import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsDot } from "react-icons/bs";

import Navbar from "../Component/Navbar";


const Workout = () => {
  return (
    <>
    <div className="fixed bottom-36 right-6 flex items-center justify-center text-white w-20 h-20 shadow-md rounded-full bg-gradient-to-l to-[#E9B1E0] from-[#D3A5F2]">
        <IoMdAdd className="text-3xl"/>
    </div>
      <div className="w-full pt-14 pb-8 p-6 font-mon flex flex-col gap-3 items-center">
        <div className="flex items-center ">
          <div className="flex w-full items-center justify-center text-center">
            <h2 className="text-2xl font-semibold">Workout Schedule</h2>
          </div>
          <a className="absolute left-8 font-light"  href="/home"><FaChevronLeft /></a>
        </div>

        <div className="flex items-center text-sm font-semibold gap-2">
            <FaChevronLeft/>
            <span>Feb 2024</span>
            <FaChevronRight/>
        </div>

        <div className="flex text-sm w-full font-quick justify-evenly mt-4">
            <div className="bg-white px-5 py-5 rounded-xl flex flex-col items-center justify-center">
                <span className="font-semibold">Sun</span>
                <h2 className="font-semibold text-3xl">5</h2>
            </div>
            <div className="text-white px-5 py-5 bg-gradient-to-l from-[#8DA4FF] to-[#D1DBFF] rounded-xl flex flex-col items-center justify-center">
                <span className="font-semibold">Mon</span>
                <h2 className="font-semibold text-3xl">6</h2>
            </div>
            <div className="bg-white px-5 py-5 rounded-xl flex flex-col items-center justify-center">
                <span className="font-semibold">Tue</span>
                <h2 className="font-semibold text-3xl">7</h2>
            </div>
            <div className="bg-white px-5 py-5 rounded-xl flex flex-col items-center justify-center">
                <span className="font-semibold">Wed</span>
                <h2 className="font-semibold text-3xl">8</h2>
            </div>
            <div className="bg-white px-5 py-5 rounded-xl flex flex-col items-center justify-center">
                <span className="font-semibold">Thu</span>
                <h2 className="font-semibold text-3xl">9</h2>
            </div>
        </div>

        <div className="w-full flex flex-col gap-4 mt-3" >
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">06:00 AM</span>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">07:00 AM</span>
                <div className="flex absolute right-8 items-center justify-center">
                    <span className="text-sm text-white font-medium px-4 py-1 rounded-full bg-gradient-to-l to-[#E9B1E0] from-[#D3A5F2]">Ab workout, 07:00 AM</span>
                </div>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">08:00 AM</span>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">09:00 AM</span>
                <div className="flex absolute right-16 items-center justify-center">
                    <span className="text-sm text-white font-medium px-4 py-1 rounded-full bg-gradient-to-l to-[#E9B1E0] from-[#D3A5F2]">Upper Body Workout, 09:00 AM</span>
                </div>
                <div className="flex items-center  w-full">
                    <BsDot className="absolute text-blue-400 left-3 text-2xl"/>
                    <div className=" h-0.5 w-full bg-blue-400"></div>
                </div>
               
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">10:00 AM</span>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">11:00 AM</span>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">12:00 PM</span>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">01:00 PM</span>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">02:00 PM</span>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">03:00 PM</span>
                <div className="flex absolute right-12 -z-10 items-center justify-center">
                    <span className="text-sm font-medium px-4 py-1 rounded-full bg-gray-300">Lower Body Workout, 03:00 PM</span>
                </div>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">04:00 PM</span>
                <hr/>
            </div>
            <div className="flex flex-col w-full gap-3 ">
                <span className="text-sm font-semibold">05:00 PM</span>
                <hr/>
            </div>
            
        </div>
      </div>
      <Navbar/>
    </>
  );
};

export default Workout;
