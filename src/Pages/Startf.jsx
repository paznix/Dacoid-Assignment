import Track from "../res/track.png";

const Startf = () => {
  return (
    <>
      <div className="absolute w-full h-full flex flex-col p-6 pb-28 pt-8 justify-evenly font-mon">
        <img className="px-6" src={Track} alt="Track" />

        <div className="flex flex-col gap-3 pb-20">
          <h2 className="font-semibold text-xl">Track Your Goal</h2>
          <span className="text-md text-md font-medium text-gray-500">
            Don’t worry if you have trouble determining your goals, We can help
            you determine your goals and track your goals
          </span>
        </div>
      </div>
    </>
  );
};

export default Startf;
