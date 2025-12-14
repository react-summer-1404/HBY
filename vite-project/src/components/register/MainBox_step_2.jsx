import React, { useState } from "react";
import RegisterButton from "./Register_button";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Form, Formik } from "formik";
import apiClient from "../../core/services/interceptor";
import { getData } from "../../core/localStorage/localStorage";
import OtpInput from "react-otp-input";

const MainBox_step_2 = () => {
  const navigate = useNavigate();
  const validation = yup.object({
    verifyCode: yup.string().required("بنویس"),
  });
  const postApi = async (data) => {
    try {
      const res = await apiClient.post("/Sign/VerifyMessage", data);
      navigate("/register/step3");

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = (values) => {
    values.gmail = getData("gmail");
    console.log(values);
    postApi(values);
  };

  const [otp, setOtp] = useState("");

  return (
    <Formik
      initialValues={{ verifyCode: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <Form
          onSubmit={handleSubmit}
          className="w-[430px]  flex flex-col items-center z-10 space-y-3"
        >
          <p className="text-lg select-none">{"خوش امدید :)"}</p>
          <h3 className="text-xl font-bold mt-[4px] select-none">
            {"کد تایید"}
          </h3>
          <div className="" dir="ltr">
            <OtpInput
              value={values.verifyCode}
              onChange={(value) => {
                setFieldValue("verifyCode", value);
              }}
              name="verifyCode"
              numInputs={6}
              containerStyle={{
                height: "56px",
                display: "flex",
                gap: "15px",
              }}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "50px",
                backgroundColor: "#ccc",
              }}
            />
          </div>
          <div className="relative w-1/1"></div>
          <RegisterButton
            innerHtml="ایجاد حساب"
            className="bg-[#3C8B85] text-white font-[16px] "
          />
          <NavLink
            to="/register/step1"
            className="w-1/1 h-[48px] rounded-[8px] border-2 transition-[3s] hover:scale-95 font-[500] text-center pt-[12px] mb-[24px] cursor-pointer text-[#3C8B85] bg-white inner"
          >
            تغییر شماره همراه
          </NavLink>
          <p className="select-none">
            حساب کاربری ندارید؟
            <a className="underline text-blue-600 cursor-pointer mr-1 font-semibold">
              ورود
            </a>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default MainBox_step_2;
