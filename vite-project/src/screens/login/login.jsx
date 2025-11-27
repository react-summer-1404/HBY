import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaUser, FaLock, FaBars } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import motor from "./../../assets/login/Capture.png";
import logodr from "./../../assets/login/Capture3.png";
import stepsicon from "./../../assets/login/Capture2.png";
import bgimg from "./../../assets/login/background.svg";
import bgimg2 from "./../../assets/login/bakas.svg";
import logodr2 from "./../../assets/login/logodr2.svg";
import wizard from "./../../assets/login/wizard.svg";
import Home4 from "./../../assets/login/Home 4.svg";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false) ;
  const navigate = useNavigate();
  const loginnumclic = () => {
    navigate("/loginnum");
  };

  return (
    <div className="flex min-h-screen  bg-[#3C8B85] font-sans relative overflow-hidden" dir="rtl">
      {/* آیکون منو بالا */}
      <div className="z-1 bg-[#ffff] absolute top-[20px] left-[50px] text-purple-600 cursor-pointer hover:scale-110 transition border rounded-full  w-[40px] h-[40px] flex items-center justify-center">
        <FaBars size={26} />
      </div>

        <img src={bgimg2} className="absolute w-full h-full hidden lg:block" />
      {/* بدنه اصلی */}
      {/* <div className="flex flex-1 items-center justify-center"> */}
        {/* <div className="flex bg-white rounded-3xl shadow-lg w-[95%] max-w-[1300px] h-[720px] overflow-hidden"> */}
            {/* لوگو */}
            <img
              src={logodr}
              alt="لوگو"
              className="absolute top-8 right-8 w-[200px] z-20 hidden lg:block" 
            />
            
          {/* بخش چپ - تصویر */}
          <div className="relative  w-1/2   lg:flex flex-col items-center justify-center overflow-hidden hidden">
          
            {/* تصویر موتور */}
            <img
              src={motor}
              alt="موتور"
              className="w-[800px] mt-10 z-20 "
            />

            {/* دکمه ثبت نام */}
            <button className="absolute top-[200px] right-[190px] mt-2 bg-purple-600 text-white px-8 py-2 rounded-lg hover:bg-purple-700 transition z-40 w-[150px] h-[50px]">
              ثبت نام
            </button>
            
          </div>
      
          {/* بخش راست - فرم ورود */}
          <div className="lg:top-[200px] relative top-[300px] w-[700px] h-[500px] flex flex-col justify-center items-center px-14 py-10 lg:bg-[#F5F5F5] bg-[#3C8B85] ">

             {/* نوار  lg */}
             <img  src={bgimg} className="w-[800px]  absolute -z-[2px] top-[-50px] lg:hidden"/>

            <h2 className="text-gray-700 mb-2 text-base z-1">خوش آمدی )</h2>
            <h1 className="text-3xl font-bold text-gray-900 mb-8 z-1">
              ورود به حساب کاربری
            </h1>

            <div className=" w-full z-1">
              <link className="block text-gray-600 text-base mb-3 " /> 
                ورود با{""}
                <span onClick={loginnumclic} className="text-purple-600 font-medium cursor-pointer">
                  شماره همراه
                </span>
              <link/>

              {/* فیلد ایمیل */}
              <div className="relative mb-5 ">
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="w-full border border-gray-300 rounded-lg p-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
                />
                <FaUser className="absolute right-3 top-4 text-gray-400" />
              </div>

               {/* فیلد رمز عبور  */}
              <div className="relative mb-5">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="رمز عبور"
                  className="w-full border border-gray-300 rounded-lg p-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
                />
                <FaLock className="absolute right-3 top-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-4 text-gray-400"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm mb-8">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-purple-600" />
                  مرا به خاطر بسپار
                </label>
                <a href="#" className="text-purple-600 hover:underline">
                  فراموشی رمز عبور
                </a>
              </div>

              <button className="w-full bg-teal-600 text-white py-3 rounded-lg text-lg hover:bg-teal-700 transition">
                ورود به حساب
              </button>
              <p className="text-center mt-6 text-base text-gray-600">
                حساب کاربری نداری؟{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                  ثبت نام
                </a>
              </p>
            </div>
          </div>

        {/* </div> */}
      {/* </div> */}

        <div className=" lg:flex w-[80px] h-[200] absolute top-[300px] left-[10px] hidden">

          <img src={stepsicon} />
        
        </div>

        <img src={logodr2} className="block absolute h-[45px] top-[20px] right-[210px]  lg:hidden" />
   
        <img src={wizard} className="block absolute h-[60px] top-[120px] right-[180px]  lg:hidden" /> 

        <img src={Home4} className="block absolute h-[40px] top-[20px] right-[20px]  lg:hidden" /> 
    </div>
  );
};

export default Login;
