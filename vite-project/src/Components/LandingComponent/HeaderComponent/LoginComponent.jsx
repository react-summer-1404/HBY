import React from "react";
import { useNavigate } from "react-router-dom"; 

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center w-[150px] h-[40px] pr-[23px] pt-[6px] pl-[23px] gap-[8px] bg-[#9B0EE1] rounded-md text-amber-50">
      <button onClick={handleLoginClick}>ورود/ثبت نام</button>
    </div>
  );
};

export default LoginComponent;
