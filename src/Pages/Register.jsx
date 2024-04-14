import G from "../res/G.jpeg";
import F from "../res/f.jpeg";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleEye = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    var checkBox = document.getElementById("tnc");
    var button = document.getElementById("sub");

    if (checkBox.checked == true) {
      button.style.opacity = "100%";
      navigate("/goals");
    } else {
      button.style.opacity = "50%";
    }

  };

  return (
    <>
      <div className=" absolute font-mon w-full h-full p-6 flex flex-col justify-between">
        <div>
          <div className="w-full h-8"></div>
          <h2 className=" text-2xl font-semibold font-rob">
            Create an Account
          </h2>

          <div className="mt-12 mb-3 flex flex-col gap-6">
            <div className="text-gray-500 bg-gray-100 rounded-xl px-6 py-4">
              <input
                className="font-semibold bg-gray-100 w-full focus:outline-none "
                type="text"
                name="fname"
                placeholder="First Name"
              />
            </div>
            <div className="text-gray-500 bg-gray-100 rounded-xl px-6 py-4">
              <input
                className="font-semibold bg-gray-100 w-full focus:outline-none "
                type="text"
                name="lname"
                placeholder="Last Name"
              />
            </div>
            <div className="text-gray-500 bg-gray-100 rounded-xl px-6 py-4">
              <input
                className="font-semibold bg-gray-100 w-full focus:outline-none "
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex text-gray-500 bg-gray-100 rounded-xl px-6 py-4 items-center">
              <input
                className="font-semibold bg-gray-100 w-full focus:outline-none"
                type={show ? "text" : "password"}
                name="pass"
                placeholder="Password"
              />
              <button className="text-xl" onClick={handleEye}>
                {show ? <LuEye /> : <LuEyeOff />}
              </button>
            </div>
            <div className="flex items-center gap-2 pl-1">
              <input
                className="w-4 h-4 outline-none bg-gray-100 accent-[#478eff]"
                type="checkbox"
                name="tnc"
                id="tnc"
              />
              <div className="text-xs">
                <span> By proceeding, I agree to all </span>
                <span className="underline text-fb">T&C </span>
                <span>and </span>
                <span className="underline text-fb">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-col gap-7 mb-3 ">
          <button
            id="sub"
            style={{ opacity: "50%" }}
            className="w-full font-medium text-lg text-white rounded-xl px-6 py-3.5 bg-gradient-to-l from-lb to-db"
            onClick={handleSubmit}
          >
            Create Account
          </button>
          <div className="flex items-center">
            <div className="bg-gray-300 w-full h-0.5"></div>
            <span className=" font-mon text-sm font-medium p-2 ">
              Or
            </span>
            <div className="bg-gray-300 w-full h-0.5"></div>
          </div>

          <div className="flex gap-5 justify-center">
            <div className="p-3 rounded-xl border  border-black">
              <img className="h-5 w-5 " src={G} alt="google" />
            </div>
            <div className="p-3 rounded-xl border  border-black">
              <img className="h-5 w-5" src={F} alt="fb" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="underline text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-fb underline">Login</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
