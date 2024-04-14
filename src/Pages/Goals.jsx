import { useNavigate } from "react-router-dom";

const Goals = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/home")

  }
  return (
    <>
      <div className="absolute font-mon w-full h-full p-6 py-12 flex flex-col justify-evenly">
       

        <h2 className="text-2xl font-semibold text-center ">
          What are your Goals?
        </h2>
        <div className="flex flex-col gap-4 text-sm font-semibold accent-[#478eff]">
          <div className="flex justify-between bg-gray-100 px-5 py-5 rounded-xl">
            <span>Weight Loss</span>
            <input className="w-4 h-4 outline-none bg-gray-100 " type="checkbox"/>
          </div>
          <div className="flex justify-between bg-gray-100 px-5 py-5 rounded-xl">
            <span>Muscle gain</span>
            <input className="w-4 h-4" type="checkbox"/>
          </div>
          <div className="flex justify-between bg-gray-100 px-5 py-5 rounded-xl">
            <span>Flexibility and Mobility</span>
            <input className="w-4 h-4" type="checkbox" />
          </div>
          <div className="flex justify-between bg-gray-100 px-5 py-5 rounded-xl">
            <span>General Fitness</span>
            <input className="w-4 h-4" type="checkbox" />
          </div>
          <div className="flex justify-between bg-gray-100 px-5 py-5 rounded-xl">
            <span>Event - specific training</span>
            <input className="w-4 h-4" type="checkbox" />
          </div>
          <div className="flex justify-between bg-gray-100 px-5 py-5 rounded-xl ">
            <span>Mindfulness and Mental Health</span>
            <input className="w-4 h-4" type="checkbox" />
          </div>
        </div>

        <button className="w-full font-medium text-lg text-white rounded-xl px-6 py-3.5 
        bg-gradient-to-l from-lb to-db shadow-md" onClick={handleClick}>
            Confirm
          </button>
      </div>
    </>
  );
};

export default Goals;
