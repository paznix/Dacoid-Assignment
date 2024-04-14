import Cycle from "../res/cycle.png";

const Starts = () => {
  return (
    <>
      <div className="absolute w-full h-full flex flex-col p-6 pb-28 pt-8 justify-evenly font-mon">
        <img className="px-6" src={Cycle} alt="Track" />

        <div className="flex flex-col gap-3 pb-20">
          <h2 className="font-semibold text-xl">Get Burn</h2>
          <span className="text-md text-md font-medium text-gray-500">
          Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
          </span>
        </div>
      </div>
    </>
  );
};

export default Starts;
