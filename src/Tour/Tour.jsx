import { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Circle } from "rc-progress";
import { useNavigate } from "react-router-dom";
import tourData from "./tour.data";
import Slider from "react-slick";

import "../Tour/Tour.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tour = () => {
  const [percentage, setPercentage] = useState(33);
  const [count, setCount] = useState(0);

  var settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
  };

  let navigate = useNavigate();
  let sliderRef = useRef(null);

  const handleClick = () => {
    if (count < 1) {
      setCount(count + 1);
      setPercentage(percentage + 33);
      sliderRef.current.slickNext();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="absolute bg-white w-full h-full flex flex-col p-6 py-14  font-mon">
        <div className=" flex justify-end">
          <a href="/login" className="text-db underline">
            Skip
          </a>
        </div>

        <div>
          <Slider
            className=" mt-20 flex flex-col justify-center items-center p-3w-full h-full"
            ref={sliderRef}
            {...settings}
          >
            {tourData.map((tour) => {
              return (
                <div>
                  <img src={tour.image} alt={tour.name} />

                  <div className="relative pl-3">
                    <h2 className="font-semibold text-xl py-4">{tour.head}</h2>
                    <span className="text-md font-medium text-gray-500">
                      {tour.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className=" absolute bottom-14 right-6 justify-end items-center">
          <Circle
            percent={percentage}
            strokeColor="#89A1FF"
            strokeWidth={3}
            trailColor=""
            trailWidth={2}
            strokeLinecap="round"
            className="absolute scale-125 w-14 h-14"
          />
          <button
            id="btn"
            onClick={handleClick}
            className="flex bg-gradient-to-r from-db to-lb w-14 h-14 rounded-full items-center justify-center"
          >
            <IoIosArrowForward className="text-white scale-150" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Tour;
