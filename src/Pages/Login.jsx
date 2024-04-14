import G from "../res/G.jpeg";
import F from "../res/f.jpeg";
import { LuEyeOff, LuEye} from "react-icons/lu";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/goals");
  }

const [show, setShow] = useState(false);

const handleEye = () => {
  setShow(!show);
}

  return (
    <>
      <div className=" absolute font-mon w-full h-full p-6 flex flex-col justify-between">
        <div>
          <div className="w-full h-8"></div>
          <h2 className=" text-2xl font-semibold font-rob">Welcome Back</h2>

          <div className="mt-12 mb-3 flex flex-col gap-6">
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
                type={show? "text" : "password"}
                name="pass"
                placeholder="Password"
              />
              <button className="text-xl" onClick={handleEye}>
                    {show? <LuEye/> : <LuEyeOff/>}
              </button>
              
              
              
            </div>
          </div>
          <span className="underline cursor-pointer text-sm">
            Forgot your password?
          </span>
        </div>

        <div className=" w-full flex flex-col gap-7 mb-3 ">
          <button
          onClick={handleNavigation}
          className="w-full font-medium text-lg text-white rounded-xl px-6 py-3.5 bg-gradient-to-l from-lb to-db">
            Sign In
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
              Don't have an account yet?{" "}
              <a 
              href="/register"
              className="text-fb underline">Create an account</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
