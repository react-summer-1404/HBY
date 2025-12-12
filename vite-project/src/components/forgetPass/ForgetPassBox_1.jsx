import React from "react";
import RegisterButton from "../register/Register_button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import apiClient from "../../core/services/interceptor";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setData } from "../../core/localStorage/localStorage";
const ForgetPassBox_1 = () => {
  const validation = yup.object({
    email: yup.string().required("بنویس").email("ایمیلٍ لامسب"),
  });
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const postApi = async (data) => {
    try {
      setLoading(false);

      const res = await apiClient.post("/Sign/ForgetPassword", data);
      return res.data;
    } catch (error) {
      console.log(error, "dddddddddddd");
    }
  };
  const onSubmit = (values) => {
    setData("email",values.email);
    values.baseUrl = "https://localhost:5173/resetpassword";
    postApi(values);
    navigate("/forgetpass/step2");
  };
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validation}
    >
      <Form className="flex flex-col md:justify-center items-center bg-[#F5F5F5] shadow-box rounded-t-[80px] md:mt-[80px] w-1/1 md:rounded-[20px] md:w-[561px] md:h-[491px] px-[30px] py-[64px]">
        <p className="text-lg select-none mt-10 md:mt-0">{"خوش امدید :)"}</p>
        <h3 className="text-xl font-bold mt-[4px] select-none mx-auto">
          {"ایجاد حساب کاربری"}
        </h3>
        <div className="relative w-[345px] md:w-[430px]">
          <Field
            name="email"
            className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
            placeholder="ایمیل"
          />
          <ErrorMessage name="email" />
          <img
            src="/register/email.png"
            className="h-[20px] w-[20px] absolute bottom-[10.5px] right-[8px] my-1 "
          />
        </div>
        <RegisterButton
          innerHtml="ریافت کد تایید"
          className="bg-[#3C8B85] text-white w-[345px] md:w-[430px] "
        />
      </Form>
    </Formik>
  );
};

export default ForgetPassBox_1;
