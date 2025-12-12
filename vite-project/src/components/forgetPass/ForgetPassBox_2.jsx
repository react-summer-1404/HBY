import React from "react";
import RegisterButton from "../register/Register_button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import apiClient from "../../core/services/interceptor";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getData } from "../../core/localStorage/localStorage";

const ForgetPassBox_1 = () => {
  const validation = yup.object({
    newPassword: yup.string().min(6, "8تا").required("بنویس"),
    resetValue:yup.string().max(6,"6تا").required("بنویس")
  });
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const postApi = async (data) => {
    try {
      setLoading(false);
      const res = await apiClient.post("/Sign/Reset", data);
    } catch (error) {
      console.log(error, "dddddddddddd");
    }
  };
  const onSubmit = (values) => {
    values.email=getData("email");
    console.log(values);
    postApi(values);
    navigate("/forgetpass/step2");
  };
  return (
    <Formik
      initialValues={{ newPassword: "", resetValue: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validation}
    >
      <Form className="flex flex-col justify-center items-center bg-[#F5F5F5] shadow-box rounded-t-[80px] mt-0 md:mt-[70px] h-1/1 w-1/1 md:rounded-[20px] md:w-[561px] md:h-[491px] px-[30px] py-[64px]">
        <p className="text-lg select-none">{"خوش امدید :)"}</p>
        <h3 className="text-xl font-bold mt-[4px] select-none mx-auto">
          {"ایجاد حساب کاربری"}
        </h3>
        <div className="relative md:w-[430px] w-[345px]">
          <div className="relative w-[345px] md:w-[430px]">
            <Field
              name="newPassword"
              className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
              placeholder="رمز عبور"
              type="password"
            />

            <img
              src="/register/password.png"
              className="h-[20px] w-[20px] absolute bottom-[10.5px] right-[8px] my-1 "
            />
            <ErrorMessage name="newPassword" />
          </div>
          <div className="relative w-[345px] md:w-[430px]">
            <Field
              name="resetValue"
              className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
              placeholder="کد"
            />
            <img
              src="/register/password.png"
              className="h-[20px] w-[20px] absolute bottom-[10.5px] right-[8px] my-1 "
            />{" "}
            <ErrorMessage name="resetValue" />
          </div>
        </div>

        <RegisterButton
          innerHtml="ریافت کد تایید"
          className="bg-[#3C8B85] text-white md:w-[430px] w-[345px]"
        />
      </Form>
    </Formik>
  );
};

export default ForgetPassBox_1;
